/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0091 DC Controller: Oracle sessions
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0091 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    this.queryWhere.append("type='USER'");
    if (this.request.getParam("QRY_SQL_TEXT") != null && !this.request.getParam("QRY_SQL_TEXT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.SQL_TEXT like :SQL_TEXT");
      this.queryParams.put("SQL_TEXT",(String)this.request.getParam("QRY_SQL_TEXT"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.CLIENT_INFO"+
               " ,t.LOGON_TIME"+
               " ,t.MACHINE"+
               " ,t.MODULE"+
               " ,t.OSUSER"+
               " ,t.PROCESS"+
               " ,t.PROGRAM"+
               " ,t.SADDR"+
               " ,t.SCHEMANAME"+
               " ,t.SERIAL_"+
               " ,t.SERVER"+
               " ,t.SERVICE_NAME"+
               " ,t.SID"+
               " ,t.SQL_ADDRESS"+
               " ,t.SQL_ID"+
               " ,t.SQL_TEXT"+
               " ,t.STATE"+
               " ,t.STATUS"+
               " ,t.TERMINAL"+
               " ,t.TYPE"+
               " ,t.USERNAME"+
           " from V_ORCL_SESSION t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.SID"+
               " ,t.SERIAL_"+
               " ,t.USERNAME"+
               " ,t.STATUS"+
               " ,t.MACHINE"+
               " ,t.TERMINAL"+
               " ,t.OSUSER"+
               " ,t.PROGRAM"+
               " ,t.TYPE"+
               " ,t.LOGON_TIME"+
               " ,t.SADDR"+
               " ,t.SERVER"+
               " ,t.SCHEMANAME"+
               " ,t.PROCESS"+
               " ,t.SQL_ADDRESS"+
               " ,t.SQL_ID"+
               " ,t.MODULE"+
               " ,t.CLIENT_INFO"+
               " ,t.STATE"+
               " ,t.SERVICE_NAME"+
               " ,t.SQL_TEXT"+
           " from V_ORCL_SESSION t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate() throws Exception  {}
public void doDelete() throws Exception {}
public void initNewRecord() throws Exception {}
private void findByPk()  throws Exception {
    String sql = "select "+ 
               " t.CLIENT_INFO"+
               " ,t.LOGON_TIME"+
               " ,t.MACHINE"+
               " ,t.MODULE"+
               " ,t.OSUSER"+
               " ,t.PROCESS"+
               " ,t.PROGRAM"+
               " ,t.SADDR"+
               " ,t.SCHEMANAME"+
               " ,t.SERIAL_"+
               " ,t.SERVER"+
               " ,t.SERVICE_NAME"+
               " ,t.SID"+
               " ,t.SQL_ADDRESS"+
               " ,t.SQL_ID"+
               " ,t.SQL_TEXT"+
               " ,t.STATE"+
               " ,t.STATUS"+
               " ,t.TERMINAL"+
               " ,t.TYPE"+
               " ,t.USERNAME"+
           " from V_ORCL_SESSION t"+
        " where "+
     "      t.SERIAL_= :SERIAL_"+ 
     "      t.SID= :SID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_INFO", new FieldDef("STRING"));
	  this.fields.put("LOGON_TIME", new FieldDef("STRING"));
	  this.fields.put("MACHINE", new FieldDef("STRING"));
	  this.fields.put("MODULE", new FieldDef("STRING"));
	  this.fields.put("OSUSER", new FieldDef("STRING"));
	  this.fields.put("PROCESS", new FieldDef("STRING"));
	  this.fields.put("PROGRAM", new FieldDef("STRING"));
	  this.fields.put("SADDR", new FieldDef("STRING"));
	  this.fields.put("SCHEMANAME", new FieldDef("STRING"));
	  this.fields.put("SERIAL_", new FieldDef("STRING"));
	  this.fields.put("SERVER", new FieldDef("STRING"));
	  this.fields.put("SERVICE_NAME", new FieldDef("STRING"));
	  this.fields.put("SID", new FieldDef("STRING"));
	  this.fields.put("SQL_ADDRESS", new FieldDef("STRING"));
	  this.fields.put("SQL_ID", new FieldDef("STRING"));
	  this.fields.put("SQL_TEXT", new FieldDef("STRING"));
	  this.fields.put("STATE", new FieldDef("STRING"));
	  this.fields.put("STATUS", new FieldDef("STRING"));
	  this.fields.put("TERMINAL", new FieldDef("STRING"));
	  this.fields.put("TYPE", new FieldDef("STRING"));
	  this.fields.put("USERNAME", new FieldDef("STRING"));
	  String[] _pkFields = {"SERIAL_","SID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 40;
	}

}
