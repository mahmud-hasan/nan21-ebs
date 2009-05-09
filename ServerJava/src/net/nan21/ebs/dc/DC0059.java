/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0059 DC Controller: Sales orders
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0059 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_BILL_BPARTNER_ID") != null && !this.request.getParam("QRY_BILL_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.BILL_BPARTNER_ID like :BILL_BPARTNER_ID");
      this.queryParams.put("BILL_BPARTNER_ID",(String)this.request.getParam("QRY_BILL_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_DELIV_BPARTNER_ID") != null && !this.request.getParam("QRY_DELIV_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.DELIV_BPARTNER_ID like :DELIV_BPARTNER_ID");
      this.queryParams.put("DELIV_BPARTNER_ID",(String)this.request.getParam("QRY_DELIV_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_PAY_BPARTNER_ID") != null && !this.request.getParam("QRY_PAY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.PAY_BPARTNER_ID like :PAY_BPARTNER_ID");
      this.queryParams.put("PAY_BPARTNER_ID",(String)this.request.getParam("QRY_PAY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_CONTACT_ID") != null && !this.request.getParam("QRY_BPARTNER_CONTACT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.BPARTNER_CONTACT_ID like :BPARTNER_CONTACT_ID");
      this.queryParams.put("BPARTNER_CONTACT_ID",(String)this.request.getParam("QRY_BPARTNER_CONTACT_ID"));
    }
    if (this.request.getParam("QRY_BILL_BPARTNER_CONTACT_ID") != null && !this.request.getParam("QRY_BILL_BPARTNER_CONTACT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.BILL_BPARTNER_CONTACT_ID like :BILL_BPARTNER_CONTACT_ID");
      this.queryParams.put("BILL_BPARTNER_CONTACT_ID",(String)this.request.getParam("QRY_BILL_BPARTNER_CONTACT_ID"));
    }
    if (this.request.getParam("QRY_DELIV_BPARTNER_CONTACT_ID") != null && !this.request.getParam("QRY_DELIV_BPARTNER_CONTACT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.DELIV_BPARTNER_CONTACT_ID like :DELIV_BPARTNER_CONTACT_ID");
      this.queryParams.put("DELIV_BPARTNER_CONTACT_ID",(String)this.request.getParam("QRY_DELIV_BPARTNER_CONTACT_ID"));
    }
    if (this.request.getParam("QRY_PAY_BPARTNER_CONTACT_ID") != null && !this.request.getParam("QRY_PAY_BPARTNER_CONTACT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.PAY_BPARTNER_CONTACT_ID like :PAY_BPARTNER_CONTACT_ID");
      this.queryParams.put("PAY_BPARTNER_CONTACT_ID",(String)this.request.getParam("QRY_PAY_BPARTNER_CONTACT_ID"));
    }
    if (this.request.getParam("QRY_REF_SORDER_ID") != null && !this.request.getParam("QRY_REF_SORDER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.REF_SORDER_ID like :REF_SORDER_ID");
      this.queryParams.put("REF_SORDER_ID",(String)this.request.getParam("QRY_REF_SORDER_ID"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_PAYMETHOD_CODE") != null && !this.request.getParam("QRY_PAYMETHOD_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ord.PAYMETHOD_CODE like :PAYMETHOD_CODE");
      this.queryParams.put("PAYMETHOD_CODE",(String)this.request.getParam("QRY_PAYMETHOD_CODE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ord.ID"+
               " ,ord.DOC_NO"+
               " ,ord.DOC_DATE"+
               " ,ord.CLIENT_ID"+
               " ,ord.CREATEDON"+
               " ,ord.CREATEDBY"+
               " ,ord.MODIFIEDON"+
               " ,ord.MODIFIEDBY"+
               " ,ord.BPARTNER_ID"+
               " ,ord.BILL_BPARTNER_ID"+
               " ,ord.DELIV_BPARTNER_ID"+
               " ,ord.PAY_BPARTNER_ID"+
               " ,ord.BPARTNER_CONTACT_ID"+
               " ,ord.BILL_BPARTNER_CONTACT_ID"+
               " ,ord.DELIV_BPARTNER_CONTACT_ID"+
               " ,ord.PAY_BPARTNER_CONTACT_ID"+
               " ,ord.REF_SORDER_ID"+
               " ,ord.CURRENCY"+
               " ,ord.PAYMETHOD_CODE"+
               " ,ord.SALESREP_ID"+
               " ,ord.TOTAL_AMOUNT"+
               " ,(select code from client where id = ord.client_id) CLIENT_CODE"+
               " ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME"+
               " ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME"+
               " ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME"+
               " ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME"+
           " from SALES_ORDER ord "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ord.ID"+
               ",(select code from client where id = ord.client_id) CLIENT_CODE"+
               " ,ord.CLIENT_ID"+
               " ,ord.DOC_NO"+
               " ,ord.DOC_DATE"+
               " ,ord.BPARTNER_ID"+
               ",(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME"+
               " ,ord.CREATEDON"+
               " ,ord.CREATEDBY"+
               " ,ord.MODIFIEDON"+
               " ,ord.MODIFIEDBY"+
               ",(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME"+
               " ,ord.BILL_BPARTNER_ID"+
               " ,ord.DELIV_BPARTNER_ID"+
               ",(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME"+
               ",(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME"+
               " ,ord.PAY_BPARTNER_ID"+
               " ,ord.BPARTNER_CONTACT_ID"+
               " ,ord.BILL_BPARTNER_CONTACT_ID"+
               " ,ord.DELIV_BPARTNER_CONTACT_ID"+
               " ,ord.PAY_BPARTNER_CONTACT_ID"+
               " ,ord.REF_SORDER_ID"+
               " ,ord.CURRENCY"+
               " ,ord.PAYMETHOD_CODE"+
               " ,ord.SALESREP_ID"+
               " ,ord.TOTAL_AMOUNT"+
           " from SALES_ORDER ord "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into SALES_ORDER("+
               "  ID"+
               " ,DOC_NO"+
               " ,DOC_DATE"+
               " ,CLIENT_ID"+
               " ,BPARTNER_ID"+
               " ,BILL_BPARTNER_ID"+
               " ,DELIV_BPARTNER_ID"+
               " ,PAY_BPARTNER_ID"+
               " ,BPARTNER_CONTACT_ID"+
               " ,BILL_BPARTNER_CONTACT_ID"+
               " ,DELIV_BPARTNER_CONTACT_ID"+
               " ,PAY_BPARTNER_CONTACT_ID"+
               " ,REF_SORDER_ID"+
               " ,CURRENCY"+
               " ,PAYMETHOD_CODE"+
               " ,SALESREP_ID"+
               " ,TOTAL_AMOUNT"+
           " ) values ( "+
               "  :ID"+
               " ,:DOC_NO"+
               " ,:DOC_DATE"+
               " ,:CLIENT_ID"+
               " ,:BPARTNER_ID"+
               " ,:BILL_BPARTNER_ID"+
               " ,:DELIV_BPARTNER_ID"+
               " ,:PAY_BPARTNER_ID"+
               " ,:BPARTNER_CONTACT_ID"+
               " ,:BILL_BPARTNER_CONTACT_ID"+
               " ,:DELIV_BPARTNER_CONTACT_ID"+
               " ,:PAY_BPARTNER_CONTACT_ID"+
               " ,:REF_SORDER_ID"+
               " ,:CURRENCY"+
               " ,:PAYMETHOD_CODE"+
               " ,:SALESREP_ID"+
               " ,:TOTAL_AMOUNT"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_BPORDER_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update SALES_ORDER set "+
               "  ID=:ID"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,BPARTNER_ID=:BPARTNER_ID"+
               " ,BILL_BPARTNER_ID=:BILL_BPARTNER_ID"+
               " ,DELIV_BPARTNER_ID=:DELIV_BPARTNER_ID"+
               " ,PAY_BPARTNER_ID=:PAY_BPARTNER_ID"+
               " ,BPARTNER_CONTACT_ID=:BPARTNER_CONTACT_ID"+
               " ,BILL_BPARTNER_CONTACT_ID=:BILL_BPARTNER_CONTACT_ID"+
               " ,DELIV_BPARTNER_CONTACT_ID=:DELIV_BPARTNER_CONTACT_ID"+
               " ,PAY_BPARTNER_CONTACT_ID=:PAY_BPARTNER_CONTACT_ID"+
               " ,REF_SORDER_ID=:REF_SORDER_ID"+
               " ,CURRENCY=:CURRENCY"+
               " ,PAYMETHOD_CODE=:PAYMETHOD_CODE"+
               " ,SALESREP_ID=:SALESREP_ID"+
               " ,TOTAL_AMOUNT=:TOTAL_AMOUNT"+
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
   String sql = "delete from SALES_ORDER where "+
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
               " ord.ID"+
               " ,ord.DOC_NO"+
               " ,ord.DOC_DATE"+
               " ,ord.CLIENT_ID"+
               " ,ord.CREATEDON"+
               " ,ord.CREATEDBY"+
               " ,ord.MODIFIEDON"+
               " ,ord.MODIFIEDBY"+
               " ,ord.BPARTNER_ID"+
               " ,ord.BILL_BPARTNER_ID"+
               " ,ord.DELIV_BPARTNER_ID"+
               " ,ord.PAY_BPARTNER_ID"+
               " ,ord.BPARTNER_CONTACT_ID"+
               " ,ord.BILL_BPARTNER_CONTACT_ID"+
               " ,ord.DELIV_BPARTNER_CONTACT_ID"+
               " ,ord.PAY_BPARTNER_CONTACT_ID"+
               " ,ord.REF_SORDER_ID"+
               " ,ord.CURRENCY"+
               " ,ord.PAYMETHOD_CODE"+
               " ,ord.SALESREP_ID"+
               " ,ord.TOTAL_AMOUNT"+
                ",(select code from client where id = ord.client_id) CLIENT_CODE"+
                ",(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME"+
                ",(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME"+
                ",(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME"+
                ",(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME"+
           " from SALES_ORDER ord"+
        " where "+
     "      ord.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BILL_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("DELIV_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("PAY_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_CONTACT_ID", new FieldDef("NUMBER"));
	  this.fields.put("BILL_BPARTNER_CONTACT_ID", new FieldDef("NUMBER"));
	  this.fields.put("DELIV_BPARTNER_CONTACT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PAY_BPARTNER_CONTACT_ID", new FieldDef("NUMBER"));
	  this.fields.put("REF_SORDER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("PAYMETHOD_CODE", new FieldDef("STRING"));
	  this.fields.put("SALESREP_ID", new FieldDef("NUMBER"));
	  this.fields.put("TOTAL_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("BILL_BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("DELIV_BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("PAY_BPARTNER_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
