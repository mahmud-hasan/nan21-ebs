/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0103 DC Controller: Business partner details
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0103 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
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
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IS_CUSTOMER") != null && !this.request.getParam("QRY_IS_CUSTOMER").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_CUSTOMER like :IS_CUSTOMER");
      this.queryParams.put("IS_CUSTOMER",(String)this.request.getParam("QRY_IS_CUSTOMER"));
    }
    if (this.request.getParam("QRY_IS_VENDOR") != null && !this.request.getParam("QRY_IS_VENDOR").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_VENDOR like :IS_VENDOR");
      this.queryParams.put("IS_VENDOR",(String)this.request.getParam("QRY_IS_VENDOR"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.BPARTNER_ID"+
               " ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.CREDITCLASS_CODE"+
               " ,t.CUSTGRP_CODE"+
               " ,t.ID"+
               " ,t.IS_CUSTOMER"+
               " ,t.IS_EMPLOYEE"+
               " ,t.IS_VENDOR"+
               " ,t.MAX_CREDIT_LIMIT"+
               " ,t.MAX_CREDIT_LIMIT_CURRENCY"+
               " ,t.MAX_PAYMENT_TERM"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PAYMETHOD_CODE"+
               " ,t.PAYTERMCLASS_CODE"+
           " from BP_CLIENT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
               " ,t.IS_CUSTOMER"+
               " ,t.IS_VENDOR"+
               " ,t.IS_EMPLOYEE"+
               " ,t.CUSTGRP_CODE"+
               " ,t.CREDITCLASS_CODE"+
               " ,t.PAYMETHOD_CODE"+
               " ,t.PAYTERMCLASS_CODE"+
               " ,t.MAX_CREDIT_LIMIT"+
               " ,t.MAX_CREDIT_LIMIT_CURRENCY"+
               " ,t.MAX_PAYMENT_TERM"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from BP_CLIENT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "update BP_CLIENT set "+
               "  CUSTGRP_CODE=:CUSTGRP_CODE"+
               " ,ID=:ID"+
               " ,IS_CUSTOMER=:IS_CUSTOMER"+
               " ,IS_EMPLOYEE=:IS_EMPLOYEE"+
               " ,IS_VENDOR=:IS_VENDOR"+
               " ,MAX_CREDIT_LIMIT=:MAX_CREDIT_LIMIT"+
               " ,MAX_PAYMENT_TERM=:MAX_PAYMENT_TERM"+
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
               " t.BPARTNER_ID"+
                ",pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.CREDITCLASS_CODE"+
               " ,t.CUSTGRP_CODE"+
               " ,t.ID"+
               " ,t.IS_CUSTOMER"+
               " ,t.IS_EMPLOYEE"+
               " ,t.IS_VENDOR"+
               " ,t.MAX_CREDIT_LIMIT"+
               " ,t.MAX_CREDIT_LIMIT_CURRENCY"+
               " ,t.MAX_PAYMENT_TERM"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PAYMETHOD_CODE"+
               " ,t.PAYTERMCLASS_CODE"+
           " from BP_CLIENT t"+
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
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREDITCLASS_CODE", new FieldDef("STRING"));
	  this.fields.put("CUSTGRP_CODE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_CUSTOMER", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_EMPLOYEE", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_VENDOR", new FieldDef("BOOLEAN"));
	  this.fields.put("MAX_CREDIT_LIMIT", new FieldDef("NUMBER"));
	  this.fields.put("MAX_CREDIT_LIMIT_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("MAX_PAYMENT_TERM", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PAYMETHOD_CODE", new FieldDef("STRING"));
	  this.fields.put("PAYTERMCLASS_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
