/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0031 DC Controller: Users
 */

package net.nan21.ebs.dc;


import java.sql.Connection;
import java.sql.ResultSet;
import java.util.Date;
import java.util.HashMap;
import java.util.Properties;
import javax.servlet.http.HttpServletResponse;
import net.nan21.ebs.lib.CollectionUtils;
import net.nan21.ebs.lib.AbstractDataControl;
import net.nan21.ebs.lib.FieldDef;
import net.nan21.ebs.lib.HttpRequest;
import net.nan21.ebs.lib.HttpSession;
import net.nan21.ebs.lib.IDataControl;
import net.nan21.ebs.lib.DbManager;

public class DC0031 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_LOGIN_CODE") != null && !this.request.getParam("QRY_LOGIN_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("LOGIN_CODE like :LOGIN_CODE");
      this.queryParams.put("LOGIN_CODE",(String)this.request.getParam("QRY_LOGIN_CODE").toUpperCase());
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ACCOUNT_EXPIRED"+
               " ,ACCOUNT_LOCKED"+
               " ,CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,DBUSER"+
               " ,ID"+
               " ,LOGIN_CODE"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,PERSON_ID"+
           " from SYS_USER  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,LOGIN_CODE"+
               " ,ACCOUNT_LOCKED"+
               " ,ACCOUNT_EXPIRED"+
               " ,DBUSER"+
               " ,PERSON_ID"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CREATEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from SYS_USER  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert()  throws Exception {
  this.populateRecordFromRequest(); 
  this.populateRecordWithClientSpecific();
    String sql = "insert into SYS_USER("+
               "  ACCOUNT_EXPIRED"+
               " ,ACCOUNT_LOCKED"+
               " ,DBUSER"+
               " ,ID"+
               " ,LOGIN_CODE"+
               " ,PERSON_ID"+
           " ) values ( "+
               "  :ACCOUNT_EXPIRED"+
               " ,:ACCOUNT_LOCKED"+
               " ,:DBUSER"+
               " ,:ID"+
               " ,:LOGIN_CODE"+
               " ,:PERSON_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_USER_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update SYS_USER set "+
               "  ID=:ID"+
               " ,LOGIN_CODE=:LOGIN_CODE"+
               " ,ACCOUNT_LOCKED=:ACCOUNT_LOCKED"+
               " ,ACCOUNT_EXPIRED=:ACCOUNT_EXPIRED"+
               " ,DBUSER=:DBUSER"+
   " where "+
     "      ID= :ID"+
   "";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoUpdate();	
}

public void doDelete() throws Exception {
    this.populateRecordPkFromRequest();
   String sql = "delete from SYS_USER where "+
     "      ID= :ID"+
    "";
    dbm.executeStatement(sql, this.recordPk);
   this.writeResultDoDelete();
}

public void initNewRecord() throws Exception {
    this.populateRecordFromRequest();
    this.record.put("_p_record_status", "insert");
    this.writeResultInitNewRecord();
}

private void findByPk()  throws Exception {
    String sql = "select "+ 
               " ACCOUNT_EXPIRED"+
               " ,ACCOUNT_LOCKED"+
               " ,CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,DBUSER"+
               " ,ID"+
               " ,LOGIN_CODE"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,PERSON_ID"+
           " from SYS_USER "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ACCOUNT_EXPIRED", new FieldDef("BOOLEAN"));
	  this.fields.put("ACCOUNT_LOCKED", new FieldDef("BOOLEAN"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DBUSER", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("LOGIN_CODE", new FieldDef("STRING"));
	  this.fields.get("LOGIN_CODE").setCaseRestriction("Upper");
	  this.fields.put("LOGIN_PASSWORD", new FieldDef("STRING"));
	  this.fields.get("LOGIN_PASSWORD").setInDS(false);
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PERSON_ID", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
