/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0029 DC Controller: Payment - payables
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

public class DC0029 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_BPARTNER_FROM") != null && !this.request.getParam("QRY_BPARTNER_FROM").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.BPARTNER_FROM like :BPARTNER_FROM");
      this.queryParams.put("BPARTNER_FROM",(String)this.request.getParam("QRY_BPARTNER_FROM"));
    }
    if (this.request.getParam("QRY_BPARTNER_TO") != null && !this.request.getParam("QRY_BPARTNER_TO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.BPARTNER_TO like :BPARTNER_TO");
      this.queryParams.put("BPARTNER_TO",(String)this.request.getParam("QRY_BPARTNER_TO"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IS_APPROVED") != null && !this.request.getParam("QRY_IS_APPROVED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_APPROVED like :IS_APPROVED");
      this.queryParams.put("IS_APPROVED",(String)this.request.getParam("QRY_IS_APPROVED"));
    }
    if (this.request.getParam("QRY_IS_GENERATED") != null && !this.request.getParam("QRY_IS_GENERATED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_GENERATED like :IS_GENERATED");
      this.queryParams.put("IS_GENERATED",(String)this.request.getParam("QRY_IS_GENERATED"));
    }
    if (this.request.getParam("QRY_IS_INSERTED") != null && !this.request.getParam("QRY_IS_INSERTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_INSERTED like :IS_INSERTED");
      this.queryParams.put("IS_INSERTED",(String)this.request.getParam("QRY_IS_INSERTED"));
    }
    if (this.request.getParam("QRY_IS_MULTI_PAYMENT") != null && !this.request.getParam("QRY_IS_MULTI_PAYMENT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_MULTI_PAYMENT like :IS_MULTI_PAYMENT");
      this.queryParams.put("IS_MULTI_PAYMENT",(String)this.request.getParam("QRY_IS_MULTI_PAYMENT"));
    }
    if (this.request.getParam("QRY_IS_PAYABLE") != null && !this.request.getParam("QRY_IS_PAYABLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_PAYABLE like :IS_PAYABLE");
      this.queryParams.put("IS_PAYABLE",(String)this.request.getParam("QRY_IS_PAYABLE"));
    }
    if (this.request.getParam("QRY_IS_POSTED") != null && !this.request.getParam("QRY_IS_POSTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_POSTED like :IS_POSTED");
      this.queryParams.put("IS_POSTED",(String)this.request.getParam("QRY_IS_POSTED"));
    }
    if (this.request.getParam("QRY_IS_PREPAYMENT") != null && !this.request.getParam("QRY_IS_PREPAYMENT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_PREPAYMENT like :IS_PREPAYMENT");
      this.queryParams.put("IS_PREPAYMENT",(String)this.request.getParam("QRY_IS_PREPAYMENT"));
    }
    if (this.request.getParam("QRY_IS_RECEIVABLE") != null && !this.request.getParam("QRY_IS_RECEIVABLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.IS_RECEIVABLE like :IS_RECEIVABLE");
      this.queryParams.put("IS_RECEIVABLE",(String)this.request.getParam("QRY_IS_RECEIVABLE"));
    }
    if (this.request.getParam("QRY_PAYDOCTYPE_CODE") != null && !this.request.getParam("QRY_PAYDOCTYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.PAYDOCTYPE_CODE like :PAYDOCTYPE_CODE");
      this.queryParams.put("PAYDOCTYPE_CODE",(String)this.request.getParam("QRY_PAYDOCTYPE_CODE"));
    }
    if (this.request.getParam("QRY_RINV_ID") != null && !this.request.getParam("QRY_RINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.RINV_ID like :RINV_ID");
      this.queryParams.put("RINV_ID",(String)this.request.getParam("QRY_RINV_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " p.AMOUNT"+
               " ,p.BPARTNER_FROM"+
               " ,(select t.name from bpartner t where t.id = p.bpartner_from) BPARTNER_FROM_NAME"+
               " ,p.BPARTNER_TO"+
               " ,(select t.name from bpartner t where t.id = p.bpartner_to) BPARTNER_TO_NAME"+
               " ,p.CLIENT_ID"+
               " ,(select t.code from client t where t.id= client_id) CLIENT_NAME"+
               " ,p.CREATEDBY"+
               " ,to_char(p.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,p.CURRENCY"+
               " ,to_char(p.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,p.DOC_NO"+
               " ,p.ID"+
               " ,p.IS_APPROVED"+
               " ,p.IS_GENERATED"+
               " ,p.IS_INSERTED"+
               " ,p.IS_MULTI_PAYMENT"+
               " ,p.IS_PAYABLE"+
               " ,p.IS_POSTED"+
               " ,p.IS_PREPAYMENT"+
               " ,p.IS_RECEIVABLE"+
               " ,p.MODIFIEDBY"+
               " ,to_char(p.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,p.NOTES"+
               " ,p.PAYDOCTYPE_CODE"+
               " ,p.PAYMNT_ACCT"+
               " ,p.PREPAY_ACCT"+
               " ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY')doc from rinvoice r where r.id = p.rinv_id) RINV_DOC_NO_DATE"+
               " ,p.RINV_ID"+
           " from PAYMENT p "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " p.ID"+
               " ,p.CLIENT_ID"+
               ",(select t.code from client t where t.id= client_id) CLIENT_NAME"+
               " ,p.PAYDOCTYPE_CODE"+
               " ,p.DOC_NO"+
               " ,to_char(p.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,p.PAYMNT_ACCT"+
               " ,p.BPARTNER_FROM"+
               ",(select t.name from bpartner t where t.id = p.bpartner_from) BPARTNER_FROM_NAME"+
               " ,p.BPARTNER_TO"+
               ",(select t.name from bpartner t where t.id = p.bpartner_to) BPARTNER_TO_NAME"+
               " ,p.IS_PREPAYMENT"+
               " ,p.PREPAY_ACCT"+
               ",(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY')doc from rinvoice r where r.id = p.rinv_id) RINV_DOC_NO_DATE"+
               " ,p.RINV_ID"+
               " ,p.AMOUNT"+
               " ,p.CURRENCY"+
               " ,p.IS_PAYABLE"+
               " ,p.IS_RECEIVABLE"+
               " ,p.NOTES"+
               " ,to_char(p.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,p.CREATEDBY"+
               " ,to_char(p.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,p.MODIFIEDBY"+
               " ,p.IS_INSERTED"+
               " ,p.IS_GENERATED"+
               " ,p.IS_APPROVED"+
               " ,p.IS_POSTED"+
               " ,p.IS_MULTI_PAYMENT"+
           " from PAYMENT p "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into PAYMENT("+
               "  AMOUNT"+
               " ,BPARTNER_FROM"+
               " ,BPARTNER_TO"+
               " ,CLIENT_ID"+
               " ,CURRENCY"+
               " ,DOC_DATE"+
               " ,DOC_NO"+
               " ,ID"+
               " ,IS_APPROVED"+
               " ,IS_INSERTED"+
               " ,IS_MULTI_PAYMENT"+
               " ,IS_PAYABLE"+
               " ,IS_POSTED"+
               " ,IS_PREPAYMENT"+
               " ,IS_RECEIVABLE"+
               " ,NOTES"+
               " ,PAYDOCTYPE_CODE"+
               " ,PAYMNT_ACCT"+
               " ,PREPAY_ACCT"+
               " ,RINV_ID"+
           " ) values ( "+
               "  :AMOUNT"+
               " ,:BPARTNER_FROM"+
               " ,:BPARTNER_TO"+
               " ,:CLIENT_ID"+
               " ,:CURRENCY"+
               " ,:DOC_DATE"+
               " ,:DOC_NO"+
               " ,:ID"+
               " ,:IS_APPROVED"+
               " ,:IS_INSERTED"+
               " ,:IS_MULTI_PAYMENT"+
               " ,:IS_PAYABLE"+
               " ,:IS_POSTED"+
               " ,:IS_PREPAYMENT"+
               " ,:IS_RECEIVABLE"+
               " ,:NOTES"+
               " ,:PAYDOCTYPE_CODE"+
               " ,:PAYMNT_ACCT"+
               " ,:PREPAY_ACCT"+
               " ,:RINV_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_payment_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PAYMENT set "+
               "  PAYMNT_ACCT=:PAYMNT_ACCT"+
               " ,IS_INSERTED=:IS_INSERTED"+
               " ,ID=:ID"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,PAYDOCTYPE_CODE=:PAYDOCTYPE_CODE"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,BPARTNER_FROM=:BPARTNER_FROM"+
               " ,BPARTNER_TO=:BPARTNER_TO"+
               " ,IS_PAYABLE=:IS_PAYABLE"+
               " ,AMOUNT=:AMOUNT"+
               " ,CURRENCY=:CURRENCY"+
               " ,NOTES=:NOTES"+
               " ,IS_APPROVED=:IS_APPROVED"+
               " ,IS_POSTED=:IS_POSTED"+
               " ,IS_PREPAYMENT=:IS_PREPAYMENT"+
               " ,PREPAY_ACCT=:PREPAY_ACCT"+
               " ,RINV_ID=:RINV_ID"+
               " ,IS_MULTI_PAYMENT=:IS_MULTI_PAYMENT"+
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
   String sql = "delete from PAYMENT where "+
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
               " p.AMOUNT"+
               " ,p.BPARTNER_FROM"+
                ",(select t.name from bpartner t where t.id = p.bpartner_from) BPARTNER_FROM_NAME"+
               " ,p.BPARTNER_TO"+
                ",(select t.name from bpartner t where t.id = p.bpartner_to) BPARTNER_TO_NAME"+
               " ,p.CLIENT_ID"+
                ",(select t.code from client t where t.id= client_id) CLIENT_NAME"+
               " ,p.CREATEDBY"+
               " ,to_char(p.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,p.CURRENCY"+
               " ,to_char(p.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,p.DOC_NO"+
               " ,p.ID"+
               " ,p.IS_APPROVED"+
               " ,p.IS_GENERATED"+
               " ,p.IS_INSERTED"+
               " ,p.IS_MULTI_PAYMENT"+
               " ,p.IS_PAYABLE"+
               " ,p.IS_POSTED"+
               " ,p.IS_PREPAYMENT"+
               " ,p.IS_RECEIVABLE"+
               " ,p.MODIFIEDBY"+
               " ,to_char(p.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,p.NOTES"+
               " ,p.PAYDOCTYPE_CODE"+
               " ,p.PAYMNT_ACCT"+
               " ,p.PREPAY_ACCT"+
                ",(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY')doc from rinvoice r where r.id = p.rinv_id) RINV_DOC_NO_DATE"+
               " ,p.RINV_ID"+
           " from PAYMENT p"+
        " where "+
     "      p.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_FROM", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_FROM_NAME", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_TO", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_TO_NAME", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_NAME", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_APPROVED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_GENERATED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_INSERTED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_MULTI_PAYMENT", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_PAYABLE", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_POSTED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_PREPAYMENT", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_RECEIVABLE", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PAYDOCTYPE_CODE", new FieldDef("STRING"));
	  this.fields.put("PAYMNT_ACCT", new FieldDef("STRING"));
	  this.fields.put("PREPAY_ACCT", new FieldDef("STRING"));
	  this.fields.put("RINV_DOC_NO_DATE", new FieldDef("STRING"));
	  this.fields.put("RINV_ID", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
