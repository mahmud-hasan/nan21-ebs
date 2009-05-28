/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0041 DC Controller: Received invoice items
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0041 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CREATEDBY") != null && !this.request.getParam("QRY_CREATEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.CREATEDBY like :CREATEDBY");
      this.queryParams.put("CREATEDBY",(String)this.request.getParam("QRY_CREATEDBY"));
    }
    if (this.request.getParam("QRY_CREATEDON") != null && !this.request.getParam("QRY_CREATEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.CREATEDON like :CREATEDON");
      this.queryParams.put("CREATEDON",(String)this.request.getParam("QRY_CREATEDON"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_CURRENCY_XRATE") != null && !this.request.getParam("QRY_CURRENCY_XRATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.CURRENCY_XRATE like :CURRENCY_XRATE");
      this.queryParams.put("CURRENCY_XRATE",(String)this.request.getParam("QRY_CURRENCY_XRATE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_MODIFIEDBY") != null && !this.request.getParam("QRY_MODIFIEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.MODIFIEDBY like :MODIFIEDBY");
      this.queryParams.put("MODIFIEDBY",(String)this.request.getParam("QRY_MODIFIEDBY"));
    }
    if (this.request.getParam("QRY_MODIFIEDON") != null && !this.request.getParam("QRY_MODIFIEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.MODIFIEDON like :MODIFIEDON");
      this.queryParams.put("MODIFIEDON",(String)this.request.getParam("QRY_MODIFIEDON"));
    }
    if (this.request.getParam("QRY_NET_AMOUNT") != null && !this.request.getParam("QRY_NET_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.NET_AMOUNT like :NET_AMOUNT");
      this.queryParams.put("NET_AMOUNT",(String)this.request.getParam("QRY_NET_AMOUNT"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_ORIG_AMOUNT") != null && !this.request.getParam("QRY_ORIG_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.ORIG_AMOUNT like :ORIG_AMOUNT");
      this.queryParams.put("ORIG_AMOUNT",(String)this.request.getParam("QRY_ORIG_AMOUNT"));
    }
    if (this.request.getParam("QRY_ORIG_CURRENCY") != null && !this.request.getParam("QRY_ORIG_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.ORIG_CURRENCY like :ORIG_CURRENCY");
      this.queryParams.put("ORIG_CURRENCY",(String)this.request.getParam("QRY_ORIG_CURRENCY"));
    }
    if (this.request.getParam("QRY_PRICE") != null && !this.request.getParam("QRY_PRICE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.PRICE like :PRICE");
      this.queryParams.put("PRICE",(String)this.request.getParam("QRY_PRICE"));
    }
    if (this.request.getParam("QRY_PROD_ID") != null && !this.request.getParam("QRY_PROD_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.PROD_ID like :PROD_ID");
      this.queryParams.put("PROD_ID",(String)this.request.getParam("QRY_PROD_ID"));
    }
    if (this.request.getParam("QRY_QUANTITY") != null && !this.request.getParam("QRY_QUANTITY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.QUANTITY like :QUANTITY");
      this.queryParams.put("QUANTITY",(String)this.request.getParam("QRY_QUANTITY"));
    }
    if (this.request.getParam("QRY_QUANTITY_UNIT") != null && !this.request.getParam("QRY_QUANTITY_UNIT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.QUANTITY_UNIT like :QUANTITY_UNIT");
      this.queryParams.put("QUANTITY_UNIT",(String)this.request.getParam("QRY_QUANTITY_UNIT"));
    }
    if (this.request.getParam("QRY_RINVITEM_ID") != null && !this.request.getParam("QRY_RINVITEM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.RINVITEM_ID like :RINVITEM_ID");
      this.queryParams.put("RINVITEM_ID",(String)this.request.getParam("QRY_RINVITEM_ID"));
    }
    if (this.request.getParam("QRY_RINV_ID") != null && !this.request.getParam("QRY_RINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.RINV_ID like :RINV_ID");
      this.queryParams.put("RINV_ID",(String)this.request.getParam("QRY_RINV_ID"));
    }
    if (this.request.getParam("QRY_TAX_AMOUNT") != null && !this.request.getParam("QRY_TAX_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.TAX_AMOUNT like :TAX_AMOUNT");
      this.queryParams.put("TAX_AMOUNT",(String)this.request.getParam("QRY_TAX_AMOUNT"));
    }
    if (this.request.getParam("QRY_TAX_AMOUNT_NR") != null && !this.request.getParam("QRY_TAX_AMOUNT_NR").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.TAX_AMOUNT_NR like :TAX_AMOUNT_NR");
      this.queryParams.put("TAX_AMOUNT_NR",(String)this.request.getParam("QRY_TAX_AMOUNT_NR"));
    }
    if (this.request.getParam("QRY_TAX_ID") != null && !this.request.getParam("QRY_TAX_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.TAX_ID like :TAX_ID");
      this.queryParams.put("TAX_ID",(String)this.request.getParam("QRY_TAX_ID"));
    }
    if (this.request.getParam("QRY_TAX_RATE") != null && !this.request.getParam("QRY_TAX_RATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rii.TAX_RATE like :TAX_RATE");
      this.queryParams.put("TAX_RATE",(String)this.request.getParam("QRY_TAX_RATE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " rii.CREATEDBY"+
               " ,rii.CREATEDON"+
               " ,rii.CURRENCY"+
               " ,rii.CURRENCY_XRATE"+
               " ,rii.ID"+
               " ,rii.MODIFIEDBY"+
               " ,rii.MODIFIEDON"+
               " ,rii.NET_AMOUNT"+
               " ,rii.NOTES"+
               " ,rii.ORIG_AMOUNT"+
               " ,rii.ORIG_CURRENCY"+
               " ,rii.PRICE"+
               " ,pbo_product.get_code_by_id(rii.prod_id,'N') PROD_CODE"+
               " ,rii.PROD_ID"+
               " ,rii.QUANTITY"+
               " ,rii.QUANTITY_UNIT"+
               " ,rii.RINVITEM_ID"+
               " ,rii.RINV_ID"+
               " ,rii.TAX_AMOUNT"+
               " ,rii.TAX_AMOUNT_NR"+
               " ,rii.TAX_ID"+
               " ,(select t.name from tax t where t.id = rii.tax_id) TAX_NAME"+
               " ,rii.TAX_RATE"+
           " from RINVOICE_ITEM rii "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " rii.ID"+
               " ,rii.RINV_ID"+
               ",pbo_product.get_code_by_id(rii.prod_id,'N') PROD_CODE"+
               " ,rii.PROD_ID"+
               " ,rii.NOTES"+
               " ,rii.NET_AMOUNT"+
               " ,rii.CURRENCY"+
               ",(select t.name from tax t where t.id = rii.tax_id) TAX_NAME"+
               " ,rii.TAX_ID"+
               " ,rii.TAX_RATE"+
               " ,rii.TAX_AMOUNT"+
               " ,rii.TAX_AMOUNT_NR"+
               " ,rii.ORIG_AMOUNT"+
               " ,rii.ORIG_CURRENCY"+
               " ,rii.CURRENCY_XRATE"+
               " ,rii.QUANTITY"+
               " ,rii.QUANTITY_UNIT"+
               " ,rii.PRICE"+
               " ,rii.CREATEDON"+
               " ,rii.CREATEDBY"+
               " ,rii.MODIFIEDON"+
               " ,rii.MODIFIEDBY"+
               " ,rii.RINVITEM_ID"+
           " from RINVOICE_ITEM rii "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into RINVOICE_ITEM("+
               "  CREATEDBY"+
               " ,CREATEDON"+
               " ,CURRENCY"+
               " ,CURRENCY_XRATE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,NET_AMOUNT"+
               " ,NOTES"+
               " ,ORIG_AMOUNT"+
               " ,ORIG_CURRENCY"+
               " ,PRICE"+
               " ,PROD_ID"+
               " ,QUANTITY"+
               " ,QUANTITY_UNIT"+
               " ,RINVITEM_ID"+
               " ,RINV_ID"+
               " ,TAX_AMOUNT"+
               " ,TAX_AMOUNT_NR"+
               " ,TAX_ID"+
               " ,TAX_RATE"+
           " ) values ( "+
               "  :CREATEDBY"+
               " ,:CREATEDON"+
               " ,:CURRENCY"+
               " ,:CURRENCY_XRATE"+
               " ,:ID"+
               " ,:MODIFIEDBY"+
               " ,:NET_AMOUNT"+
               " ,:NOTES"+
               " ,:ORIG_AMOUNT"+
               " ,:ORIG_CURRENCY"+
               " ,:PRICE"+
               " ,:PROD_ID"+
               " ,:QUANTITY"+
               " ,:QUANTITY_UNIT"+
               " ,:RINVITEM_ID"+
               " ,:RINV_ID"+
               " ,:TAX_AMOUNT"+
               " ,:TAX_AMOUNT_NR"+
               " ,:TAX_ID"+
               " ,:TAX_RATE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_RINVITEM_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update RINVOICE_ITEM set "+
               "  CURRENCY=:CURRENCY"+
               " ,CURRENCY_XRATE=:CURRENCY_XRATE"+
               " ,ID=:ID"+
               " ,NET_AMOUNT=:NET_AMOUNT"+
               " ,NOTES=:NOTES"+
               " ,ORIG_AMOUNT=:ORIG_AMOUNT"+
               " ,ORIG_CURRENCY=:ORIG_CURRENCY"+
               " ,PROD_ID=:PROD_ID"+
               " ,QUANTITY=:QUANTITY"+
               " ,QUANTITY_UNIT=:QUANTITY_UNIT"+
               " ,RINV_ID=:RINV_ID"+
               " ,TAX_AMOUNT=:TAX_AMOUNT"+
               " ,TAX_AMOUNT_NR=:TAX_AMOUNT_NR"+
               " ,TAX_ID=:TAX_ID"+
               " ,TAX_RATE=:TAX_RATE"+
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
   String sql = "delete from RINVOICE_ITEM where "+
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
               " rii.CREATEDBY"+
               " ,rii.CREATEDON"+
               " ,rii.CURRENCY"+
               " ,rii.CURRENCY_XRATE"+
               " ,rii.ID"+
               " ,rii.MODIFIEDBY"+
               " ,rii.MODIFIEDON"+
               " ,rii.NET_AMOUNT"+
               " ,rii.NOTES"+
               " ,rii.ORIG_AMOUNT"+
               " ,rii.ORIG_CURRENCY"+
               " ,rii.PRICE"+
                ",pbo_product.get_code_by_id(rii.prod_id,'N') PROD_CODE"+
               " ,rii.PROD_ID"+
               " ,rii.QUANTITY"+
               " ,rii.QUANTITY_UNIT"+
               " ,rii.RINVITEM_ID"+
               " ,rii.RINV_ID"+
               " ,rii.TAX_AMOUNT"+
               " ,rii.TAX_AMOUNT_NR"+
               " ,rii.TAX_ID"+
                ",(select t.name from tax t where t.id = rii.tax_id) TAX_NAME"+
               " ,rii.TAX_RATE"+
           " from RINVOICE_ITEM rii"+
        " where "+
     "      rii.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("CURRENCY_XRATE", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("ORIG_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("ORIG_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("PRICE", new FieldDef("NUMBER"));
	  this.fields.put("PROD_CODE", new FieldDef("STRING"));
	  this.fields.put("PROD_ID", new FieldDef("NUMBER"));
	  this.fields.put("QUANTITY", new FieldDef("NUMBER"));
	  this.fields.put("QUANTITY_UNIT", new FieldDef("STRING"));
	  this.fields.put("RINVITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("RINV_ID", new FieldDef("NUMBER"));
	  this.fields.put("TAX_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("TAX_AMOUNT_NR", new FieldDef("NUMBER"));
	  this.fields.put("TAX_ID", new FieldDef("NUMBER"));
	  this.fields.put("TAX_NAME", new FieldDef("STRING"));
	  this.fields.put("TAX_RATE", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
