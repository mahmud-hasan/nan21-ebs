/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0098 DC Controller: Transports
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0098 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
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
    if (this.request.getParam("QRY_TRANSPSTAT_CODE") != null && !this.request.getParam("QRY_TRANSPSTAT_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.TRANSPSTAT_CODE like :TRANSPSTAT_CODE");
      this.queryParams.put("TRANSPSTAT_CODE",(String)this.request.getParam("QRY_TRANSPSTAT_CODE"));
    }
    if (this.request.getParam("QRY_TRANSPTYPE_CODE") != null && !this.request.getParam("QRY_TRANSPTYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.TRANSPTYPE_CODE like :TRANSPTYPE_CODE");
      this.queryParams.put("TRANSPTYPE_CODE",(String)this.request.getParam("QRY_TRANSPTYPE_CODE"));
    }
    if (this.request.getParam("QRY_VEHICLE_ID") != null && !this.request.getParam("QRY_VEHICLE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.VEHICLE_ID like :VEHICLE_ID");
      this.queryParams.put("VEHICLE_ID",(String)this.request.getParam("QRY_VEHICLE_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.CODE"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.EFECTIVE_ARRIVE_DATE"+
               " ,t.EFECTIVE_DEP_DATE"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PLANNED_ARRIVE_DATE"+
               " ,t.PLANNED_DEP_DATE"+
               " ,t.TRANSPSTAT_CODE"+
               " ,t.TRANSPTYPE_CODE"+
               " ,t.VEHICLE_ID"+
               " ,pbo_transp.get_vehicle_regno_by_id(t.vehicle_id) VEHICLE_REGNO"+
           " from TR_TRANSPORT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.TRANSPTYPE_CODE"+
               " ,t.TRANSPSTAT_CODE"+
               " ,t.CODE"+
               ",pbo_transp.get_vehicle_regno_by_id(t.vehicle_id) VEHICLE_REGNO"+
               " ,t.VEHICLE_ID"+
               " ,t.PLANNED_DEP_DATE"+
               " ,t.EFECTIVE_DEP_DATE"+
               " ,t.PLANNED_ARRIVE_DATE"+
               " ,t.EFECTIVE_ARRIVE_DATE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from TR_TRANSPORT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into TR_TRANSPORT("+
               "  CODE"+
               " ,EFECTIVE_ARRIVE_DATE"+
               " ,EFECTIVE_DEP_DATE"+
               " ,ID"+
               " ,PLANNED_ARRIVE_DATE"+
               " ,PLANNED_DEP_DATE"+
               " ,TRANSPSTAT_CODE"+
               " ,TRANSPTYPE_CODE"+
               " ,VEHICLE_ID"+
           " ) values ( "+
               "  :CODE"+
               " ,:EFECTIVE_ARRIVE_DATE"+
               " ,:EFECTIVE_DEP_DATE"+
               " ,:ID"+
               " ,:PLANNED_ARRIVE_DATE"+
               " ,:PLANNED_DEP_DATE"+
               " ,:TRANSPSTAT_CODE"+
               " ,:TRANSPTYPE_CODE"+
               " ,:VEHICLE_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_TRANSP_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update TR_TRANSPORT set "+
               "  CODE=:CODE"+
               " ,EFECTIVE_ARRIVE_DATE=:EFECTIVE_ARRIVE_DATE"+
               " ,EFECTIVE_DEP_DATE=:EFECTIVE_DEP_DATE"+
               " ,ID=:ID"+
               " ,PLANNED_ARRIVE_DATE=:PLANNED_ARRIVE_DATE"+
               " ,PLANNED_DEP_DATE=:PLANNED_DEP_DATE"+
               " ,TRANSPSTAT_CODE=:TRANSPSTAT_CODE"+
               " ,TRANSPTYPE_CODE=:TRANSPTYPE_CODE"+
               " ,VEHICLE_ID=:VEHICLE_ID"+
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
   String sql = "delete from TR_TRANSPORT where "+
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
               " t.CODE"+
               " ,t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.EFECTIVE_ARRIVE_DATE"+
               " ,t.EFECTIVE_DEP_DATE"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.PLANNED_ARRIVE_DATE"+
               " ,t.PLANNED_DEP_DATE"+
               " ,t.TRANSPSTAT_CODE"+
               " ,t.TRANSPTYPE_CODE"+
               " ,t.VEHICLE_ID"+
                ",pbo_transp.get_vehicle_regno_by_id(t.vehicle_id) VEHICLE_REGNO"+
           " from TR_TRANSPORT t"+
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
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("EFECTIVE_ARRIVE_DATE", new FieldDef("DATE"));
	  this.fields.put("EFECTIVE_DEP_DATE", new FieldDef("DATE"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("PLANNED_ARRIVE_DATE", new FieldDef("DATE"));
	  this.fields.put("PLANNED_DEP_DATE", new FieldDef("DATE"));
	  this.fields.put("TRANSPSTAT_CODE", new FieldDef("STRING"));
	  this.fields.put("TRANSPTYPE_CODE", new FieldDef("STRING"));
	  this.fields.put("VEHICLE_ID", new FieldDef("NUMBER"));
	  this.fields.put("VEHICLE_REGNO", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
