/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0032 DC Controller: Accounting accounts chart
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0032 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ACCJOURNAL_ID") != null && !this.request.getParam("QRY_ACCJOURNAL_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCJOURNAL_ID like :ACCJOURNAL_ID");
      this.queryParams.put("ACCJOURNAL_ID",(String)this.request.getParam("QRY_ACCJOURNAL_ID"));
    }
    if (this.request.getParam("QRY_ACCOUNT") != null && !this.request.getParam("QRY_ACCOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCOUNT like :ACCOUNT");
      this.queryParams.put("ACCOUNT",(String)this.request.getParam("QRY_ACCOUNT"));
    }
    if (this.request.getParam("QRY_ACCSCHEMA_ID") != null && !this.request.getParam("QRY_ACCSCHEMA_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCSCHEMA_ID like :ACCSCHEMA_ID");
      this.queryParams.put("ACCSCHEMA_ID",(String)this.request.getParam("QRY_ACCSCHEMA_ID"));
    }
    if (this.request.getParam("QRY_ACCTGRP_ID") != null && !this.request.getParam("QRY_ACCTGRP_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCTGRP_ID like :ACCTGRP_ID");
      this.queryParams.put("ACCTGRP_ID",(String)this.request.getParam("QRY_ACCTGRP_ID"));
    }
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
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
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_PARENT_ACCOUNT") != null && !this.request.getParam("QRY_PARENT_ACCOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PARENT_ACCOUNT like :PARENT_ACCOUNT");
      this.queryParams.put("PARENT_ACCOUNT",(String)this.request.getParam("QRY_PARENT_ACCOUNT"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ACCJOURNAL_ID"+
               " ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME"+
               " ,t.ACCOUNT"+
               " ,t.ACCSCHEMA_ID"+
               " ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.ACCTGRP_ID"+
               " ,t.ACTIVE"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.CURRENCY"+
               " ,t.DESCRIPTION"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.NAME"+
               " ,t.PARENT_ACCOUNT"+
           " from AC_ACCT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.CLIENT_ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.ACCSCHEMA_ID"+
               ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.ACCOUNT"+
               " ,t.NAME"+
               " ,t.PARENT_ACCOUNT"+
               " ,t.CURRENCY"+
               " ,t.DESCRIPTION"+
               ",pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME"+
               " ,t.ACCJOURNAL_ID"+
               " ,t.ACTIVE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.ACCTGRP_ID"+
           " from AC_ACCT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into AC_ACCT("+
               "  ACCJOURNAL_ID"+
               " ,ACCOUNT"+
               " ,ACCSCHEMA_ID"+
               " ,ACCTGRP_ID"+
               " ,ACTIVE"+
               " ,CLIENT_ID"+
               " ,CREATEDBY"+
               " ,CURRENCY"+
               " ,DESCRIPTION"+
               " ,ID"+
               " ,NAME"+
               " ,PARENT_ACCOUNT"+
           " ) values ( "+
               "  :ACCJOURNAL_ID"+
               " ,:ACCOUNT"+
               " ,:ACCSCHEMA_ID"+
               " ,:ACCTGRP_ID"+
               " ,:ACTIVE"+
               " ,:CLIENT_ID"+
               " ,:CREATEDBY"+
               " ,:CURRENCY"+
               " ,:DESCRIPTION"+
               " ,:ID"+
               " ,:NAME"+
               " ,:PARENT_ACCOUNT"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_acct_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update AC_ACCT set "+
               "  ACCJOURNAL_ID=:ACCJOURNAL_ID"+
               " ,ACCOUNT=:ACCOUNT"+
               " ,ACCSCHEMA_ID=:ACCSCHEMA_ID"+
               " ,ACCTGRP_ID=:ACCTGRP_ID"+
               " ,ACTIVE=:ACTIVE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,CURRENCY=:CURRENCY"+
               " ,DESCRIPTION=:DESCRIPTION"+
               " ,ID=:ID"+
               " ,NAME=:NAME"+
               " ,PARENT_ACCOUNT=:PARENT_ACCOUNT"+
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
   String sql = "delete from AC_ACCT where "+
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
               " t.ACCJOURNAL_ID"+
                ",pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME"+
               " ,t.ACCOUNT"+
               " ,t.ACCSCHEMA_ID"+
                ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.ACCTGRP_ID"+
               " ,t.ACTIVE"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.CURRENCY"+
               " ,t.DESCRIPTION"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.NAME"+
               " ,t.PARENT_ACCOUNT"+
           " from AC_ACCT t"+
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
	  this.fields.put("ACCJOURNAL_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCJOURNAL_NAME", new FieldDef("STRING"));
	  this.fields.put("ACCOUNT", new FieldDef("STRING"));
	  this.fields.put("ACCSCHEMA_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCSCHEMA_NAME", new FieldDef("STRING"));
	  this.fields.put("ACCTGRP_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("PARENT_ACCOUNT", new FieldDef("STRING"));
	  this.fields.put("SUMMARY", new FieldDef("BOOLEAN"));
	  this.fields.get("SUMMARY").setInDS(false);
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
