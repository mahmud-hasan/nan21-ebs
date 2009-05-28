/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0055 DC Controller: Timesheet - charge project issue
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0055 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    this.queryWhere.append("ts.user_account=user");
    if (this.request.getParam("QRY_CHARGED_DATE") != null && !this.request.getParam("QRY_CHARGED_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.CHARGED_DATE like :CHARGED_DATE");
      this.queryParams.put("CHARGED_DATE",(String)this.request.getParam("QRY_CHARGED_DATE"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_EFFORT") != null && !this.request.getParam("QRY_EFFORT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.EFFORT like :EFFORT");
      this.queryParams.put("EFFORT",(String)this.request.getParam("QRY_EFFORT"));
    }
    if (this.request.getParam("QRY_EFFORT_UNIT") != null && !this.request.getParam("QRY_EFFORT_UNIT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.EFFORT_UNIT like :EFFORT_UNIT");
      this.queryParams.put("EFFORT_UNIT",(String)this.request.getParam("QRY_EFFORT_UNIT"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IS_APPROVED") != null && !this.request.getParam("QRY_IS_APPROVED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.IS_APPROVED like :IS_APPROVED");
      this.queryParams.put("IS_APPROVED",(String)this.request.getParam("QRY_IS_APPROVED"));
    }
    if (this.request.getParam("QRY_IS_INSERTED") != null && !this.request.getParam("QRY_IS_INSERTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.IS_INSERTED like :IS_INSERTED");
      this.queryParams.put("IS_INSERTED",(String)this.request.getParam("QRY_IS_INSERTED"));
    }
    if (this.request.getParam("QRY_PROJECT_ISSUE_ID") != null && !this.request.getParam("QRY_PROJECT_ISSUE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.PROJECT_ISSUE_ID like :PROJECT_ISSUE_ID");
      this.queryParams.put("PROJECT_ISSUE_ID",(String)this.request.getParam("QRY_PROJECT_ISSUE_ID"));
    }
    if (this.request.getParam("QRY_USER_ACCOUNT") != null && !this.request.getParam("QRY_USER_ACCOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ts.USER_ACCOUNT like :USER_ACCOUNT");
      this.queryParams.put("USER_ACCOUNT",(String)this.request.getParam("QRY_USER_ACCOUNT"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ts.CHARGED_DATE"+
               " ,ts.CLIENT_ID"+
               " ,ts.EFFORT"+
               " ,ts.EFFORT_UNIT"+
               " ,ts.ID"+
               " ,ts.IS_APPROVED"+
               " ,ts.IS_INSERTED"+
               " ,ts.PROJECT_ISSUE_ID"+
               " ,ts.USER_ACCOUNT"+
           " from TIMESHEET ts "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ts.ID"+
               " ,ts.PROJECT_ISSUE_ID"+
               " ,ts.CLIENT_ID"+
               " ,ts.USER_ACCOUNT"+
               " ,ts.CHARGED_DATE"+
               " ,ts.EFFORT"+
               " ,ts.EFFORT_UNIT"+
               " ,ts.IS_INSERTED"+
               " ,ts.IS_APPROVED"+
           " from TIMESHEET ts "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into TIMESHEET("+
               "  CHARGED_DATE"+
               " ,CLIENT_ID"+
               " ,EFFORT"+
               " ,EFFORT_UNIT"+
               " ,ID"+
               " ,IS_APPROVED"+
               " ,IS_INSERTED"+
               " ,PROJECT_ISSUE_ID"+
               " ,USER_ACCOUNT"+
           " ) values ( "+
               "  :CHARGED_DATE"+
               " ,:CLIENT_ID"+
               " ,:EFFORT"+
               " ,:EFFORT_UNIT"+
               " ,:ID"+
               " ,:IS_APPROVED"+
               " ,:IS_INSERTED"+
               " ,:PROJECT_ISSUE_ID"+
               " ,:USER_ACCOUNT"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_timesht_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update TIMESHEET set "+
               "  CHARGED_DATE=:CHARGED_DATE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,EFFORT=:EFFORT"+
               " ,EFFORT_UNIT=:EFFORT_UNIT"+
               " ,ID=:ID"+
               " ,IS_APPROVED=:IS_APPROVED"+
               " ,IS_INSERTED=:IS_INSERTED"+
               " ,PROJECT_ISSUE_ID=:PROJECT_ISSUE_ID"+
               " ,USER_ACCOUNT=:USER_ACCOUNT"+
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
   String sql = "delete from TIMESHEET where "+
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
               " ts.CHARGED_DATE"+
               " ,ts.CLIENT_ID"+
               " ,ts.EFFORT"+
               " ,ts.EFFORT_UNIT"+
               " ,ts.ID"+
               " ,ts.IS_APPROVED"+
               " ,ts.IS_INSERTED"+
               " ,ts.PROJECT_ISSUE_ID"+
               " ,ts.USER_ACCOUNT"+
           " from TIMESHEET ts"+
        " where "+
     "      ts.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CHARGED_DATE", new FieldDef("DATE"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("EFFORT", new FieldDef("NUMBER"));
	  this.fields.put("EFFORT_UNIT", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_APPROVED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_INSERTED", new FieldDef("BOOLEAN"));
	  this.fields.put("PROJECT_ISSUE_ID", new FieldDef("NUMBER"));
	  this.fields.put("USER_ACCOUNT", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
