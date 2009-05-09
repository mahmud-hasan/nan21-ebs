/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0020 DC Controller: Issued invoice items
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0020 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IINV_ID") != null && !this.request.getParam("QRY_IINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.IINV_ID like :IINV_ID");
      this.queryParams.put("IINV_ID",(String)this.request.getParam("QRY_IINV_ID"));
    }
    if (this.request.getParam("QRY_PROD_ID") != null && !this.request.getParam("QRY_PROD_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.PROD_ID like :PROD_ID");
      this.queryParams.put("PROD_ID",(String)this.request.getParam("QRY_PROD_ID"));
    }
    if (this.request.getParam("QRY_QUANTITY") != null && !this.request.getParam("QRY_QUANTITY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.QUANTITY like :QUANTITY");
      this.queryParams.put("QUANTITY",(String)this.request.getParam("QRY_QUANTITY"));
    }
    if (this.request.getParam("QRY_QUANTITY_UNIT") != null && !this.request.getParam("QRY_QUANTITY_UNIT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.QUANTITY_UNIT like :QUANTITY_UNIT");
      this.queryParams.put("QUANTITY_UNIT",(String)this.request.getParam("QRY_QUANTITY_UNIT"));
    }
    if (this.request.getParam("QRY_ORIG_PRICE") != null && !this.request.getParam("QRY_ORIG_PRICE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.ORIG_PRICE like :ORIG_PRICE");
      this.queryParams.put("ORIG_PRICE",(String)this.request.getParam("QRY_ORIG_PRICE"));
    }
    if (this.request.getParam("QRY_NET_AMOUNT") != null && !this.request.getParam("QRY_NET_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.NET_AMOUNT like :NET_AMOUNT");
      this.queryParams.put("NET_AMOUNT",(String)this.request.getParam("QRY_NET_AMOUNT"));
    }
    if (this.request.getParam("QRY_ORIG_CURRENCY") != null && !this.request.getParam("QRY_ORIG_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.ORIG_CURRENCY like :ORIG_CURRENCY");
      this.queryParams.put("ORIG_CURRENCY",(String)this.request.getParam("QRY_ORIG_CURRENCY"));
    }
    if (this.request.getParam("QRY_PRICE") != null && !this.request.getParam("QRY_PRICE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.PRICE like :PRICE");
      this.queryParams.put("PRICE",(String)this.request.getParam("QRY_PRICE"));
    }
    if (this.request.getParam("QRY_CURRENCY_XRATE") != null && !this.request.getParam("QRY_CURRENCY_XRATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.CURRENCY_XRATE like :CURRENCY_XRATE");
      this.queryParams.put("CURRENCY_XRATE",(String)this.request.getParam("QRY_CURRENCY_XRATE"));
    }
    if (this.request.getParam("QRY_CREATEDON") != null && !this.request.getParam("QRY_CREATEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.CREATEDON like :CREATEDON");
      this.queryParams.put("CREATEDON",(String)this.request.getParam("QRY_CREATEDON"));
    }
    if (this.request.getParam("QRY_CREATEDBY") != null && !this.request.getParam("QRY_CREATEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.CREATEDBY like :CREATEDBY");
      this.queryParams.put("CREATEDBY",(String)this.request.getParam("QRY_CREATEDBY"));
    }
    if (this.request.getParam("QRY_MODIFIEDON") != null && !this.request.getParam("QRY_MODIFIEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.MODIFIEDON like :MODIFIEDON");
      this.queryParams.put("MODIFIEDON",(String)this.request.getParam("QRY_MODIFIEDON"));
    }
    if (this.request.getParam("QRY_MODIFIEDBY") != null && !this.request.getParam("QRY_MODIFIEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.MODIFIEDBY like :MODIFIEDBY");
      this.queryParams.put("MODIFIEDBY",(String)this.request.getParam("QRY_MODIFIEDBY"));
    }
    if (this.request.getParam("QRY_IINVITEM_ID") != null && !this.request.getParam("QRY_IINVITEM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.IINVITEM_ID like :IINVITEM_ID");
      this.queryParams.put("IINVITEM_ID",(String)this.request.getParam("QRY_IINVITEM_ID"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_TAX_RATE") != null && !this.request.getParam("QRY_TAX_RATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.TAX_RATE like :TAX_RATE");
      this.queryParams.put("TAX_RATE",(String)this.request.getParam("QRY_TAX_RATE"));
    }
    if (this.request.getParam("QRY_TAX_AMOUNT") != null && !this.request.getParam("QRY_TAX_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.TAX_AMOUNT like :TAX_AMOUNT");
      this.queryParams.put("TAX_AMOUNT",(String)this.request.getParam("QRY_TAX_AMOUNT"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_TAX_ID") != null && !this.request.getParam("QRY_TAX_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("iii.TAX_ID like :TAX_ID");
      this.queryParams.put("TAX_ID",(String)this.request.getParam("QRY_TAX_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " iii.ID"+
               " ,iii.IINV_ID"+
               " ,iii.PROD_ID"+
               " ,iii.QUANTITY"+
               " ,iii.QUANTITY_UNIT"+
               " ,iii.ORIG_PRICE"+
               " ,iii.NET_AMOUNT"+
               " ,iii.ORIG_CURRENCY"+
               " ,iii.PRICE"+
               " ,iii.CURRENCY_XRATE"+
               " ,iii.CREATEDON"+
               " ,iii.CREATEDBY"+
               " ,iii.MODIFIEDON"+
               " ,iii.MODIFIEDBY"+
               " ,iii.IINVITEM_ID"+
               " ,iii.NOTES"+
               " ,iii.TAX_RATE"+
               " ,iii.TAX_AMOUNT"+
               " ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE"+
               " ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME"+
               " ,iii.CURRENCY"+
               " ,iii.TAX_ID"+
               " ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME"+
           " from IINVOICE_ITEM iii "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " iii.ID"+
               " ,iii.IINV_ID"+
               " ,iii.PROD_ID"+
               ",pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE"+
               ",pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME"+
               " ,iii.QUANTITY"+
               " ,iii.QUANTITY_UNIT"+
               " ,iii.ORIG_PRICE"+
               " ,iii.ORIG_CURRENCY"+
               " ,iii.CURRENCY_XRATE"+
               " ,iii.PRICE"+
               " ,iii.CURRENCY"+
               " ,iii.NET_AMOUNT"+
               " ,iii.TAX_ID"+
               ",(select t.name from tax t where t.id = iii.tax_id) TAX_NAME"+
               " ,iii.TAX_RATE"+
               " ,iii.TAX_AMOUNT"+
               " ,iii.NOTES"+
               " ,iii.CREATEDON"+
               " ,iii.CREATEDBY"+
               " ,iii.MODIFIEDON"+
               " ,iii.MODIFIEDBY"+
               " ,iii.IINVITEM_ID"+
           " from IINVOICE_ITEM iii "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into IINVOICE_ITEM("+
               "  ID"+
               " ,IINV_ID"+
               " ,PROD_ID"+
               " ,QUANTITY"+
               " ,QUANTITY_UNIT"+
               " ,ORIG_PRICE"+
               " ,NET_AMOUNT"+
               " ,ORIG_CURRENCY"+
               " ,PRICE"+
               " ,CURRENCY_XRATE"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDBY"+
               " ,IINVITEM_ID"+
               " ,NOTES"+
               " ,TAX_RATE"+
               " ,TAX_AMOUNT"+
               " ,CURRENCY"+
               " ,TAX_ID"+
           " ) values ( "+
               "  :ID"+
               " ,:IINV_ID"+
               " ,:PROD_ID"+
               " ,:QUANTITY"+
               " ,:QUANTITY_UNIT"+
               " ,:ORIG_PRICE"+
               " ,:NET_AMOUNT"+
               " ,:ORIG_CURRENCY"+
               " ,:PRICE"+
               " ,:CURRENCY_XRATE"+
               " ,:CREATEDON"+
               " ,:CREATEDBY"+
               " ,:MODIFIEDBY"+
               " ,:IINVITEM_ID"+
               " ,:NOTES"+
               " ,:TAX_RATE"+
               " ,:TAX_AMOUNT"+
               " ,:CURRENCY"+
               " ,:TAX_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_iinvitem_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update IINVOICE_ITEM set "+
               "  ID=:ID"+
               " ,IINV_ID=:IINV_ID"+
               " ,PROD_ID=:PROD_ID"+
               " ,QUANTITY=:QUANTITY"+
               " ,QUANTITY_UNIT=:QUANTITY_UNIT"+
               " ,ORIG_PRICE=:ORIG_PRICE"+
               " ,NET_AMOUNT=:NET_AMOUNT"+
               " ,ORIG_CURRENCY=:ORIG_CURRENCY"+
               " ,PRICE=:PRICE"+
               " ,CURRENCY_XRATE=:CURRENCY_XRATE"+
               " ,IINVITEM_ID=:IINVITEM_ID"+
               " ,NOTES=:NOTES"+
               " ,TAX_RATE=:TAX_RATE"+
               " ,TAX_AMOUNT=:TAX_AMOUNT"+
               " ,CURRENCY=:CURRENCY"+
               " ,TAX_ID=:TAX_ID"+
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
   String sql = "delete from IINVOICE_ITEM where "+
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
               " iii.ID"+
               " ,iii.IINV_ID"+
               " ,iii.PROD_ID"+
               " ,iii.QUANTITY"+
               " ,iii.QUANTITY_UNIT"+
               " ,iii.ORIG_PRICE"+
               " ,iii.NET_AMOUNT"+
               " ,iii.ORIG_CURRENCY"+
               " ,iii.PRICE"+
               " ,iii.CURRENCY_XRATE"+
               " ,iii.CREATEDON"+
               " ,iii.CREATEDBY"+
               " ,iii.MODIFIEDON"+
               " ,iii.MODIFIEDBY"+
               " ,iii.IINVITEM_ID"+
               " ,iii.NOTES"+
               " ,iii.TAX_RATE"+
               " ,iii.TAX_AMOUNT"+
                ",pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE"+
                ",pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME"+
               " ,iii.CURRENCY"+
               " ,iii.TAX_ID"+
                ",(select t.name from tax t where t.id = iii.tax_id) TAX_NAME"+
           " from IINVOICE_ITEM iii"+
        " where "+
     "      iii.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IINV_ID", new FieldDef("NUMBER"));
	  this.fields.put("LINE_NO", new FieldDef("STRING"));
	  this.fields.get("LINE_NO").setInDS(false);
	  this.fields.put("PROD_ID", new FieldDef("NUMBER"));
	  this.fields.put("QUANTITY", new FieldDef("NUMBER"));
	  this.fields.put("QUANTITY_UNIT", new FieldDef("STRING"));
	  this.fields.put("ORIG_PRICE", new FieldDef("NUMBER"));
	  this.fields.put("NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("ORIG_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("PRICE", new FieldDef("NUMBER"));
	  this.fields.put("CURRENCY_XRATE", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("IINVITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("TAX_RATE", new FieldDef("NUMBER"));
	  this.fields.put("TAX_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("PROD_CODE", new FieldDef("STRING"));
	  this.fields.put("PROD_NAME", new FieldDef("STRING"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("TAX_ID", new FieldDef("NUMBER"));
	  this.fields.put("TAX_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
