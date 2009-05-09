/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0038 DC Controller: Product categories
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0038 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pc.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pc.CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE").toUpperCase());
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pc.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_PRODCATEG_ID") != null && !this.request.getParam("QRY_PRODCATEG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pc.PRODCATEG_ID like :PRODCATEG_ID");
      this.queryParams.put("PRODCATEG_ID",(String)this.request.getParam("QRY_PRODCATEG_ID"));
    }
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pc.ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pc.ID"+
               " ,pc.CODE"+
               " ,pc.NAME"+
               " ,pc.PRODCATEG_ID"+
               " ,pc.DESCRIPTION"+
               " ,pc.CREATEDON"+
               " ,pc.CREATEDBY"+
               " ,pc.MODIFIEDON"+
               " ,pc.MODIFIEDBY"+
               " ,pc.ACTIVE"+
               " ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME"+
           " from MM_PRODUCT_CATEGORY pc "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pc.ID"+
               " ,pc.CODE"+
               " ,pc.NAME"+
               " ,pc.PRODCATEG_ID"+
               ",pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME"+
               " ,pc.DESCRIPTION"+
               " ,pc.ACTIVE"+
               " ,pc.CREATEDON"+
               " ,pc.CREATEDBY"+
               " ,pc.MODIFIEDON"+
               " ,pc.MODIFIEDBY"+
           " from MM_PRODUCT_CATEGORY pc "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PRODUCT_CATEGORY("+
               "  ID"+
               " ,CODE"+
               " ,NAME"+
               " ,PRODCATEG_ID"+
               " ,DESCRIPTION"+
               " ,CREATEDBY"+
               " ,MODIFIEDBY"+
               " ,ACTIVE"+
           " ) values ( "+
               "  :ID"+
               " ,:CODE"+
               " ,:NAME"+
               " ,:PRODCATEG_ID"+
               " ,:DESCRIPTION"+
               " ,:CREATEDBY"+
               " ,:MODIFIEDBY"+
               " ,:ACTIVE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_prodcateg_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PRODUCT_CATEGORY set "+
               "  ID=:ID"+
               " ,NAME=:NAME"+
               " ,PRODCATEG_ID=:PRODCATEG_ID"+
               " ,DESCRIPTION=:DESCRIPTION"+
               " ,ACTIVE=:ACTIVE"+
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
   String sql = "delete from MM_PRODUCT_CATEGORY where "+
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
               " pc.ID"+
               " ,pc.CODE"+
               " ,pc.NAME"+
               " ,pc.PRODCATEG_ID"+
               " ,pc.DESCRIPTION"+
               " ,pc.CREATEDON"+
               " ,pc.CREATEDBY"+
               " ,pc.MODIFIEDON"+
               " ,pc.MODIFIEDBY"+
               " ,pc.ACTIVE"+
                ",pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME"+
           " from MM_PRODUCT_CATEGORY pc"+
        " where "+
     "      pc.ID= :ID"+ 
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
	  this.fields.put("PRODCATEG_ID", new FieldDef("NUMBER"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  this.fields.put("PRODCATEG_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
