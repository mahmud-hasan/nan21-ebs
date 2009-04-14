/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0080 DC Controller: Reception document line
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

public class DC0080 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_MVMNTINDOC_ID") != null && !this.request.getParam("QRY_MVMNTINDOC_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.MVMNTINDOC_ID like :MVMNTINDOC_ID");
      this.queryParams.put("MVMNTINDOC_ID",(String)this.request.getParam("QRY_MVMNTINDOC_ID"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_STOCKLOC_ID") != null && !this.request.getParam("QRY_STOCKLOC_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.STOCKLOC_ID like :STOCKLOC_ID");
      this.queryParams.put("STOCKLOC_ID",(String)this.request.getParam("QRY_STOCKLOC_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.BASE_DOC_CURRENCY"+
               " ,t.BASE_DOC_PRICE"+
               " ,t.BASE_DOC_QTY"+
               " ,t.ID"+
               " ,t.INVENTORY_QTY"+
               " ,t.LINE_NO"+
               " ,t.MVMNTINDOC_ID"+
               " ,t.NOTES"+
               " ,t.PRODUCT_ID"+
               " ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               " ,t.QTY"+
               " ,t.RECEIVED_QTY"+
               " ,pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE"+
               " ,t.STOCKLOC_ID"+
               " ,t.UOM"+
           " from MM_MOVEMENT_IN_LINE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.LINE_NO"+
               " ,t.MVMNTINDOC_ID"+
               " ,t.PRODUCT_ID"+
               ",pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               " ,t.QTY"+
               " ,t.UOM"+
               " ,t.BASE_DOC_QTY"+
               " ,t.RECEIVED_QTY"+
               " ,t.INVENTORY_QTY"+
               " ,t.BASE_DOC_PRICE"+
               " ,t.BASE_DOC_CURRENCY"+
               ",pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE"+
               " ,t.STOCKLOC_ID"+
               " ,t.NOTES"+
           " from MM_MOVEMENT_IN_LINE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_MOVEMENT_IN_LINE("+
               "  BASE_DOC_CURRENCY"+
               " ,BASE_DOC_PRICE"+
               " ,BASE_DOC_QTY"+
               " ,ID"+
               " ,INVENTORY_QTY"+
               " ,LINE_NO"+
               " ,MVMNTINDOC_ID"+
               " ,NOTES"+
               " ,PRODUCT_ID"+
               " ,QTY"+
               " ,RECEIVED_QTY"+
               " ,STOCKLOC_ID"+
               " ,UOM"+
           " ) values ( "+
               "  :BASE_DOC_CURRENCY"+
               " ,:BASE_DOC_PRICE"+
               " ,:BASE_DOC_QTY"+
               " ,:ID"+
               " ,:INVENTORY_QTY"+
               " ,:LINE_NO"+
               " ,:MVMNTINDOC_ID"+
               " ,:NOTES"+
               " ,:PRODUCT_ID"+
               " ,:QTY"+
               " ,:RECEIVED_QTY"+
               " ,:STOCKLOC_ID"+
               " ,:UOM"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_MVMNTINLIN_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_MOVEMENT_IN_LINE set "+
               "  ID=:ID"+
               " ,LINE_NO=:LINE_NO"+
               " ,MVMNTINDOC_ID=:MVMNTINDOC_ID"+
               " ,PRODUCT_ID=:PRODUCT_ID"+
               " ,QTY=:QTY"+
               " ,BASE_DOC_QTY=:BASE_DOC_QTY"+
               " ,RECEIVED_QTY=:RECEIVED_QTY"+
               " ,INVENTORY_QTY=:INVENTORY_QTY"+
               " ,BASE_DOC_PRICE=:BASE_DOC_PRICE"+
               " ,BASE_DOC_CURRENCY=:BASE_DOC_CURRENCY"+
               " ,NOTES=:NOTES"+
               " ,UOM=:UOM"+
               " ,STOCKLOC_ID=:STOCKLOC_ID"+
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
   String sql = "delete from MM_MOVEMENT_IN_LINE where "+
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
               " t.BASE_DOC_CURRENCY"+
               " ,t.BASE_DOC_PRICE"+
               " ,t.BASE_DOC_QTY"+
               " ,t.ID"+
               " ,t.INVENTORY_QTY"+
               " ,t.LINE_NO"+
               " ,t.MVMNTINDOC_ID"+
               " ,t.NOTES"+
               " ,t.PRODUCT_ID"+
                ",pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME"+
               " ,t.QTY"+
               " ,t.RECEIVED_QTY"+
                ",pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE"+
               " ,t.STOCKLOC_ID"+
               " ,t.UOM"+
           " from MM_MOVEMENT_IN_LINE t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("BASE_DOC_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("BASE_DOC_PRICE", new FieldDef("NUMBER"));
	  this.fields.put("BASE_DOC_QTY", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("INVENTORY_QTY", new FieldDef("NUMBER"));
	  this.fields.put("LINE_NO", new FieldDef("NUMBER"));
	  this.fields.put("MVMNTINDOC_ID", new FieldDef("NUMBER"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODUCT_NAME", new FieldDef("STRING"));
	  this.fields.put("QTY", new FieldDef("NUMBER"));
	  this.fields.put("RECEIVED_QTY", new FieldDef("NUMBER"));
	  this.fields.put("STOCKLOC_CODE", new FieldDef("STRING"));
	  this.fields.put("STOCKLOC_ID", new FieldDef("NUMBER"));
	  this.fields.put("UOM", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
