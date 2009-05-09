/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0018 DC Controller: BP bank accounts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0018 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_BANK_CODE") != null && !this.request.getParam("QRY_BANK_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("BANK_CODE like :BANK_CODE");
      this.queryParams.put("BANK_CODE",(String)this.request.getParam("QRY_BANK_CODE"));
    }
    if (this.request.getParam("QRY_IBAN") != null && !this.request.getParam("QRY_IBAN").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IBAN like :IBAN");
      this.queryParams.put("IBAN",(String)this.request.getParam("QRY_IBAN"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_CREATEDON") != null && !this.request.getParam("QRY_CREATEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CREATEDON like :CREATEDON");
      this.queryParams.put("CREATEDON",(String)this.request.getParam("QRY_CREATEDON"));
    }
    if (this.request.getParam("QRY_CREATEDBY") != null && !this.request.getParam("QRY_CREATEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CREATEDBY like :CREATEDBY");
      this.queryParams.put("CREATEDBY",(String)this.request.getParam("QRY_CREATEDBY"));
    }
    if (this.request.getParam("QRY_MODIFIEDON") != null && !this.request.getParam("QRY_MODIFIEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MODIFIEDON like :MODIFIEDON");
      this.queryParams.put("MODIFIEDON",(String)this.request.getParam("QRY_MODIFIEDON"));
    }
    if (this.request.getParam("QRY_MODIFIEDBY") != null && !this.request.getParam("QRY_MODIFIEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MODIFIEDBY like :MODIFIEDBY");
      this.queryParams.put("MODIFIEDBY",(String)this.request.getParam("QRY_MODIFIEDBY"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_BANKAG_CODE") != null && !this.request.getParam("QRY_BANKAG_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("BANKAG_CODE like :BANKAG_CODE");
      this.queryParams.put("BANKAG_CODE",(String)this.request.getParam("QRY_BANKAG_CODE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,BANK_CODE"+
               " ,IBAN"+
               " ,CURRENCY"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,BPARTNER_ID"+
               " ,BANKAG_CODE"+
           " from BP_BANKACCOUNT  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,BPARTNER_ID"+
               " ,IBAN"+
               " ,BANK_CODE"+
               " ,CURRENCY"+
               " ,BANKAG_CODE"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from BP_BANKACCOUNT  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into BP_BANKACCOUNT("+
               "  ID"+
               " ,BANK_CODE"+
               " ,IBAN"+
               " ,CURRENCY"+
               " ,CREATEDBY"+
               " ,MODIFIEDBY"+
               " ,BPARTNER_ID"+
               " ,BANKAG_CODE"+
           " ) values ( "+
               "  :ID"+
               " ,:BANK_CODE"+
               " ,:IBAN"+
               " ,:CURRENCY"+
               " ,:CREATEDBY"+
               " ,:MODIFIEDBY"+
               " ,:BPARTNER_ID"+
               " ,:BANKAG_CODE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_bpbankacct_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BP_BANKACCOUNT set "+
               "  BANKAG_CODE=:BANKAG_CODE"+ 
               " ,BANK_CODE=:BANK_CODE"+ 
               " ,BPARTNER_ID=:BPARTNER_ID"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,CURRENCY=:CURRENCY"+ 
               " ,IBAN=:IBAN"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
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
   String sql = "delete from BP_BANKACCOUNT where "+
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
               " ID"+
               " ,BANK_CODE"+
               " ,IBAN"+
               " ,CURRENCY"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,BPARTNER_ID"+
               " ,BANKAG_CODE"+
           " from BP_BANKACCOUNT "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("BANK_CODE", new FieldDef("STRING"));
	  this.fields.put("IBAN", new FieldDef("STRING"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BANKAG_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
