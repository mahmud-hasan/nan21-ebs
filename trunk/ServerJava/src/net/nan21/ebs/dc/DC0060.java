/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0060 DC Controller: Sales order lines
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0060 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CURRENCY_CODE") != null && !this.request.getParam("QRY_CURRENCY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.CURRENCY_CODE like :CURRENCY_CODE");
      this.queryParams.put("CURRENCY_CODE",(String)this.request.getParam("QRY_CURRENCY_CODE"));
    }
    if (this.request.getParam("QRY_DATE_DELIVERED") != null && !this.request.getParam("QRY_DATE_DELIVERED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.DATE_DELIVERED like :DATE_DELIVERED");
      this.queryParams.put("DATE_DELIVERED",(String)this.request.getParam("QRY_DATE_DELIVERED"));
    }
    if (this.request.getParam("QRY_DATE_PROMISED") != null && !this.request.getParam("QRY_DATE_PROMISED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.DATE_PROMISED like :DATE_PROMISED");
      this.queryParams.put("DATE_PROMISED",(String)this.request.getParam("QRY_DATE_PROMISED"));
    }
    if (this.request.getParam("QRY_DATE_REQUESTED") != null && !this.request.getParam("QRY_DATE_REQUESTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.DATE_REQUESTED like :DATE_REQUESTED");
      this.queryParams.put("DATE_REQUESTED",(String)this.request.getParam("QRY_DATE_REQUESTED"));
    }
    if (this.request.getParam("QRY_DISCOUNT") != null && !this.request.getParam("QRY_DISCOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.DISCOUNT like :DISCOUNT");
      this.queryParams.put("DISCOUNT",(String)this.request.getParam("QRY_DISCOUNT"));
    }
    if (this.request.getParam("QRY_DISCOUNT_TYPE") != null && !this.request.getParam("QRY_DISCOUNT_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.DISCOUNT_TYPE like :DISCOUNT_TYPE");
      this.queryParams.put("DISCOUNT_TYPE",(String)this.request.getParam("QRY_DISCOUNT_TYPE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_LINE_NR") != null && !this.request.getParam("QRY_LINE_NR").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.LINE_NR like :LINE_NR");
      this.queryParams.put("LINE_NR",(String)this.request.getParam("QRY_LINE_NR"));
    }
    if (this.request.getParam("QRY_NET_AMOUNT") != null && !this.request.getParam("QRY_NET_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.NET_AMOUNT like :NET_AMOUNT");
      this.queryParams.put("NET_AMOUNT",(String)this.request.getParam("QRY_NET_AMOUNT"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_PRICE") != null && !this.request.getParam("QRY_PRICE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.PRICE like :PRICE");
      this.queryParams.put("PRICE",(String)this.request.getParam("QRY_PRICE"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_QTY") != null && !this.request.getParam("QRY_QTY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.QTY like :QTY");
      this.queryParams.put("QTY",(String)this.request.getParam("QRY_QTY"));
    }
    if (this.request.getParam("QRY_QTY_DELIVERED") != null && !this.request.getParam("QRY_QTY_DELIVERED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.QTY_DELIVERED like :QTY_DELIVERED");
      this.queryParams.put("QTY_DELIVERED",(String)this.request.getParam("QRY_QTY_DELIVERED"));
    }
    if (this.request.getParam("QRY_QTY_INVOICED") != null && !this.request.getParam("QRY_QTY_INVOICED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.QTY_INVOICED like :QTY_INVOICED");
      this.queryParams.put("QTY_INVOICED",(String)this.request.getParam("QRY_QTY_INVOICED"));
    }
    if (this.request.getParam("QRY_QTY_ORDERED") != null && !this.request.getParam("QRY_QTY_ORDERED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.QTY_ORDERED like :QTY_ORDERED");
      this.queryParams.put("QTY_ORDERED",(String)this.request.getParam("QRY_QTY_ORDERED"));
    }
    if (this.request.getParam("QRY_QTY_RESERVED") != null && !this.request.getParam("QRY_QTY_RESERVED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.QTY_RESERVED like :QTY_RESERVED");
      this.queryParams.put("QTY_RESERVED",(String)this.request.getParam("QRY_QTY_RESERVED"));
    }
    if (this.request.getParam("QRY_RAW_NET_AMOUNT") != null && !this.request.getParam("QRY_RAW_NET_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.RAW_NET_AMOUNT like :RAW_NET_AMOUNT");
      this.queryParams.put("RAW_NET_AMOUNT",(String)this.request.getParam("QRY_RAW_NET_AMOUNT"));
    }
    if (this.request.getParam("QRY_SORDER_ID") != null && !this.request.getParam("QRY_SORDER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.SORDER_ID like :SORDER_ID");
      this.queryParams.put("SORDER_ID",(String)this.request.getParam("QRY_SORDER_ID"));
    }
    if (this.request.getParam("QRY_UOM_CODE") != null && !this.request.getParam("QRY_UOM_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ol.UOM_CODE like :UOM_CODE");
      this.queryParams.put("UOM_CODE",(String)this.request.getParam("QRY_UOM_CODE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ol.CURRENCY_CODE"+
               " ,ol.DATE_DELIVERED"+
               " ,ol.DATE_PROMISED"+
               " ,ol.DATE_REQUESTED"+
               " ,ol.DISCOUNT"+
               " ,ol.DISCOUNT_TYPE"+
               " ,ol.ID"+
               " ,ol.LINE_NR"+
               " ,ol.NET_AMOUNT"+
               " ,ol.NOTES"+
               " ,ol.PRICE"+
               " ,ol.PRODUCT_ID"+
               " ,pbo_product.get_name_by_id( ol.product_id, 'N') PRODUCT_NAME"+
               " ,ol.QTY"+
               " ,ol.QTY_DELIVERED"+
               " ,ol.QTY_INVOICED"+
               " ,ol.QTY_ORDERED"+
               " ,ol.QTY_RESERVED"+
               " ,ol.RAW_NET_AMOUNT"+
               " ,ol.SORDER_ID"+
               " ,ol.UOM_CODE"+
           " from SALES_ORDER_LINE ol "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ol.SORDER_ID"+
               " ,ol.ID"+
               " ,ol.LINE_NR"+
               " ,ol.PRODUCT_ID"+
               ",pbo_product.get_name_by_id( ol.product_id, 'N') PRODUCT_NAME"+
               " ,ol.QTY_ORDERED"+
               " ,ol.UOM_CODE"+
               " ,ol.QTY"+
               " ,ol.PRICE"+
               " ,ol.CURRENCY_CODE"+
               " ,ol.DISCOUNT"+
               " ,ol.DISCOUNT_TYPE"+
               " ,ol.RAW_NET_AMOUNT"+
               " ,ol.NET_AMOUNT"+
               " ,ol.QTY_INVOICED"+
               " ,ol.QTY_DELIVERED"+
               " ,ol.QTY_RESERVED"+
               " ,ol.DATE_REQUESTED"+
               " ,ol.DATE_PROMISED"+
               " ,ol.DATE_DELIVERED"+
               " ,ol.NOTES"+
           " from SALES_ORDER_LINE ol "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into SALES_ORDER_LINE("+
               "  CURRENCY_CODE"+
               " ,DATE_DELIVERED"+
               " ,DATE_PROMISED"+
               " ,DATE_REQUESTED"+
               " ,DISCOUNT"+
               " ,DISCOUNT_TYPE"+
               " ,ID"+
               " ,LINE_NR"+
               " ,NET_AMOUNT"+
               " ,NOTES"+
               " ,PRICE"+
               " ,PRODUCT_ID"+
               " ,QTY"+
               " ,QTY_DELIVERED"+
               " ,QTY_INVOICED"+
               " ,QTY_ORDERED"+
               " ,QTY_RESERVED"+
               " ,RAW_NET_AMOUNT"+
               " ,SORDER_ID"+
               " ,UOM_CODE"+
           " ) values ( "+
               "  :CURRENCY_CODE"+
               " ,:DATE_DELIVERED"+
               " ,:DATE_PROMISED"+
               " ,:DATE_REQUESTED"+
               " ,:DISCOUNT"+
               " ,:DISCOUNT_TYPE"+
               " ,:ID"+
               " ,:LINE_NR"+
               " ,:NET_AMOUNT"+
               " ,:NOTES"+
               " ,:PRICE"+
               " ,:PRODUCT_ID"+
               " ,:QTY"+
               " ,:QTY_DELIVERED"+
               " ,:QTY_INVOICED"+
               " ,:QTY_ORDERED"+
               " ,:QTY_RESERVED"+
               " ,:RAW_NET_AMOUNT"+
               " ,:SORDER_ID"+
               " ,:UOM_CODE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_bpordline_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update SALES_ORDER_LINE set "+
               "  CURRENCY_CODE=:CURRENCY_CODE"+
               " ,DATE_DELIVERED=:DATE_DELIVERED"+
               " ,DATE_PROMISED=:DATE_PROMISED"+
               " ,DATE_REQUESTED=:DATE_REQUESTED"+
               " ,DISCOUNT=:DISCOUNT"+
               " ,DISCOUNT_TYPE=:DISCOUNT_TYPE"+
               " ,ID=:ID"+
               " ,LINE_NR=:LINE_NR"+
               " ,NET_AMOUNT=:NET_AMOUNT"+
               " ,NOTES=:NOTES"+
               " ,PRICE=:PRICE"+
               " ,PRODUCT_ID=:PRODUCT_ID"+
               " ,QTY=:QTY"+
               " ,QTY_DELIVERED=:QTY_DELIVERED"+
               " ,QTY_INVOICED=:QTY_INVOICED"+
               " ,QTY_ORDERED=:QTY_ORDERED"+
               " ,QTY_RESERVED=:QTY_RESERVED"+
               " ,RAW_NET_AMOUNT=:RAW_NET_AMOUNT"+
               " ,SORDER_ID=:SORDER_ID"+
               " ,UOM_CODE=:UOM_CODE"+
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
   String sql = "delete from SALES_ORDER_LINE where "+
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
               " ol.CURRENCY_CODE"+
               " ,ol.DATE_DELIVERED"+
               " ,ol.DATE_PROMISED"+
               " ,ol.DATE_REQUESTED"+
               " ,ol.DISCOUNT"+
               " ,ol.DISCOUNT_TYPE"+
               " ,ol.ID"+
               " ,ol.LINE_NR"+
               " ,ol.NET_AMOUNT"+
               " ,ol.NOTES"+
               " ,ol.PRICE"+
               " ,ol.PRODUCT_ID"+
                ",pbo_product.get_name_by_id( ol.product_id, 'N') PRODUCT_NAME"+
               " ,ol.QTY"+
               " ,ol.QTY_DELIVERED"+
               " ,ol.QTY_INVOICED"+
               " ,ol.QTY_ORDERED"+
               " ,ol.QTY_RESERVED"+
               " ,ol.RAW_NET_AMOUNT"+
               " ,ol.SORDER_ID"+
               " ,ol.UOM_CODE"+
           " from SALES_ORDER_LINE ol"+
        " where "+
     "      ol.ID= :ID"+ 
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
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("CURRENCY_CODE", new FieldDef("STRING"));
	  this.fields.put("DATE_DELIVERED", new FieldDef("DATE"));
	  this.fields.put("DATE_PROMISED", new FieldDef("DATE"));
	  this.fields.put("DATE_REQUESTED", new FieldDef("DATE"));
	  this.fields.put("DISCOUNT", new FieldDef("NUMBER"));
	  this.fields.put("DISCOUNT_TYPE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("LINE_NR", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.get("MODIFIEDON").setInDS(false);
	  this.fields.put("NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PRICE", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  this.fields.put("QTY", new FieldDef("NUMBER"));
	  this.fields.put("QTY_DELIVERED", new FieldDef("NUMBER"));
	  this.fields.put("QTY_INVOICED", new FieldDef("NUMBER"));
	  this.fields.put("QTY_ORDERED", new FieldDef("NUMBER"));
	  this.fields.put("QTY_RESERVED", new FieldDef("NUMBER"));
	  this.fields.put("RAW_NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("SORDER_ID", new FieldDef("NUMBER"));
	  this.fields.put("UOM_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
