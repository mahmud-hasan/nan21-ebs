/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0064 DC Controller: Purchase order lines
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0064 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_PORDER_ID") != null && !this.request.getParam("QRY_PORDER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.PORDER_ID like :PORDER_ID");
      this.queryParams.put("PORDER_ID",(String)this.request.getParam("QRY_PORDER_ID"));
    }
    if (this.request.getParam("QRY_LINE_NR") != null && !this.request.getParam("QRY_LINE_NR").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.LINE_NR like :LINE_NR");
      this.queryParams.put("LINE_NR",(String)this.request.getParam("QRY_LINE_NR"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_QTY") != null && !this.request.getParam("QRY_QTY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.QTY like :QTY");
      this.queryParams.put("QTY",(String)this.request.getParam("QRY_QTY"));
    }
    if (this.request.getParam("QRY_UOM_CODE") != null && !this.request.getParam("QRY_UOM_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.UOM_CODE like :UOM_CODE");
      this.queryParams.put("UOM_CODE",(String)this.request.getParam("QRY_UOM_CODE").toUpperCase());
    }
    if (this.request.getParam("QRY_PRICE") != null && !this.request.getParam("QRY_PRICE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.PRICE like :PRICE");
      this.queryParams.put("PRICE",(String)this.request.getParam("QRY_PRICE"));
    }
    if (this.request.getParam("QRY_NET_AMOUNT") != null && !this.request.getParam("QRY_NET_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.NET_AMOUNT like :NET_AMOUNT");
      this.queryParams.put("NET_AMOUNT",(String)this.request.getParam("QRY_NET_AMOUNT"));
    }
    if (this.request.getParam("QRY_CURRENCY_CODE") != null && !this.request.getParam("QRY_CURRENCY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.CURRENCY_CODE like :CURRENCY_CODE");
      this.queryParams.put("CURRENCY_CODE",(String)this.request.getParam("QRY_CURRENCY_CODE").toUpperCase());
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_DATE_REQUESTED") != null && !this.request.getParam("QRY_DATE_REQUESTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.DATE_REQUESTED like :DATE_REQUESTED");
      this.queryParams.put("DATE_REQUESTED",(String)this.request.getParam("QRY_DATE_REQUESTED"));
    }
    if (this.request.getParam("QRY_DATE_PROMISED") != null && !this.request.getParam("QRY_DATE_PROMISED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.DATE_PROMISED like :DATE_PROMISED");
      this.queryParams.put("DATE_PROMISED",(String)this.request.getParam("QRY_DATE_PROMISED"));
    }
    if (this.request.getParam("QRY_DATE_DELIVERED") != null && !this.request.getParam("QRY_DATE_DELIVERED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pol.DATE_DELIVERED like :DATE_DELIVERED");
      this.queryParams.put("DATE_DELIVERED",(String)this.request.getParam("QRY_DATE_DELIVERED"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pol.ID"+
               " ,pol.PORDER_ID"+
               " ,pol.LINE_NR"+
               " ,pol.PRODUCT_ID"+
               " ,pol.QTY"+
               " ,pol.UOM_CODE"+
               " ,pol.PRICE"+
               " ,pol.NET_AMOUNT"+
               " ,pol.CURRENCY_CODE"+
               " ,pol.NOTES"+
               " ,pol.DATE_REQUESTED"+
               " ,pol.DATE_PROMISED"+
               " ,pol.DATE_DELIVERED"+
               " ,pbo_product.get_name_by_id(pol.product_id,'N') PRODUCT_NAME"+
           " from PURCHASE_ORDER_LINE pol "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pol.ID"+
               " ,pol.PORDER_ID"+
               " ,pol.LINE_NR"+
               " ,pol.PRODUCT_ID"+
               ",pbo_product.get_name_by_id(pol.product_id,'N') PRODUCT_NAME"+
               " ,pol.QTY"+
               " ,pol.UOM_CODE"+
               " ,pol.PRICE"+
               " ,pol.CURRENCY_CODE"+
               " ,pol.NET_AMOUNT"+
               " ,pol.NOTES"+
               " ,pol.DATE_REQUESTED"+
               " ,pol.DATE_PROMISED"+
               " ,pol.DATE_DELIVERED"+
           " from PURCHASE_ORDER_LINE pol "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into PURCHASE_ORDER_LINE("+
               "  ID"+
               " ,PORDER_ID"+
               " ,LINE_NR"+
               " ,PRODUCT_ID"+
               " ,QTY"+
               " ,UOM_CODE"+
               " ,PRICE"+
               " ,NET_AMOUNT"+
               " ,CURRENCY_CODE"+
               " ,NOTES"+
               " ,DATE_REQUESTED"+
               " ,DATE_PROMISED"+
               " ,DATE_DELIVERED"+
           " ) values ( "+
               "  :ID"+
               " ,:PORDER_ID"+
               " ,:LINE_NR"+
               " ,:PRODUCT_ID"+
               " ,:QTY"+
               " ,:UOM_CODE"+
               " ,:PRICE"+
               " ,:NET_AMOUNT"+
               " ,:CURRENCY_CODE"+
               " ,:NOTES"+
               " ,:DATE_REQUESTED"+
               " ,:DATE_PROMISED"+
               " ,:DATE_DELIVERED"+
    ")";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PURCHASE_ORDER_LINE set "+
               "  ID=:ID"+
               " ,PORDER_ID=:PORDER_ID"+
               " ,LINE_NR=:LINE_NR"+
               " ,PRODUCT_ID=:PRODUCT_ID"+
               " ,QTY=:QTY"+
               " ,UOM_CODE=:UOM_CODE"+
               " ,PRICE=:PRICE"+
               " ,NET_AMOUNT=:NET_AMOUNT"+
               " ,CURRENCY_CODE=:CURRENCY_CODE"+
               " ,NOTES=:NOTES"+
               " ,DATE_REQUESTED=:DATE_REQUESTED"+
               " ,DATE_PROMISED=:DATE_PROMISED"+
               " ,DATE_DELIVERED=:DATE_DELIVERED"+
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
   String sql = "delete from PURCHASE_ORDER_LINE where "+
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
               " pol.ID"+
               " ,pol.PORDER_ID"+
               " ,pol.LINE_NR"+
               " ,pol.PRODUCT_ID"+
               " ,pol.QTY"+
               " ,pol.UOM_CODE"+
               " ,pol.PRICE"+
               " ,pol.NET_AMOUNT"+
               " ,pol.CURRENCY_CODE"+
               " ,pol.NOTES"+
               " ,pol.DATE_REQUESTED"+
               " ,pol.DATE_PROMISED"+
               " ,pol.DATE_DELIVERED"+
                ",pbo_product.get_name_by_id(pol.product_id,'N') PRODUCT_NAME"+
           " from PURCHASE_ORDER_LINE pol"+
        " where "+
     "      pol.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("PORDER_ID", new FieldDef("NUMBER"));
	  this.fields.put("LINE_NR", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("QTY", new FieldDef("NUMBER"));
	  this.fields.put("UOM_CODE", new FieldDef("STRING"));
	  this.fields.get("UOM_CODE").setCaseRestriction("Upper");
	  this.fields.put("PRICE", new FieldDef("NUMBER"));
	  this.fields.put("NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("CURRENCY_CODE", new FieldDef("STRING"));
	  this.fields.get("CURRENCY_CODE").setCaseRestriction("Upper");
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("DATE_REQUESTED", new FieldDef("DATE"));
	  this.fields.put("DATE_PROMISED", new FieldDef("DATE"));
	  this.fields.put("DATE_DELIVERED", new FieldDef("DATE"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.get("MODIFIEDON").setInDS(false);
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
