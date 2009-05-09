/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0039 DC Controller: Product masterdata
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0039 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE").toUpperCase());
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_PROD_TYPE") != null && !this.request.getParam("QRY_PROD_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.PROD_TYPE like :PROD_TYPE");
      this.queryParams.put("PROD_TYPE",(String)this.request.getParam("QRY_PROD_TYPE"));
    }
    if (this.request.getParam("QRY_SUMMARY") != null && !this.request.getParam("QRY_SUMMARY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.SUMMARY like :SUMMARY");
      this.queryParams.put("SUMMARY",(String)this.request.getParam("QRY_SUMMARY"));
    }
    if (this.request.getParam("QRY_PRODCATEG_ID") != null && !this.request.getParam("QRY_PRODCATEG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.PRODCATEG_ID like :PRODCATEG_ID");
      this.queryParams.put("PRODCATEG_ID",(String)this.request.getParam("QRY_PRODCATEG_ID"));
    }
    if (this.request.getParam("QRY_ATTRGRP_ID") != null && !this.request.getParam("QRY_ATTRGRP_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("p.ATTRGRP_ID like :ATTRGRP_ID");
      this.queryParams.put("ATTRGRP_ID",(String)this.request.getParam("QRY_ATTRGRP_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " p.ID"+
               " ,p.CODE"+
               " ,p.NAME"+
               " ,p.DESCRIPTION"+
               " ,p.PROD_TYPE"+
               " ,p.SUMMARY"+
               " ,p.STORABLE"+
               " ,p.CREATEDON"+
               " ,p.CREATEDBY"+
               " ,p.MODIFIEDON"+
               " ,p.MODIFIEDBY"+
               " ,p.UOM_CODE"+
               " ,p.VOLUME"+
               " ,p.WEIGHT"+
               " ,p.PRODCATEG_ID"+
               " ,pbo_product.get_categ_name_by_id(p.prodcateg_id, 'N') PRODCATEG_CODE"+
               " ,p.ATTRGRP_ID"+
               " ,pbo_product.get_attrgrp_name_by_id(p.attrgrp_id, 'N' ) ATTRGRP_NAME"+
           " from MM_PRODUCT p "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " p.ID"+
               " ,p.CODE"+
               " ,p.NAME"+
               " ,p.PRODCATEG_ID"+
               ",pbo_product.get_categ_name_by_id(p.prodcateg_id, 'N') PRODCATEG_CODE"+
               " ,p.STORABLE"+
               " ,p.UOM_CODE"+
               " ,p.DESCRIPTION"+
               " ,p.PROD_TYPE"+
               " ,p.SUMMARY"+
               " ,p.ATTRGRP_ID"+
               ",pbo_product.get_attrgrp_name_by_id(p.attrgrp_id, 'N' ) ATTRGRP_NAME"+
               " ,p.VOLUME"+
               " ,p.WEIGHT"+
               " ,p.CREATEDON"+
               " ,p.CREATEDBY"+
               " ,p.MODIFIEDON"+
               " ,p.MODIFIEDBY"+
           " from MM_PRODUCT p "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PRODUCT("+
               "  ID"+
               " ,CODE"+
               " ,NAME"+
               " ,DESCRIPTION"+
               " ,PROD_TYPE"+
               " ,SUMMARY"+
               " ,STORABLE"+
               " ,CREATEDBY"+
               " ,MODIFIEDBY"+
               " ,UOM_CODE"+
               " ,VOLUME"+
               " ,WEIGHT"+
               " ,PRODCATEG_ID"+
               " ,ATTRGRP_ID"+
           " ) values ( "+
               "  :ID"+
               " ,:CODE"+
               " ,:NAME"+
               " ,:DESCRIPTION"+
               " ,:PROD_TYPE"+
               " ,:SUMMARY"+
               " ,:STORABLE"+
               " ,:CREATEDBY"+
               " ,:MODIFIEDBY"+
               " ,:UOM_CODE"+
               " ,:VOLUME"+
               " ,:WEIGHT"+
               " ,:PRODCATEG_ID"+
               " ,:ATTRGRP_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PROD_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PRODUCT set "+
               "  ID=:ID"+
               " ,CODE=:CODE"+
               " ,NAME=:NAME"+
               " ,DESCRIPTION=:DESCRIPTION"+
               " ,PROD_TYPE=:PROD_TYPE"+
               " ,SUMMARY=:SUMMARY"+
               " ,STORABLE=:STORABLE"+
               " ,UOM_CODE=:UOM_CODE"+
               " ,PRODCATEG_ID=:PRODCATEG_ID"+
               " ,ATTRGRP_ID=:ATTRGRP_ID"+
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
   String sql = "delete from MM_PRODUCT where "+
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
               " p.ID"+
               " ,p.CODE"+
               " ,p.NAME"+
               " ,p.DESCRIPTION"+
               " ,p.PROD_TYPE"+
               " ,p.SUMMARY"+
               " ,p.STORABLE"+
               " ,p.CREATEDON"+
               " ,p.CREATEDBY"+
               " ,p.MODIFIEDON"+
               " ,p.MODIFIEDBY"+
               " ,p.UOM_CODE"+
               " ,p.VOLUME"+
               " ,p.WEIGHT"+
               " ,p.PRODCATEG_ID"+
                ",pbo_product.get_categ_name_by_id(p.prodcateg_id, 'N') PRODCATEG_CODE"+
               " ,p.ATTRGRP_ID"+
                ",pbo_product.get_attrgrp_name_by_id(p.attrgrp_id, 'N' ) ATTRGRP_NAME"+
           " from MM_PRODUCT p"+
        " where "+
     "      p.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.get("CODE").setCaseRestriction("Upper");
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("PROD_TYPE", new FieldDef("STRING"));
	  this.fields.put("SUMMARY", new FieldDef("BOOLEAN"));
	  this.fields.put("STORABLE", new FieldDef("BOOLEAN"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("UOM_CODE", new FieldDef("STRING"));
	  this.fields.put("VOLUME", new FieldDef("NUMBER"));
	  this.fields.put("WEIGHT", new FieldDef("NUMBER"));
	  this.fields.put("PRODCATEG_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODCATEG_CODE", new FieldDef("STRING"));
	  this.fields.put("ATTRGRP_ID", new FieldDef("NUMBER"));
	  this.fields.put("ATTRGRP_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
