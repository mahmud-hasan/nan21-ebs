/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0004 DC Controller: Issued invoices
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0004 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_ISSUER_ID") != null && !this.request.getParam("QRY_ISSUER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ISSUER_ID like :ISSUER_ID");
      this.queryParams.put("ISSUER_ID",(String)this.request.getParam("QRY_ISSUER_ID"));
    }
    if (this.request.getParam("QRY_RECEIVER_ID") != null && !this.request.getParam("QRY_RECEIVER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.RECEIVER_ID like :RECEIVER_ID");
      this.queryParams.put("RECEIVER_ID",(String)this.request.getParam("QRY_RECEIVER_ID"));
    }
    if (this.request.getParam("QRY_DOC_TYPE") != null && !this.request.getParam("QRY_DOC_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_TYPE like :DOC_TYPE");
      this.queryParams.put("DOC_TYPE",(String)this.request.getParam("QRY_DOC_TYPE"));
    }
    if (this.request.getParam("QRY_DOC_CURRENCY") != null && !this.request.getParam("QRY_DOC_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_CURRENCY like :DOC_CURRENCY");
      this.queryParams.put("DOC_CURRENCY",(String)this.request.getParam("QRY_DOC_CURRENCY"));
    }
    if (this.request.getParam("QRY_REF_IINV_ID") != null && !this.request.getParam("QRY_REF_IINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.REF_IINV_ID like :REF_IINV_ID");
      this.queryParams.put("REF_IINV_ID",(String)this.request.getParam("QRY_REF_IINV_ID"));
    }
    if (this.request.getParam("QRY_REF_IINV_DOC_NO") != null && !this.request.getParam("QRY_REF_IINV_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.REF_IINV_DOC_NO like :REF_IINV_DOC_NO");
      this.queryParams.put("REF_IINV_DOC_NO",(String)this.request.getParam("QRY_REF_IINV_DOC_NO"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.DOC_DATE"+
               " ,doc_no_serial||doc_no DOC_NO_FULL"+
               " ,t.CLIENT_ID"+
               " ,t.ISSUER_ID"+
               " ,t.RECEIVER_ID"+
               " ,t.DOC_TYPE"+
               " ,t.DOC_CURRENCY"+
               " ,t.DUE_DATE"+
               " ,t.REF_IINV_ID"+
               " ,t.REF_IINV_DOC_NO"+
               " ,t.TOTAL_NET_AMOUNT"+
               " ,t.TOTAL_TAX_AMOUNT"+
               " ,t.TOTAL_AMOUNT"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_PRINTED"+
               " ,t.NOTES"+
               " ,t.CURRENCY_XRATE"+
               " ,t.DOC_NO_SERIAL"+
               " ,t.DOC_NO"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,pbo_bpartner.get_name_by_id(t.issuer_id) ISSUER_NAME"+
               " ,pbo_bpartner.get_name_by_id(t.receiver_id) RECEIVER_NAME"+
               " ,t.IS_INSERTED"+
           " from IINVOICE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
               " ,t.ISSUER_ID"+
               ",pbo_bpartner.get_name_by_id(t.issuer_id) ISSUER_NAME"+
               " ,t.DOC_DATE"+
               " ,t.DOC_TYPE"+
               " ,t.DOC_CURRENCY"+
               " ,t.DOC_NO_SERIAL"+
               " ,t.DOC_NO"+
               ",doc_no_serial||doc_no DOC_NO_FULL"+
               " ,t.RECEIVER_ID"+
               ",pbo_bpartner.get_name_by_id(t.receiver_id) RECEIVER_NAME"+
               " ,t.NOTES"+
               " ,t.DUE_DATE"+
               " ,t.TOTAL_AMOUNT"+
               " ,t.TOTAL_NET_AMOUNT"+
               " ,t.TOTAL_TAX_AMOUNT"+
               " ,t.CURRENCY_XRATE"+
               " ,t.REF_IINV_DOC_NO"+
               " ,t.REF_IINV_ID"+
               " ,t.IS_INSERTED"+
               " ,t.IS_PRINTED"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from IINVOICE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into IINVOICE("+
               "  ID"+
               " ,DOC_DATE"+
               " ,CLIENT_ID"+
               " ,ISSUER_ID"+
               " ,RECEIVER_ID"+
               " ,DOC_TYPE"+
               " ,DOC_CURRENCY"+
               " ,DUE_DATE"+
               " ,REF_IINV_ID"+
               " ,REF_IINV_DOC_NO"+
               " ,IS_PRINTED"+
               " ,NOTES"+
               " ,CURRENCY_XRATE"+
               " ,DOC_NO_SERIAL"+
               " ,DOC_NO"+
               " ,IS_INSERTED"+
           " ) values ( "+
               "  :ID"+
               " ,:DOC_DATE"+
               " ,:CLIENT_ID"+
               " ,:ISSUER_ID"+
               " ,:RECEIVER_ID"+
               " ,:DOC_TYPE"+
               " ,:DOC_CURRENCY"+
               " ,:DUE_DATE"+
               " ,:REF_IINV_ID"+
               " ,:REF_IINV_DOC_NO"+
               " ,:IS_PRINTED"+
               " ,:NOTES"+
               " ,:CURRENCY_XRATE"+
               " ,:DOC_NO_SERIAL"+
               " ,:DOC_NO"+
               " ,:IS_INSERTED"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_iinv_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update IINVOICE set "+
               "  ID=:ID"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,ISSUER_ID=:ISSUER_ID"+
               " ,RECEIVER_ID=:RECEIVER_ID"+
               " ,DOC_TYPE=:DOC_TYPE"+
               " ,DOC_CURRENCY=:DOC_CURRENCY"+
               " ,DUE_DATE=:DUE_DATE"+
               " ,REF_IINV_ID=:REF_IINV_ID"+
               " ,REF_IINV_DOC_NO=:REF_IINV_DOC_NO"+
               " ,IS_PRINTED=:IS_PRINTED"+
               " ,NOTES=:NOTES"+
               " ,CURRENCY_XRATE=:CURRENCY_XRATE"+
               " ,DOC_NO_SERIAL=:DOC_NO_SERIAL"+
               " ,DOC_NO=:DOC_NO"+
               " ,IS_INSERTED=:IS_INSERTED"+
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
   String sql = "delete from IINVOICE where "+
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
               " t.ID"+
               " ,t.DOC_DATE"+
                ",doc_no_serial||doc_no DOC_NO_FULL"+
               " ,t.CLIENT_ID"+
               " ,t.ISSUER_ID"+
               " ,t.RECEIVER_ID"+
               " ,t.DOC_TYPE"+
               " ,t.DOC_CURRENCY"+
               " ,t.DUE_DATE"+
               " ,t.REF_IINV_ID"+
               " ,t.REF_IINV_DOC_NO"+
               " ,t.TOTAL_NET_AMOUNT"+
               " ,t.TOTAL_TAX_AMOUNT"+
               " ,t.TOTAL_AMOUNT"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_PRINTED"+
               " ,t.NOTES"+
               " ,t.CURRENCY_XRATE"+
               " ,t.DOC_NO_SERIAL"+
               " ,t.DOC_NO"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
                ",pbo_bpartner.get_name_by_id(t.issuer_id) ISSUER_NAME"+
                ",pbo_bpartner.get_name_by_id(t.receiver_id) RECEIVER_NAME"+
               " ,t.IS_INSERTED"+
           " from IINVOICE t"+
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
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO_FULL", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("ISSUER_ID", new FieldDef("NUMBER"));
	  this.fields.put("RECEIVER_ID", new FieldDef("NUMBER"));
	  this.fields.put("PAYBY_ID", new FieldDef("NUMBER"));
	  this.fields.get("PAYBY_ID").setInDS(false);
	  this.fields.put("DOC_TYPE", new FieldDef("STRING"));
	  this.fields.put("INV_STATUS", new FieldDef("STRING"));
	  this.fields.get("INV_STATUS").setInDS(false);
	  this.fields.put("DOC_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("TRANSTYPE_CODE", new FieldDef("STRING"));
	  this.fields.get("TRANSTYPE_CODE").setInDS(false);
	  this.fields.put("DUE_DATE", new FieldDef("DATE"));
	  this.fields.put("INV_LINE_COUNT", new FieldDef("NUMBER"));
	  this.fields.get("INV_LINE_COUNT").setInDS(false);
	  this.fields.put("REF_IINV_ID", new FieldDef("NUMBER"));
	  this.fields.put("REF_IINV_DOC_NO", new FieldDef("STRING"));
	  this.fields.put("ORDER_ID", new FieldDef("NUMBER"));
	  this.fields.get("ORDER_ID").setInDS(false);
	  this.fields.put("TOTAL_NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("TOTAL_TAX_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("TOTAL_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("IS_PRINTED", new FieldDef("BOOLEAN"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("CURRENCY_XRATE", new FieldDef("NUMBER"));
	  this.fields.put("DOC_NO_SERIAL", new FieldDef("STRING"));
	  this.fields.put("VAT_RATE", new FieldDef("NUMBER"));
	  this.fields.get("VAT_RATE").setInDS(false);
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("ISSUER_NAME", new FieldDef("STRING"));
	  this.fields.put("RECEIVER_NAME", new FieldDef("STRING"));
	  this.fields.put("IS_INSERTED", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
