/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0077 DC Controller: Product attributes
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0077 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("av.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("av.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_PRDATTR_ID") != null && !this.request.getParam("QRY_PRDATTR_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("av.PRDATTR_ID like :PRDATTR_ID");
      this.queryParams.put("PRDATTR_ID",(String)this.request.getParam("QRY_PRDATTR_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " av.ID"+
               " ,av.PRODUCT_ID"+
               " ,av.PRDATTR_ID"+
               " ,av.ATTR_VAL"+
               " ,av.CREATEDON"+
               " ,av.CREATEDBY"+
               " ,av.MODIFIEDON"+
               " ,av.MODIFIEDBY"+
               " ,pbo_product.get_attr_name_by_id(av.PRDATTR_ID, 'N') PRDATTR_NAME"+
               " ,pbo_product.get_name_by_id(av.product_id,'N') PRODUCT_NAME"+
           " from MM_PROD_ATTR_VAL av "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " av.ID"+
               " ,av.PRDATTR_ID"+
               ",pbo_product.get_attr_name_by_id(av.PRDATTR_ID, 'N') PRDATTR_NAME"+
               " ,av.ATTR_VAL"+
               " ,av.PRODUCT_ID"+
               ",pbo_product.get_name_by_id(av.product_id,'N') PRODUCT_NAME"+
               " ,av.CREATEDON"+
               " ,av.CREATEDBY"+
               " ,av.MODIFIEDON"+
               " ,av.MODIFIEDBY"+
           " from MM_PROD_ATTR_VAL av "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PROD_ATTR_VAL set "+
               "  ATTR_VAL=:ATTR_VAL"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,PRDATTR_ID=:PRDATTR_ID"+ 
               " ,PRODUCT_ID=:PRODUCT_ID"+ 
   " where "+ 
     "      ID= :ID"+
    "";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoUpdate();	
}

public void doDelete() throws Exception {}
public void initNewRecord() throws Exception {
    this.populateRecordFromRequest();
    this.record.put("_p_record_status", "insert");
    this.writeResultInitNewRecord();
}

private void findByPk()  throws Exception {
    String sql = "select "+ 
               " av.ID"+
               " ,av.PRODUCT_ID"+
               " ,av.PRDATTR_ID"+
               " ,av.ATTR_VAL"+
               " ,av.CREATEDON"+
               " ,av.CREATEDBY"+
               " ,av.MODIFIEDON"+
               " ,av.MODIFIEDBY"+
                ",pbo_product.get_attr_name_by_id(av.PRDATTR_ID, 'N') PRDATTR_NAME"+
                ",pbo_product.get_name_by_id(av.product_id,'N') PRODUCT_NAME"+
           " from MM_PROD_ATTR_VAL av"+
        " where "+
     "      av.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRDATTR_ID", new FieldDef("NUMBER"));
	  this.fields.put("ATTR_VAL", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("PRDATTR_NAME", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
