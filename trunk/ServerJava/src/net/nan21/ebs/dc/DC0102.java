/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0102 DC Controller: Business partner accounts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0102 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_ACCSCHEMA_ID") != null && !this.request.getParam("QRY_ACCSCHEMA_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCSCHEMA_ID like :ACCSCHEMA_ID");
      this.queryParams.put("ACCSCHEMA_ID",(String)this.request.getParam("QRY_ACCSCHEMA_ID"));
    }
    if (this.request.getParam("QRY_C_ACCT_RECEIVABLE_ID") != null && !this.request.getParam("QRY_C_ACCT_RECEIVABLE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.C_ACCT_RECEIVABLE_ID like :C_ACCT_RECEIVABLE_ID");
      this.queryParams.put("C_ACCT_RECEIVABLE_ID",(String)this.request.getParam("QRY_C_ACCT_RECEIVABLE_ID"));
    }
    if (this.request.getParam("QRY_C_ACCT_PREPAY_ID") != null && !this.request.getParam("QRY_C_ACCT_PREPAY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.C_ACCT_PREPAY_ID like :C_ACCT_PREPAY_ID");
      this.queryParams.put("C_ACCT_PREPAY_ID",(String)this.request.getParam("QRY_C_ACCT_PREPAY_ID"));
    }
    if (this.request.getParam("QRY_V_ACCT_PAYABLE_ID") != null && !this.request.getParam("QRY_V_ACCT_PAYABLE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.V_ACCT_PAYABLE_ID like :V_ACCT_PAYABLE_ID");
      this.queryParams.put("V_ACCT_PAYABLE_ID",(String)this.request.getParam("QRY_V_ACCT_PAYABLE_ID"));
    }
    if (this.request.getParam("QRY_V_ACCT_PREPAY_ID") != null && !this.request.getParam("QRY_V_ACCT_PREPAY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.V_ACCT_PREPAY_ID like :V_ACCT_PREPAY_ID");
      this.queryParams.put("V_ACCT_PREPAY_ID",(String)this.request.getParam("QRY_V_ACCT_PREPAY_ID"));
    }
    if (this.request.getParam("QRY_I_ACCT_PAYABLE_ID") != null && !this.request.getParam("QRY_I_ACCT_PAYABLE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.I_ACCT_PAYABLE_ID like :I_ACCT_PAYABLE_ID");
      this.queryParams.put("I_ACCT_PAYABLE_ID",(String)this.request.getParam("QRY_I_ACCT_PAYABLE_ID"));
    }
    if (this.request.getParam("QRY_I_ACCT_RECEIVABLE_ID") != null && !this.request.getParam("QRY_I_ACCT_RECEIVABLE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.I_ACCT_RECEIVABLE_ID like :I_ACCT_RECEIVABLE_ID");
      this.queryParams.put("I_ACCT_RECEIVABLE_ID",(String)this.request.getParam("QRY_I_ACCT_RECEIVABLE_ID"));
    }
    if (this.request.getParam("QRY_I_ACCT_PREPAY_ID") != null && !this.request.getParam("QRY_I_ACCT_PREPAY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.I_ACCT_PREPAY_ID like :I_ACCT_PREPAY_ID");
      this.queryParams.put("I_ACCT_PREPAY_ID",(String)this.request.getParam("QRY_I_ACCT_PREPAY_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.BPARTNER_ID"+
               " ,t.CLIENT_ID"+
               " ,t.ACCSCHEMA_ID"+
               " ,t.C_ACCT_RECEIVABLE_ID"+
               " ,t.C_ACCT_PREPAY_ID"+
               " ,t.V_ACCT_PAYABLE_ID"+
               " ,t.V_ACCT_PREPAY_ID"+
               " ,t.I_ACCT_PAYABLE_ID"+
               " ,t.I_ACCT_RECEIVABLE_ID"+
               " ,t.I_ACCT_PREPAY_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME"+
               " ,pbo_acc.get_acct_code_by_id(t.C_ACCT_RECEIVABLE_ID) C_ACCT_RECEIVABLE_NAME"+
               " ,pbo_acc.get_acct_code_by_id(t.V_ACCT_PAYABLE_ID) V_ACCT_PAYABLE_NAME"+
           " from BP_ACCOUNT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.BPARTNER_ID"+
               ",pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.ACCSCHEMA_ID"+
               ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.C_ACCT_RECEIVABLE_ID"+
               ",pbo_acc.get_acct_code_by_id(t.C_ACCT_RECEIVABLE_ID) C_ACCT_RECEIVABLE_NAME"+
               " ,t.C_ACCT_PREPAY_ID"+
               ",pbo_acc.get_acct_code_by_id(t.V_ACCT_PAYABLE_ID) V_ACCT_PAYABLE_NAME"+
               " ,t.V_ACCT_PAYABLE_ID"+
               " ,t.V_ACCT_PREPAY_ID"+
               " ,t.I_ACCT_PAYABLE_ID"+
               " ,t.I_ACCT_RECEIVABLE_ID"+
               " ,t.I_ACCT_PREPAY_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from BP_ACCOUNT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BP_ACCOUNT set "+
               "  ID=:ID"+
               " ,ACCSCHEMA_ID=:ACCSCHEMA_ID"+
               " ,C_ACCT_RECEIVABLE_ID=:C_ACCT_RECEIVABLE_ID"+
               " ,C_ACCT_PREPAY_ID=:C_ACCT_PREPAY_ID"+
               " ,V_ACCT_PAYABLE_ID=:V_ACCT_PAYABLE_ID"+
               " ,V_ACCT_PREPAY_ID=:V_ACCT_PREPAY_ID"+
               " ,I_ACCT_PAYABLE_ID=:I_ACCT_PAYABLE_ID"+
               " ,I_ACCT_RECEIVABLE_ID=:I_ACCT_RECEIVABLE_ID"+
               " ,I_ACCT_PREPAY_ID=:I_ACCT_PREPAY_ID"+
   " where "+
     "      ID= :ID"+
   "";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoUpdate();	
}

public void doDelete() throws Exception {}
public void initNewRecord() throws Exception {
    this.populateRecordFromRequest();
    this.record.put("_p_record_status", "insert");
    this.writeResultInitNewRecord();
}

private void findByPk()  throws Exception {
    String sql = "select "+ 
               " t.ID"+
               " ,t.BPARTNER_ID"+
               " ,t.CLIENT_ID"+
               " ,t.ACCSCHEMA_ID"+
               " ,t.C_ACCT_RECEIVABLE_ID"+
               " ,t.C_ACCT_PREPAY_ID"+
               " ,t.V_ACCT_PAYABLE_ID"+
               " ,t.V_ACCT_PREPAY_ID"+
               " ,t.I_ACCT_PAYABLE_ID"+
               " ,t.I_ACCT_RECEIVABLE_ID"+
               " ,t.I_ACCT_PREPAY_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
                ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
                ",pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME"+
                ",pbo_acc.get_acct_code_by_id(t.C_ACCT_RECEIVABLE_ID) C_ACCT_RECEIVABLE_NAME"+
                ",pbo_acc.get_acct_code_by_id(t.V_ACCT_PAYABLE_ID) V_ACCT_PAYABLE_NAME"+
           " from BP_ACCOUNT t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCSCHEMA_ID", new FieldDef("NUMBER"));
	  this.fields.put("C_ACCT_RECEIVABLE_ID", new FieldDef("NUMBER"));
	  this.fields.put("C_ACCT_PREPAY_ID", new FieldDef("NUMBER"));
	  this.fields.put("V_ACCT_PAYABLE_ID", new FieldDef("NUMBER"));
	  this.fields.put("V_ACCT_PREPAY_ID", new FieldDef("NUMBER"));
	  this.fields.put("I_ACCT_PAYABLE_ID", new FieldDef("NUMBER"));
	  this.fields.put("I_ACCT_RECEIVABLE_ID", new FieldDef("NUMBER"));
	  this.fields.put("I_ACCT_PREPAY_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("ACCSCHEMA_NAME", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("C_ACCT_RECEIVABLE_NAME", new FieldDef("STRING"));
	  this.fields.put("V_ACCT_PAYABLE_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
