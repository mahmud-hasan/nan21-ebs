/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0019 DC Controller: Tasks
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0019 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLOSED") != null && !this.request.getParam("QRY_CLOSED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CLOSED like :CLOSED");
      this.queryParams.put("CLOSED",(String)this.request.getParam("QRY_CLOSED"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_STATUS") != null && !this.request.getParam("QRY_STATUS").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STATUS like :STATUS");
      this.queryParams.put("STATUS",(String)this.request.getParam("QRY_STATUS"));
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
               " ASSIGNED_TO"+
               " ,CLOSED"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,FINISH_DATE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,NOTES"+
               " ,START_DATE"+
               " ,STATUS"+
               " ,TITLE"+
           " from TASKS  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " TITLE"+
               " ,ASSIGNED_TO"+
               " ,START_DATE"+
               " ,FINISH_DATE"+
               " ,STATUS"+
               " ,CLOSED"+
               " ,NOTES"+
               " ,ID"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from TASKS  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into TASKS("+
               "  ASSIGNED_TO"+
               " ,CLOSED"+
               " ,CREATEDBY"+
               " ,FINISH_DATE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,NOTES"+
               " ,START_DATE"+
               " ,STATUS"+
               " ,TITLE"+
           " ) values ( "+
               "  :ASSIGNED_TO"+
               " ,:CLOSED"+
               " ,:CREATEDBY"+
               " ,:FINISH_DATE"+
               " ,:ID"+
               " ,:MODIFIEDBY"+
               " ,:NOTES"+
               " ,:START_DATE"+
               " ,:STATUS"+
               " ,:TITLE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_task_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update TASKS set "+
               "  ASSIGNED_TO=:ASSIGNED_TO"+
               " ,CLOSED=:CLOSED"+
               " ,FINISH_DATE=:FINISH_DATE"+
               " ,ID=:ID"+
               " ,NOTES=:NOTES"+
               " ,START_DATE=:START_DATE"+
               " ,STATUS=:STATUS"+
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
   String sql = "delete from TASKS where "+
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
               " ASSIGNED_TO"+
               " ,CLOSED"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,FINISH_DATE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,NOTES"+
               " ,START_DATE"+
               " ,STATUS"+
               " ,TITLE"+
           " from TASKS "+
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
	  this.fields.put("ASSIGNED_TO", new FieldDef("STRING"));
	  this.fields.put("CLOSED", new FieldDef("BOOLEAN"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("FINISH_DATE", new FieldDef("DATE"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("START_DATE", new FieldDef("DATE"));
	  this.fields.put("STATUS", new FieldDef("STRING"));
	  this.fields.put("TITLE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
