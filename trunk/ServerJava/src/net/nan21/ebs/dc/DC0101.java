/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0101 DC Controller: Acc schema default accounts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0101 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ACCSCHEMAPARAM_ID") != null && !this.request.getParam("QRY_ACCSCHEMAPARAM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCSCHEMAPARAM_ID like :ACCSCHEMAPARAM_ID");
      this.queryParams.put("ACCSCHEMAPARAM_ID",(String)this.request.getParam("QRY_ACCSCHEMAPARAM_ID"));
    }
    if (this.request.getParam("QRY_ACCSCHEMA_ID") != null && !this.request.getParam("QRY_ACCSCHEMA_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCSCHEMA_ID like :ACCSCHEMA_ID");
      this.queryParams.put("ACCSCHEMA_ID",(String)this.request.getParam("QRY_ACCSCHEMA_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_PARAM_ACCT_ID") != null && !this.request.getParam("QRY_PARAM_ACCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PARAM_ACCT_ID like :PARAM_ACCT_ID");
      this.queryParams.put("PARAM_ACCT_ID",(String)this.request.getParam("QRY_PARAM_ACCT_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ACCSCHEMAPARAM_ID"+
               " ,pbo_acc.get_accschemaparam_name_by_id(t.ACCSCHEMAPARAM_ID) ACCSCHEMAPARAM_NAME"+
               " ,t.ACCSCHEMA_ID"+
               " ,pbo_acc.get_accschema_name_by_id(t.ACCSCHEMA_ID) ACCSCHEMA_NAME"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PARAM_ACCT_ID"+
               " ,pbo_acc.get_acct_code_by_id(t.PARAM_ACCT_ID) PARAM_ACCT_NAME"+
           " from AC_CLIACCSCHEMA_PARAMACCT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               ",pbo_acc.get_accschema_name_by_id(t.ACCSCHEMA_ID) ACCSCHEMA_NAME"+
               " ,t.ACCSCHEMA_ID"+
               " ,t.ACCSCHEMAPARAM_ID"+
               ",pbo_acc.get_accschemaparam_name_by_id(t.ACCSCHEMAPARAM_ID) ACCSCHEMAPARAM_NAME"+
               " ,t.PARAM_ACCT_ID"+
               ",pbo_acc.get_acct_code_by_id(t.PARAM_ACCT_ID) PARAM_ACCT_NAME"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from AC_CLIACCSCHEMA_PARAMACCT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into AC_CLIACCSCHEMA_PARAMACCT("+
               "  ACCSCHEMAPARAM_ID"+
               " ,ACCSCHEMA_ID"+
               " ,CLIENT_ID"+
               " ,ID"+
               " ,PARAM_ACCT_ID"+
           " ) values ( "+
               "  :ACCSCHEMAPARAM_ID"+
               " ,:ACCSCHEMA_ID"+
               " ,:CLIENT_ID"+
               " ,:ID"+
               " ,:PARAM_ACCT_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_CLIACCSCHPACCT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update AC_CLIACCSCHEMA_PARAMACCT set "+
               "  ACCSCHEMAPARAM_ID=:ACCSCHEMAPARAM_ID"+ 
               " ,ACCSCHEMA_ID=:ACCSCHEMA_ID"+ 
               " ,CLIENT_ID=:CLIENT_ID"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,PARAM_ACCT_ID=:PARAM_ACCT_ID"+ 
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
   String sql = "delete from AC_CLIACCSCHEMA_PARAMACCT where "+
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
               " t.ACCSCHEMAPARAM_ID"+
                ",pbo_acc.get_accschemaparam_name_by_id(t.ACCSCHEMAPARAM_ID) ACCSCHEMAPARAM_NAME"+
               " ,t.ACCSCHEMA_ID"+
                ",pbo_acc.get_accschema_name_by_id(t.ACCSCHEMA_ID) ACCSCHEMA_NAME"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PARAM_ACCT_ID"+
                ",pbo_acc.get_acct_code_by_id(t.PARAM_ACCT_ID) PARAM_ACCT_NAME"+
           " from AC_CLIACCSCHEMA_PARAMACCT t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ACCSCHEMAPARAM_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCSCHEMAPARAM_NAME", new FieldDef("STRING"));
	  this.fields.put("ACCSCHEMA_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCSCHEMA_NAME", new FieldDef("STRING"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PARAM_ACCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PARAM_ACCT_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
