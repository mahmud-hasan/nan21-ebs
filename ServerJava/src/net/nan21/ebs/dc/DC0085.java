/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0085 DC Controller: Organization inventory
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0085 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IS_DEFAULT") != null && !this.request.getParam("QRY_IS_DEFAULT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_DEFAULT like :IS_DEFAULT");
      this.queryParams.put("IS_DEFAULT",(String)this.request.getParam("QRY_IS_DEFAULT"));
    }
    if (this.request.getParam("QRY_ORGINVTYPE_CODE") != null && !this.request.getParam("QRY_ORGINVTYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ORGINVTYPE_CODE like :ORGINVTYPE_CODE");
      this.queryParams.put("ORGINVTYPE_CODE",(String)this.request.getParam("QRY_ORGINVTYPE_CODE"));
    }
    if (this.request.getParam("QRY_ORG_ID") != null && !this.request.getParam("QRY_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ORG_ID like :ORG_ID");
      this.queryParams.put("ORG_ID",(String)this.request.getParam("QRY_ORG_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CODE"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DESCRIPTION"+
               " ,t.ID"+
               " ,t.IS_DEFAULT"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.ORGINVTYPE_CODE"+
               " ,t.ORG_ID"+
               " ,pbo_org.get_name_by_id(t.org_id) ORG_NAME"+
           " from MM_ORG_INV t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.CLIENT_ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.ORG_ID"+
               ",pbo_org.get_name_by_id(t.org_id) ORG_NAME"+
               " ,t.CODE"+
               " ,t.DESCRIPTION"+
               " ,t.ORGINVTYPE_CODE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_DEFAULT"+
           " from MM_ORG_INV t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_ORG_INV("+
               "  CLIENT_ID"+
               " ,CODE"+
               " ,DESCRIPTION"+
               " ,ID"+
               " ,IS_DEFAULT"+
               " ,ORGINVTYPE_CODE"+
               " ,ORG_ID"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:CODE"+
               " ,:DESCRIPTION"+
               " ,:ID"+
               " ,:IS_DEFAULT"+
               " ,:ORGINVTYPE_CODE"+
               " ,:ORG_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_ORGINV_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_ORG_INV set "+
               "  CLIENT_ID=:CLIENT_ID"+
               " ,CODE=:CODE"+
               " ,DESCRIPTION=:DESCRIPTION"+
               " ,ID=:ID"+
               " ,IS_DEFAULT=:IS_DEFAULT"+
               " ,ORGINVTYPE_CODE=:ORGINVTYPE_CODE"+
               " ,ORG_ID=:ORG_ID"+
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
   String sql = "delete from MM_ORG_INV where "+
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
               " ,t.CODE"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DESCRIPTION"+
               " ,t.ID"+
               " ,t.IS_DEFAULT"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.ORGINVTYPE_CODE"+
               " ,t.ORG_ID"+
                ",pbo_org.get_name_by_id(t.org_id) ORG_NAME"+
           " from MM_ORG_INV t"+
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
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_DEFAULT", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("ORGINVTYPE_CODE", new FieldDef("STRING"));
	  this.fields.put("ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("ORG_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
