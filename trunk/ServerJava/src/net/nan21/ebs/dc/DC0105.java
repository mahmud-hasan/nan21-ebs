/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0105 DC Controller: Product accounts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0105 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ACCSCHEMA_ID") != null && !this.request.getParam("QRY_ACCSCHEMA_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCSCHEMA_ID like :ACCSCHEMA_ID");
      this.queryParams.put("ACCSCHEMA_ID",(String)this.request.getParam("QRY_ACCSCHEMA_ID"));
    }
    if (this.request.getParam("QRY_ASSET_ACCT_ID") != null && !this.request.getParam("QRY_ASSET_ACCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ASSET_ACCT_ID like :ASSET_ACCT_ID");
      this.queryParams.put("ASSET_ACCT_ID",(String)this.request.getParam("QRY_ASSET_ACCT_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_EXPENSE_ACCT_ID") != null && !this.request.getParam("QRY_EXPENSE_ACCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EXPENSE_ACCT_ID like :EXPENSE_ACCT_ID");
      this.queryParams.put("EXPENSE_ACCT_ID",(String)this.request.getParam("QRY_EXPENSE_ACCT_ID"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_REVENUE_ACCT_ID") != null && !this.request.getParam("QRY_REVENUE_ACCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.REVENUE_ACCT_ID like :REVENUE_ACCT_ID");
      this.queryParams.put("REVENUE_ACCT_ID",(String)this.request.getParam("QRY_REVENUE_ACCT_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ACCSCHEMA_ID"+
               " ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.ASSET_ACCT_ID"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.EXPENSE_ACCT_ID"+
               " ,pbo_acc.get_acct_code_by_id(t.EXPENSE_ACCT_ID) EXPENSE_ACCT_NAME"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PRODUCT_ID"+
               " ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               " ,t.REVENUE_ACCT_ID"+
               " ,pbo_acc.get_acct_code_by_id(t.revenue_acct_id) REVENUE_ACCT_NAME"+
           " from MM_PRODUCT_ACCOUNT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               ",pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               " ,t.PRODUCT_ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.ACCSCHEMA_ID"+
               ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.REVENUE_ACCT_ID"+
               ",pbo_acc.get_acct_code_by_id(t.revenue_acct_id) REVENUE_ACCT_NAME"+
               ",pbo_acc.get_acct_code_by_id(t.EXPENSE_ACCT_ID) EXPENSE_ACCT_NAME"+
               " ,t.EXPENSE_ACCT_ID"+
               " ,t.ASSET_ACCT_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from MM_PRODUCT_ACCOUNT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PRODUCT_ACCOUNT("+
               "  ACCSCHEMA_ID"+
               " ,ASSET_ACCT_ID"+
               " ,CLIENT_ID"+
               " ,EXPENSE_ACCT_ID"+
               " ,ID"+
               " ,PRODUCT_ID"+
               " ,REVENUE_ACCT_ID"+
           " ) values ( "+
               "  :ACCSCHEMA_ID"+
               " ,:ASSET_ACCT_ID"+
               " ,:CLIENT_ID"+
               " ,:EXPENSE_ACCT_ID"+
               " ,:ID"+
               " ,:PRODUCT_ID"+
               " ,:REVENUE_ACCT_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PRODACCT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PRODUCT_ACCOUNT set "+
               "  ASSET_ACCT_ID=:ASSET_ACCT_ID"+
               " ,EXPENSE_ACCT_ID=:EXPENSE_ACCT_ID"+
               " ,ID=:ID"+
               " ,REVENUE_ACCT_ID=:REVENUE_ACCT_ID"+
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
   String sql = "delete from MM_PRODUCT_ACCOUNT where "+
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
               " t.ACCSCHEMA_ID"+
                ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,t.ASSET_ACCT_ID"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.EXPENSE_ACCT_ID"+
                ",pbo_acc.get_acct_code_by_id(t.EXPENSE_ACCT_ID) EXPENSE_ACCT_NAME"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PRODUCT_ID"+
                ",pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               " ,t.REVENUE_ACCT_ID"+
                ",pbo_acc.get_acct_code_by_id(t.revenue_acct_id) REVENUE_ACCT_NAME"+
           " from MM_PRODUCT_ACCOUNT t"+
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
	  this.fields.put("ACCSCHEMA_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCSCHEMA_NAME", new FieldDef("STRING"));
	  this.fields.put("ASSET_ACCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("EXPENSE_ACCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXPENSE_ACCT_NAME", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  this.fields.put("REVENUE_ACCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("REVENUE_ACCT_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
