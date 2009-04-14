/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0044 DC Controller: Received invoice payments
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

public class DC0044 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ACCDOC_ID") != null && !this.request.getParam("QRY_ACCDOC_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ACCDOC_ID like :ACCDOC_ID");
      this.queryParams.put("ACCDOC_ID",(String)this.request.getParam("QRY_ACCDOC_ID"));
    }
    if (this.request.getParam("QRY_AMOUNT") != null && !this.request.getParam("QRY_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("AMOUNT like :AMOUNT");
      this.queryParams.put("AMOUNT",(String)this.request.getParam("QRY_AMOUNT"));
    }
    if (this.request.getParam("QRY_BPARTNER_FROM") != null && !this.request.getParam("QRY_BPARTNER_FROM").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("BPARTNER_FROM like :BPARTNER_FROM");
      this.queryParams.put("BPARTNER_FROM",(String)this.request.getParam("QRY_BPARTNER_FROM"));
    }
    if (this.request.getParam("QRY_BPARTNER_TO") != null && !this.request.getParam("QRY_BPARTNER_TO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("BPARTNER_TO like :BPARTNER_TO");
      this.queryParams.put("BPARTNER_TO",(String)this.request.getParam("QRY_BPARTNER_TO"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_CREATEDBY") != null && !this.request.getParam("QRY_CREATEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CREATEDBY like :CREATEDBY");
      this.queryParams.put("CREATEDBY",(String)this.request.getParam("QRY_CREATEDBY"));
    }
    if (this.request.getParam("QRY_CREATEDON") != null && !this.request.getParam("QRY_CREATEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CREATEDON like :CREATEDON");
      this.queryParams.put("CREATEDON",(String)this.request.getParam("QRY_CREATEDON"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IINV_ID") != null && !this.request.getParam("QRY_IINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IINV_ID like :IINV_ID");
      this.queryParams.put("IINV_ID",(String)this.request.getParam("QRY_IINV_ID"));
    }
    if (this.request.getParam("QRY_IS_APPROVED") != null && !this.request.getParam("QRY_IS_APPROVED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_APPROVED like :IS_APPROVED");
      this.queryParams.put("IS_APPROVED",(String)this.request.getParam("QRY_IS_APPROVED"));
    }
    if (this.request.getParam("QRY_IS_GENERATED") != null && !this.request.getParam("QRY_IS_GENERATED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_GENERATED like :IS_GENERATED");
      this.queryParams.put("IS_GENERATED",(String)this.request.getParam("QRY_IS_GENERATED"));
    }
    if (this.request.getParam("QRY_IS_INSERTED") != null && !this.request.getParam("QRY_IS_INSERTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_INSERTED like :IS_INSERTED");
      this.queryParams.put("IS_INSERTED",(String)this.request.getParam("QRY_IS_INSERTED"));
    }
    if (this.request.getParam("QRY_IS_MULTI_PAYMENT") != null && !this.request.getParam("QRY_IS_MULTI_PAYMENT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_MULTI_PAYMENT like :IS_MULTI_PAYMENT");
      this.queryParams.put("IS_MULTI_PAYMENT",(String)this.request.getParam("QRY_IS_MULTI_PAYMENT"));
    }
    if (this.request.getParam("QRY_IS_PAYABLE") != null && !this.request.getParam("QRY_IS_PAYABLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_PAYABLE like :IS_PAYABLE");
      this.queryParams.put("IS_PAYABLE",(String)this.request.getParam("QRY_IS_PAYABLE"));
    }
    if (this.request.getParam("QRY_IS_POSTED") != null && !this.request.getParam("QRY_IS_POSTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_POSTED like :IS_POSTED");
      this.queryParams.put("IS_POSTED",(String)this.request.getParam("QRY_IS_POSTED"));
    }
    if (this.request.getParam("QRY_IS_PREPAYMENT") != null && !this.request.getParam("QRY_IS_PREPAYMENT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_PREPAYMENT like :IS_PREPAYMENT");
      this.queryParams.put("IS_PREPAYMENT",(String)this.request.getParam("QRY_IS_PREPAYMENT"));
    }
    if (this.request.getParam("QRY_IS_RECEIVABLE") != null && !this.request.getParam("QRY_IS_RECEIVABLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_RECEIVABLE like :IS_RECEIVABLE");
      this.queryParams.put("IS_RECEIVABLE",(String)this.request.getParam("QRY_IS_RECEIVABLE"));
    }
    if (this.request.getParam("QRY_MODIFIEDBY") != null && !this.request.getParam("QRY_MODIFIEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MODIFIEDBY like :MODIFIEDBY");
      this.queryParams.put("MODIFIEDBY",(String)this.request.getParam("QRY_MODIFIEDBY"));
    }
    if (this.request.getParam("QRY_MODIFIEDON") != null && !this.request.getParam("QRY_MODIFIEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MODIFIEDON like :MODIFIEDON");
      this.queryParams.put("MODIFIEDON",(String)this.request.getParam("QRY_MODIFIEDON"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_PAYDOCTYPE_CODE") != null && !this.request.getParam("QRY_PAYDOCTYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PAYDOCTYPE_CODE like :PAYDOCTYPE_CODE");
      this.queryParams.put("PAYDOCTYPE_CODE",(String)this.request.getParam("QRY_PAYDOCTYPE_CODE"));
    }
    if (this.request.getParam("QRY_PAYMNT_ACCT") != null && !this.request.getParam("QRY_PAYMNT_ACCT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PAYMNT_ACCT like :PAYMNT_ACCT");
      this.queryParams.put("PAYMNT_ACCT",(String)this.request.getParam("QRY_PAYMNT_ACCT"));
    }
    if (this.request.getParam("QRY_PREPAY_ACCT") != null && !this.request.getParam("QRY_PREPAY_ACCT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PREPAY_ACCT like :PREPAY_ACCT");
      this.queryParams.put("PREPAY_ACCT",(String)this.request.getParam("QRY_PREPAY_ACCT"));
    }
    if (this.request.getParam("QRY_RINV_ID") != null && !this.request.getParam("QRY_RINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("RINV_ID like :RINV_ID");
      this.queryParams.put("RINV_ID",(String)this.request.getParam("QRY_RINV_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ACCDOC_ID"+
               " ,AMOUNT"+
               " ,BPARTNER_FROM"+
               " ,BPARTNER_TO"+
               " ,CLIENT_ID"+
               " ,CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CURRENCY"+
               " ,to_char(DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,DOC_NO"+
               " ,ID"+
               " ,IINV_ID"+
               " ,IS_APPROVED"+
               " ,IS_GENERATED"+
               " ,IS_INSERTED"+
               " ,IS_MULTI_PAYMENT"+
               " ,IS_PAYABLE"+
               " ,IS_POSTED"+
               " ,IS_PREPAYMENT"+
               " ,IS_RECEIVABLE"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,NOTES"+
               " ,PAYDOCTYPE_CODE"+
               " ,PAYMNT_ACCT"+
               " ,PREPAY_ACCT"+
               " ,RINV_ID"+
           " from PAYMENT  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,CLIENT_ID"+
               " ,PAYDOCTYPE_CODE"+
               " ,DOC_NO"+
               " ,to_char(DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,BPARTNER_FROM"+
               " ,BPARTNER_TO"+
               " ,IS_PAYABLE"+
               " ,IS_RECEIVABLE"+
               " ,AMOUNT"+
               " ,CURRENCY"+
               " ,NOTES"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CREATEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,PAYMNT_ACCT"+
               " ,IS_INSERTED"+
               " ,IS_GENERATED"+
               " ,IS_APPROVED"+
               " ,IS_POSTED"+
               " ,ACCDOC_ID"+
               " ,IS_PREPAYMENT"+
               " ,PREPAY_ACCT"+
               " ,RINV_ID"+
               " ,IS_MULTI_PAYMENT"+
               " ,IINV_ID"+
           " from PAYMENT  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
               "  ACCDOC_ID"+
               " ,AMOUNT"+
               " ,BPARTNER_FROM"+
               " ,BPARTNER_TO"+
               " ,CLIENT_ID"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,CURRENCY"+
               " ,DOC_DATE"+
               " ,DOC_NO"+
               " ,ID"+
               " ,IINV_ID"+
               " ,IS_APPROVED"+
               " ,IS_GENERATED"+
               " ,IS_INSERTED"+
               " ,IS_MULTI_PAYMENT"+
               " ,IS_PAYABLE"+
               " ,IS_POSTED"+
               " ,IS_PREPAYMENT"+
               " ,IS_RECEIVABLE"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,NOTES"+
               " ,PAYDOCTYPE_CODE"+
               " ,PAYMNT_ACCT"+
               " ,PREPAY_ACCT"+
               " ,RINV_ID"+
           " ) values ( "+
               "  :ACCDOC_ID"+
               " ,:AMOUNT"+
               " ,:BPARTNER_FROM"+
               " ,:BPARTNER_TO"+
               " ,:CLIENT_ID"+
               " ,:CREATEDBY"+
               " ,:CREATEDON"+
               " ,:CURRENCY"+
               " ,:DOC_DATE"+
               " ,:DOC_NO"+
               " ,:ID"+
               " ,:IINV_ID"+
               " ,:IS_APPROVED"+
               " ,:IS_GENERATED"+
               " ,:IS_INSERTED"+
               " ,:IS_MULTI_PAYMENT"+
               " ,:IS_PAYABLE"+
               " ,:IS_POSTED"+
               " ,:IS_PREPAYMENT"+
               " ,:IS_RECEIVABLE"+
               " ,:MODIFIEDBY"+
               " ,:MODIFIEDON"+
               " ,:NOTES"+
               " ,:PAYDOCTYPE_CODE"+
               " ,:PAYMNT_ACCT"+
               " ,:PREPAY_ACCT"+
               " ,:RINV_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PAYMENT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PAYMENT set "+
               "  ID=:ID"+
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
               " ,PAYMNT_ACCT=:PAYMNT_ACCT"+
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
               " ACCDOC_ID"+
               " ,AMOUNT"+
               " ,BPARTNER_FROM"+
               " ,BPARTNER_TO"+
               " ,CLIENT_ID"+
               " ,CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CURRENCY"+
               " ,to_char(DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,DOC_NO"+
               " ,ID"+
               " ,IINV_ID"+
               " ,IS_APPROVED"+
               " ,IS_GENERATED"+
               " ,IS_INSERTED"+
               " ,IS_MULTI_PAYMENT"+
               " ,IS_PAYABLE"+
               " ,IS_POSTED"+
               " ,IS_PREPAYMENT"+
               " ,IS_RECEIVABLE"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,NOTES"+
               " ,PAYDOCTYPE_CODE"+
               " ,PAYMNT_ACCT"+
               " ,PREPAY_ACCT"+
               " ,RINV_ID"+
           " from PAYMENT "+
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
	  this.fields.put("ACCDOC_ID", new FieldDef("NUMBER"));
	  this.fields.put("AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_FROM", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_TO", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IINV_ID", new FieldDef("NUMBER"));
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
	  this.fields.put("RINV_ID", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
