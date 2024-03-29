/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0090 DC Controller: Price list products
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0090 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_PRICELIST_ID") != null && !this.request.getParam("QRY_PRICELIST_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PRICELIST_ID like :PRICELIST_ID");
      this.queryParams.put("PRICELIST_ID",(String)this.request.getParam("QRY_PRICELIST_ID"));
    }
    if (this.request.getParam("QRY_PRICELVL_ID") != null && !this.request.getParam("QRY_PRICELVL_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PRICELVL_ID like :PRICELVL_ID");
      this.queryParams.put("PRICELVL_ID",(String)this.request.getParam("QRY_PRICELVL_ID"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.PRICE"+
               " ,t.PRICELIST_ID"+
               " ,t.PRICELVL_ID"+
               " ,pbo_price.get_pricelvl_name_by_id(t.pricelvl_id) PRICELVL_NAME"+
               " ,t.PRODUCT_ID"+
               " ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
           " from MM_PRODUCT_PRICE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.PRICELIST_ID"+
               " ,t.PRODUCT_ID"+
               ",pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               ",pbo_price.get_pricelvl_name_by_id(t.pricelvl_id) PRICELVL_NAME"+
               " ,t.PRICELVL_ID"+
               " ,t.PRICE"+
           " from MM_PRODUCT_PRICE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PRODUCT_PRICE("+
               "  ID"+
               " ,PRICE"+
               " ,PRICELIST_ID"+
               " ,PRICELVL_ID"+
               " ,PRODUCT_ID"+
           " ) values ( "+
               "  :ID"+
               " ,:PRICE"+
               " ,:PRICELIST_ID"+
               " ,:PRICELVL_ID"+
               " ,:PRODUCT_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PRODPRICE_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PRODUCT_PRICE set "+
               "  ID=:ID"+ 
               " ,PRICE=:PRICE"+ 
               " ,PRICELIST_ID=:PRICELIST_ID"+ 
               " ,PRICELVL_ID=:PRICELVL_ID"+ 
               " ,PRODUCT_ID=:PRODUCT_ID"+ 
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
   String sql = "delete from MM_PRODUCT_PRICE where "+
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
               " ,t.PRICE"+
               " ,t.PRICELIST_ID"+
               " ,t.PRICELVL_ID"+
                ",pbo_price.get_pricelvl_name_by_id(t.pricelvl_id) PRICELVL_NAME"+
               " ,t.PRODUCT_ID"+
                ",pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
           " from MM_PRODUCT_PRICE t"+
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
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("PRICE", new FieldDef("NUMBER"));
	  this.fields.put("PRICELIST_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRICELVL_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRICELVL_NAME", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
