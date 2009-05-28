/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0046 DC Controller: Project issues
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0046 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ASSIGNED_TO") != null && !this.request.getParam("QRY_ASSIGNED_TO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ASSIGNED_TO like :ASSIGNED_TO");
      this.queryParams.put("ASSIGNED_TO",(String)this.request.getParam("QRY_ASSIGNED_TO"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_ISSUE_TYPE_CODE") != null && !this.request.getParam("QRY_ISSUE_TYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ISSUE_TYPE_CODE like :ISSUE_TYPE_CODE");
      this.queryParams.put("ISSUE_TYPE_CODE",(String)this.request.getParam("QRY_ISSUE_TYPE_CODE"));
    }
    if (this.request.getParam("QRY_IS_CLOSED") != null && !this.request.getParam("QRY_IS_CLOSED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_CLOSED like :IS_CLOSED");
      this.queryParams.put("IS_CLOSED",(String)this.request.getParam("QRY_IS_CLOSED"));
    }
    if (this.request.getParam("QRY_PRIORITY_CODE") != null && !this.request.getParam("QRY_PRIORITY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PRIORITY_CODE like :PRIORITY_CODE");
      this.queryParams.put("PRIORITY_CODE",(String)this.request.getParam("QRY_PRIORITY_CODE"));
    }
    if (this.request.getParam("QRY_PROJECT_ID") != null && !this.request.getParam("QRY_PROJECT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("PROJECT_ID like :PROJECT_ID");
      this.queryParams.put("PROJECT_ID",(String)this.request.getParam("QRY_PROJECT_ID"));
    }
    if (this.request.getParam("QRY_SEVERITY_CODE") != null && !this.request.getParam("QRY_SEVERITY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("SEVERITY_CODE like :SEVERITY_CODE");
      this.queryParams.put("SEVERITY_CODE",(String)this.request.getParam("QRY_SEVERITY_CODE"));
    }
    if (this.request.getParam("QRY_STATUS_CODE") != null && !this.request.getParam("QRY_STATUS_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STATUS_CODE like :STATUS_CODE");
      this.queryParams.put("STATUS_CODE",(String)this.request.getParam("QRY_STATUS_CODE"));
    }
    if (this.request.getParam("QRY_TITLE") != null && !this.request.getParam("QRY_TITLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("TITLE like :TITLE");
      this.queryParams.put("TITLE",(String)this.request.getParam("QRY_TITLE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ACTUAL_EFFORT"+
               " ,ACT_ENDDATE"+
               " ,ACT_STARTDATE"+
               " ,AFF_CMP"+
               " ,AFF_CMP_TYPE_CODE"+
               " ,AFF_PROJECT_RELEASE_CODE"+
               " ,ASSIGNED_TO"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,DESCRIPTION"+
               " ,EFFORT_UNIT"+
               " ,ESTIMATE_EFFORT"+
               " ,ID"+
               " ,ISSUE_TYPE_CODE"+
               " ,IS_CLOSED"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,PLAN_ENDDATE"+
               " ,PLAN_STARTDATE"+
               " ,PRIORITY_CODE"+
               " ,PROJECT_ID"+
               " ,( select name from project where id = project_id) PROJECT_NAME"+
               " ,SEVERITY_CODE"+
               " ,STATUS_CODE"+
               " ,TITLE"+
           " from PROJECT_ISSUE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " PROJECT_ID"+
               " ,ID"+
               ",( select name from project where id = project_id) PROJECT_NAME"+
               " ,TITLE"+
               " ,ISSUE_TYPE_CODE"+
               " ,SEVERITY_CODE"+
               " ,STATUS_CODE"+
               " ,PRIORITY_CODE"+
               " ,AFF_CMP_TYPE_CODE"+
               " ,AFF_CMP"+
               " ,AFF_PROJECT_RELEASE_CODE"+
               " ,EFFORT_UNIT"+
               " ,ESTIMATE_EFFORT"+
               " ,ACTUAL_EFFORT"+
               " ,IS_CLOSED"+
               " ,DESCRIPTION"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,ASSIGNED_TO"+
               " ,PLAN_STARTDATE"+
               " ,PLAN_ENDDATE"+
               " ,ACT_STARTDATE"+
               " ,ACT_ENDDATE"+
           " from PROJECT_ISSUE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into PROJECT_ISSUE("+
               "  ACT_ENDDATE"+
               " ,ACT_STARTDATE"+
               " ,AFF_CMP"+
               " ,AFF_CMP_TYPE_CODE"+
               " ,AFF_PROJECT_RELEASE_CODE"+
               " ,ASSIGNED_TO"+
               " ,DESCRIPTION"+
               " ,EFFORT_UNIT"+
               " ,ESTIMATE_EFFORT"+
               " ,ID"+
               " ,ISSUE_TYPE_CODE"+
               " ,IS_CLOSED"+
               " ,PLAN_ENDDATE"+
               " ,PLAN_STARTDATE"+
               " ,PRIORITY_CODE"+
               " ,PROJECT_ID"+
               " ,SEVERITY_CODE"+
               " ,STATUS_CODE"+
               " ,TITLE"+
           " ) values ( "+
               "  :ACT_ENDDATE"+
               " ,:ACT_STARTDATE"+
               " ,:AFF_CMP"+
               " ,:AFF_CMP_TYPE_CODE"+
               " ,:AFF_PROJECT_RELEASE_CODE"+
               " ,:ASSIGNED_TO"+
               " ,:DESCRIPTION"+
               " ,:EFFORT_UNIT"+
               " ,:ESTIMATE_EFFORT"+
               " ,:ID"+
               " ,:ISSUE_TYPE_CODE"+
               " ,:IS_CLOSED"+
               " ,:PLAN_ENDDATE"+
               " ,:PLAN_STARTDATE"+
               " ,:PRIORITY_CODE"+
               " ,:PROJECT_ID"+
               " ,:SEVERITY_CODE"+
               " ,:STATUS_CODE"+
               " ,:TITLE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_prjissue_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PROJECT_ISSUE set "+
               "  ACT_ENDDATE=:ACT_ENDDATE"+
               " ,ACT_STARTDATE=:ACT_STARTDATE"+
               " ,AFF_CMP=:AFF_CMP"+
               " ,AFF_CMP_TYPE_CODE=:AFF_CMP_TYPE_CODE"+
               " ,AFF_PROJECT_RELEASE_CODE=:AFF_PROJECT_RELEASE_CODE"+
               " ,ASSIGNED_TO=:ASSIGNED_TO"+
               " ,DESCRIPTION=:DESCRIPTION"+
               " ,EFFORT_UNIT=:EFFORT_UNIT"+
               " ,ESTIMATE_EFFORT=:ESTIMATE_EFFORT"+
               " ,ID=:ID"+
               " ,ISSUE_TYPE_CODE=:ISSUE_TYPE_CODE"+
               " ,IS_CLOSED=:IS_CLOSED"+
               " ,PLAN_ENDDATE=:PLAN_ENDDATE"+
               " ,PLAN_STARTDATE=:PLAN_STARTDATE"+
               " ,PRIORITY_CODE=:PRIORITY_CODE"+
               " ,PROJECT_ID=:PROJECT_ID"+
               " ,SEVERITY_CODE=:SEVERITY_CODE"+
               " ,STATUS_CODE=:STATUS_CODE"+
               " ,TITLE=:TITLE"+
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
   String sql = "delete from PROJECT_ISSUE where "+
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
               " ACTUAL_EFFORT"+
               " ,ACT_ENDDATE"+
               " ,ACT_STARTDATE"+
               " ,AFF_CMP"+
               " ,AFF_CMP_TYPE_CODE"+
               " ,AFF_PROJECT_RELEASE_CODE"+
               " ,ASSIGNED_TO"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,DESCRIPTION"+
               " ,EFFORT_UNIT"+
               " ,ESTIMATE_EFFORT"+
               " ,ID"+
               " ,ISSUE_TYPE_CODE"+
               " ,IS_CLOSED"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,PLAN_ENDDATE"+
               " ,PLAN_STARTDATE"+
               " ,PRIORITY_CODE"+
               " ,PROJECT_ID"+
                ",( select name from project where id = project_id) PROJECT_NAME"+
               " ,SEVERITY_CODE"+
               " ,STATUS_CODE"+
               " ,TITLE"+
           " from PROJECT_ISSUE "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ACTUAL_EFFORT", new FieldDef("NUMBER"));
	  this.fields.put("ACT_ENDDATE", new FieldDef("DATE"));
	  this.fields.put("ACT_STARTDATE", new FieldDef("DATE"));
	  this.fields.put("AFF_CMP", new FieldDef("STRING"));
	  this.fields.put("AFF_CMP_TYPE_CODE", new FieldDef("STRING"));
	  this.fields.put("AFF_PROJECT_RELEASE_CODE", new FieldDef("STRING"));
	  this.fields.put("ASSIGNED_TO", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("EFFORT_UNIT", new FieldDef("STRING"));
	  this.fields.put("ESTIMATE_EFFORT", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("ISSUE_TYPE_CODE", new FieldDef("STRING"));
	  this.fields.put("IS_CLOSED", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PLAN_ENDDATE", new FieldDef("DATE"));
	  this.fields.put("PLAN_STARTDATE", new FieldDef("DATE"));
	  this.fields.put("PRIORITY_CODE", new FieldDef("STRING"));
	  this.fields.put("PROJECT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PROJECT_NAME", new FieldDef("STRING"));
	  this.fields.put("SEVERITY_CODE", new FieldDef("STRING"));
	  this.fields.put("STATUS_CODE", new FieldDef("STRING"));
	  this.fields.put("TITLE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
