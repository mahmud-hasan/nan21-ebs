/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0089 DC Controller: Stocks
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0089 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_STOCK_ID") != null && !this.request.getParam("QRY_STOCK_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STOCK_ID like :STOCK_ID");
      this.queryParams.put("STOCK_ID",(String)this.request.getParam("QRY_STOCK_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_CODE") != null && !this.request.getParam("QRY_CLIENT_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CLIENT_CODE like :CLIENT_CODE");
      this.queryParams.put("CLIENT_CODE",(String)this.request.getParam("QRY_CLIENT_CODE"));
    }
    if (this.request.getParam("QRY_ORG_ID") != null && !this.request.getParam("QRY_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ORG_ID like :ORG_ID");
      this.queryParams.put("ORG_ID",(String)this.request.getParam("QRY_ORG_ID"));
    }
    if (this.request.getParam("QRY_ORG_NAME") != null && !this.request.getParam("QRY_ORG_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ORG_NAME like :ORG_NAME");
      this.queryParams.put("ORG_NAME",(String)this.request.getParam("QRY_ORG_NAME"));
    }
    if (this.request.getParam("QRY_ORGINV_ID") != null && !this.request.getParam("QRY_ORGINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ORGINV_ID like :ORGINV_ID");
      this.queryParams.put("ORGINV_ID",(String)this.request.getParam("QRY_ORGINV_ID"));
    }
    if (this.request.getParam("QRY_ORGINV_CODE") != null && !this.request.getParam("QRY_ORGINV_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ORGINV_CODE like :ORGINV_CODE");
      this.queryParams.put("ORGINV_CODE",(String)this.request.getParam("QRY_ORGINV_CODE"));
    }
    if (this.request.getParam("QRY_STOCKLOC_ID") != null && !this.request.getParam("QRY_STOCKLOC_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STOCKLOC_ID like :STOCKLOC_ID");
      this.queryParams.put("STOCKLOC_ID",(String)this.request.getParam("QRY_STOCKLOC_ID"));
    }
    if (this.request.getParam("QRY_STOCKLOC_CODE") != null && !this.request.getParam("QRY_STOCKLOC_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STOCKLOC_CODE like :STOCKLOC_CODE");
      this.queryParams.put("STOCKLOC_CODE",(String)this.request.getParam("QRY_STOCKLOC_CODE"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_PRODUCT_CODE") != null && !this.request.getParam("QRY_PRODUCT_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PRODUCT_CODE like :PRODUCT_CODE");
      this.queryParams.put("PRODUCT_CODE",(String)this.request.getParam("QRY_PRODUCT_CODE"));
    }
    if (this.request.getParam("QRY_PRODUCT_NAME") != null && !this.request.getParam("QRY_PRODUCT_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PRODUCT_NAME like :PRODUCT_NAME");
      this.queryParams.put("PRODUCT_NAME",(String)this.request.getParam("QRY_PRODUCT_NAME"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " STOCK_ID"+
               " ,CLIENT_ID"+
               " ,CLIENT_CODE"+
               " ,ORG_ID"+
               " ,ORG_NAME"+
               " ,ORGINV_ID"+
               " ,ORGINV_CODE"+
               " ,STOCKLOC_ID"+
               " ,STOCKLOC_CODE"+
               " ,PRODUCT_ID"+
               " ,PRODUCT_CODE"+
               " ,PRODUCT_NAME"+
               " ,QTY"+
               " ,UOM"+
           " from V_STOCKS  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " PRODUCT_CODE"+
               " ,PRODUCT_NAME"+
               " ,QTY"+
               " ,UOM"+
               " ,STOCK_ID"+
               " ,CLIENT_ID"+
               " ,CLIENT_CODE"+
               " ,ORG_ID"+
               " ,ORG_NAME"+
               " ,ORGINV_ID"+
               " ,ORGINV_CODE"+
               " ,STOCKLOC_ID"+
               " ,STOCKLOC_CODE"+
               " ,PRODUCT_ID"+
           " from V_STOCKS  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate() throws Exception  {}
public void doDelete() throws Exception {}
public void initNewRecord() throws Exception {}
private void findByPk()  throws Exception {
    String sql = "select "+ 
               " STOCK_ID"+
               " ,CLIENT_ID"+
               " ,CLIENT_CODE"+
               " ,ORG_ID"+
               " ,ORG_NAME"+
               " ,ORGINV_ID"+
               " ,ORGINV_CODE"+
               " ,STOCKLOC_ID"+
               " ,STOCKLOC_CODE"+
               " ,PRODUCT_ID"+
               " ,PRODUCT_CODE"+
               " ,PRODUCT_NAME"+
               " ,QTY"+
               " ,UOM"+
           " from V_STOCKS "+
        " where "+
     "      STOCK_ID= :STOCK_ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("STOCK_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("ORG_NAME", new FieldDef("STRING"));
	  this.fields.put("ORGINV_ID", new FieldDef("NUMBER"));
	  this.fields.put("ORGINV_CODE", new FieldDef("STRING"));
	  this.fields.put("STOCKLOC_ID", new FieldDef("NUMBER"));
	  this.fields.put("STOCKLOC_CODE", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_CODE", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  this.fields.put("QTY", new FieldDef("NUMBER"));
	  this.fields.put("UOM", new FieldDef("STRING"));
	  String[] _pkFields = {"STOCK_ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
