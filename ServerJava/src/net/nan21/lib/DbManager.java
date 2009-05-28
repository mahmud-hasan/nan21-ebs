package net.nan21.lib;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.naming.Context;
import javax.naming.InitialContext;

import org.apache.log4j.Logger;

import oracle.jdbc.OracleCallableStatement;
import oracle.jdbc.OraclePreparedStatement;
import oracle.jdbc.driver.OracleConnection;
import oracle.jdbc.pool.OracleDataSource;

public class DbManager {

	private String dbJndiName;
	private OracleConnection dbConn;

	private static Logger logger = Logger.getLogger(DbManager.class);
	
	public DbManager(String dbJndiName) throws Exception {
		this.dbJndiName = dbJndiName;
		doDbConnection();
	}
 
	// -------------------- getters/ setters

	public OracleConnection getDbConn() {
		return dbConn;
	}

	public void setDbConn(OracleConnection dbConn) {
		this.dbConn = dbConn;
	}

	public void close() throws SQLException {
		dbConn.close();
		dbConn = null;
	}
	
	  private void doDbConnection() throws Exception {  
		  if (this.dbConn == null) { 
			  Context initContext = new InitialContext();
		      Context envContext = (Context) initContext.lookup("java:/comp/env");
		      OracleDataSource ds = (OracleDataSource) envContext.lookup(this.dbJndiName);
	
		     if (envContext == null) throw new Exception("Cannot establish DB connection: No Context");
		     if (ds == null) throw new Exception("Cannot establish DB connection: No DataSource");
		     if (ds != null) dbConn = (OracleConnection)ds.getConnection();
	
	 
			  if (this.dbConn == null) {
				 throw new Exception("Cannot establish DB connection: No connection");
			  }
			  if (logger.isDebugEnabled()) {
				  logger.debug("Got connection <"+dbConn.toString()+">");
			  }
		  }
	    }
	  
	  
		public void executeNamedProcedure(String sql) throws SQLException {		
			_executeProcedure(sql, null, null, null , true);		
		}
		
		public void executeNamedProcedure(String sql, Properties inParams, Map<String,String> paramValues) throws SQLException {		
			_executeProcedure(sql, inParams, null, paramValues , true);		
		}
		public void executeNamedProcedure(String sql, Properties inParams, Properties outParams, Map<String,String> paramValues) throws SQLException {
			_executeProcedure(sql, inParams, outParams, paramValues , true);		
		}
		
		
	public void executeProcedure(String sql) throws SQLException {		
		_executeProcedure(sql, null, null, null , false);		
	}
	
	public void executeProcedure(String sql, Properties inParams, Map<String,String> paramValues) throws SQLException {		
		_executeProcedure(sql, inParams, null, paramValues , false);		
	}
	public void executeProcedure(String sql, Properties inParams, Properties outParams, Map<String,String> paramValues) throws SQLException {
		_executeProcedure(sql, inParams, outParams, paramValues , false);		
	}
	
	private void _executeProcedure(String sql, Properties inParams,
			Properties outParams, Map<String,String> paramValues, boolean isNamed) throws SQLException {
		if ((inParams != null ||outParams != null) && paramValues == null) {
			throw new SQLException("INVALID_PROCEDURE_CALL");
		}
		
		
		
		
		OracleCallableStatement st = null;
		try {
			st = (OracleCallableStatement) this.getDbConn().prepareCall(sql);

			// bind in parameters
			if (isNamed) {
				if (inParams != null ) {
					Iterator it = inParams.keySet().iterator();
					while (it.hasNext()) {
						String p = (String) it.next();
						st.setStringAtName(p, paramValues.get(inParams.getProperty(p)));						
					}
				}
			} else {
				if (inParams != null ) {
					Iterator it = inParams.keySet().iterator();
					while (it.hasNext()) {
						String p = (String) it.next();						
						st.setString(p, paramValues.get(inParams.getProperty(p)));
					}
				}
			}
			
			if (outParams != null ) {
				// bind out parameters
				Iterator it = outParams.keySet().iterator();
				while (it.hasNext()) {
					String p = (String) it.next();
					st.registerOutParameter(p, java.sql.Types.VARCHAR);
				}
 
			}
			if (logger.isDebugEnabled()) {
				logger.debug("SQL:"+sql);				
			}
			st.execute();

			// read out parameter values
			if (outParams != null ) {
				Iterator it = outParams.keySet().iterator();
				while (it.hasNext()) {
					String p = (String) it.next();
					paramValues.put(outParams.getProperty(p), st.getString(p));
				}
			}
		} catch (SQLException e) {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace(); // log it ...
			}
			throw e;
		} finally {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e) {
				e.printStackTrace(); // log it ...
			}
		}
	}

	public void executeStatement(String sql) throws SQLException {
		executeStatement(sql, null);
	}
	
	public void executeStatement(String sql, Map<String,String> params)
			throws SQLException {
		OraclePreparedStatement st = null;
		try {
			st = (OraclePreparedStatement) this.getDbConn().prepareStatement(
					sql);
			if (params != null) {
				Iterator it = params.keySet().iterator();
				while (it.hasNext()) {
					String p = (String) it.next();
					//System.out.println(p);
					try {
						st.setStringAtName(p, params.get(p));
					} catch (SQLException e) {
						if (e.getErrorCode() == 17147) {
							//System.out.println(e.getMessage());
							// it means that the sql doesn't contain a certain bind
							// parameter which is a key
							// in this.record. ignore it and go on ...
						} else {
							throw e;
						}
					}
				}
			}
			if (logger.isDebugEnabled()) {
				logger.debug("SQL:"+sql);
			}	
			st.execute();
		} catch (SQLException e) {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace(); // log it ...
			}
			throw e;
		} finally {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e) {
				e.printStackTrace(); // log it ...
			}
		}

	}

	private Map<String, String> rsRowToMap(ResultSet rs) throws SQLException {
		Map<String, String> pRow = new HashMap<String, String>();
		ResultSetMetaData rsmd = rs.getMetaData();
		int cols = rsmd.getColumnCount();
		SimpleDateFormat df = new SimpleDateFormat("dd.MM.yyyy");			
		for (int i = 1; i <= cols; i++) {
			if (rs.getString(i) != null) {
				if (rsmd.getColumnTypeName(i).equals("DATE")) {
					pRow.put(rsmd.getColumnName(i), df.format(rs.getDate(i)));
				} else {
					pRow.put(rsmd.getColumnName(i), rs.getString(i));	
				}				
			} else {
				pRow.put(rsmd.getColumnName(i), "");
			}

		}
		return pRow;
	}

	private List<Map<String, String>> rsToPropertiesList(ResultSet rs)
			throws SQLException {
		List<Map<String, String>> results = new ArrayList<Map<String, String>>();
		while (rs.next()) {
			results.add(this.rsRowToMap(rs));
		}
		return results;
	}
	
	
	
	
	public Map<String, String> getDcTranslations(String lang, String dc) throws Exception {
		String sql = "select t.msg_type,t.msg_code,  t.translation from v_ui_dictionary t where t.language_code = '"+lang+"' and t.uidc_code = '"+dc+"'";
		Map<String, String> p = new HashMap<String, String>();
		ResultSet rs = null;
		try {
			rs = this.getDbConn().createStatement().executeQuery(sql);
			while(rs.next()) {
			   	p.put(rs.getString("MSG_TYPE")+"."+rs.getString("MSG_CODE"), (rs.getString("TRANSLATION")!=null)?rs.getString("TRANSLATION"):"");
			}		
		} catch (SQLException e) {
			try { 
				if (rs != null) {
					rs.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace(); // log it ...
			}
			if (!(e.getErrorCode() == 942)) { // table or view does not exist
				throw e;
			}
			
		} finally {
			
			try {
				if (rs != null) {
					rs.close();
				}
			} catch (SQLException e) {
				e.printStackTrace(); // log it ...
			}
			
		}
		return p;
	}
	
	public List<Map<String, String>> executeQuery(String sql)
	throws SQLException {
		return executeQuery(sql, null);
	}
	
	public List<Map<String, String>> executeQuery(String sql, Map<String, String> params)
			throws SQLException {
		OraclePreparedStatement st = null;
		try {
			st = (OraclePreparedStatement) this.getDbConn().prepareStatement(
					sql);
			if (params != null) {
				Iterator it = params.keySet().iterator();
				while (it.hasNext()) {
					String p = (String) it.next();
					try {
						st.setStringAtName(p, params.get(p));
					} catch (SQLException e) {
						if (e.getErrorCode() == 17147) {
							//System.out.println(e.getMessage());
							// it means that the sql doesn't contain a certain
							// bind parameter which is a key
							// in this.record. ignore it and go on ...
						} else {
							throw e;
						}
					}
				}
			}
			if (logger.isDebugEnabled()) {
				logger.debug("SQL:"+sql);
			}			
			st.execute();
			return rsToPropertiesList(st.getResultSet());

		} catch (SQLException e) {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e1) {
				e1.printStackTrace(); // log it ...
			}
			throw e;
		} finally {
			try {
				if (st != null) {
					st.close();
				}
			} catch (SQLException e) {
				e.printStackTrace(); // log it ...
			}
		}

	}

	public List<Map<String, String>> executeQueryLimit(String sql, Map<String, String> params,
			int _queryResultStart, int _queryResultSize) throws SQLException {
		//TODO: validate limit integers ....
		int _queryResultStop = _queryResultStart + _queryResultSize;
		_queryResultStart++;		 
		String lSql = "select /*+ FIRST_ROWS("+_queryResultSize+") */ n21t_2.* from (select n21t_1.*, rownum as nan21ebs_rownum from ("+sql+") n21t_1 where rownum <= "+_queryResultStop+") n21t_2 where n21t_2.nan21ebs_rownum >= "+_queryResultStart;
		return this.executeQuery(lSql, params);
	}

	public int countQueryResults(String sql, Map<String, String> params)
			throws SQLException {
		int res = -1;
		String countSql = "select count(*) TOTALCOUNT from (" + sql + ") t";
		res = Integer.parseInt(this.executeQuery(countSql, params).get(0).get("TOTALCOUNT"));
		return res;
	}

	public String getSequenceNextValue(String sequencaName) throws SQLException {
		ResultSet rsSeq = this.getDbConn().createStatement().executeQuery(
				"select " + sequencaName + ".nextval seq_val from dual");
		rsSeq.next();
		return rsSeq.getString("SEQ_VAL");
	}

	public String getDbJndiName() {
		return dbJndiName;
	}

	public void setDbJndiName(String dbJndiName) {
		this.dbJndiName = dbJndiName;
	}

}