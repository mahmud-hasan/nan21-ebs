/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0104 DC Controller: Product client list
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0104 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
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
               " pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.FOR_SALE"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PRODCLASS_CODE"+
               " ,t.PRODUCT_ID"+
           " from MM_PRODUCT_CLIENT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.PRODUCT_ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.FOR_SALE"+
               " ,t.PRODCLASS_CODE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from MM_PRODUCT_CLIENT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PRODUCT_CLIENT("+
               "  CLIENT_ID"+
               " ,FOR_SALE"+
               " ,ID"+
               " ,PRODCLASS_CODE"+
               " ,PRODUCT_ID"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:FOR_SALE"+
               " ,:ID"+
               " ,:PRODCLASS_CODE"+
               " ,:PRODUCT_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PRODCLIENT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PRODUCT_CLIENT set "+
               "  CLIENT_ID=:CLIENT_ID"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,FOR_SALE=:FOR_SALE"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,PRODCLASS_CODE=:PRODCLASS_CODE"+ 
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
   String sql = "delete from MM_PRODUCT_CLIENT where "+
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
                "pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.FOR_SALE"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PRODCLASS_CODE"+
               " ,t.PRODUCT_ID"+
           " from MM_PRODUCT_CLIENT t"+
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
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("FOR_SALE", new FieldDef("BOOLEAN"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PRODCLASS_CODE", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
