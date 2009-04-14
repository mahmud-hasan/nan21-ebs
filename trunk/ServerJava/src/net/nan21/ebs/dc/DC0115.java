/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0115 DC Controller: Parcel reception existing
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

public class DC0115 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

public void doQuery() throws Exception {}

public void doExport() throws Exception {}

public void fetchRecord() throws Exception {}

public void doInsert()  throws Exception {}

public void doUpdate()  throws Exception {}

public void doDelete() throws Exception {}

public void initNewRecord() throws Exception {
    this.populateRecordFromRequest();
    this.record.put("_p_record_status", "insert");
    this.writeResultInitNewRecord();
}


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
    if (pName.equals("doReception")) { this.callProc_doReception(); }
}


private void callProc_doReception() throws Exception {

  String p_raise = "Y"; 

  Properties inParams = new Properties();
  Properties outParams = new Properties();
   inParams.setProperty("p_parcel_code", "CODE");
   inParams.setProperty("p_agent_id", "AGENT_ORG_ID");
   inParams.setProperty("p_raise", p_raise);
   inParams.setProperty("p_event_date", "EVENT_DATE");
   inParams.setProperty("p_warehouse_id", "WAREHOUSE_ORG_ID");
  String sql = "BEGIN pbo_parcel.reception_existing(p_parcel_code => :p_parcel_code,p_agent_id => :p_agent_id,p_raise => :p_raise,p_event_date => :p_event_date,p_warehouse_id => :p_warehouse_id); END;";
  dbm.executeProcedure(sql, inParams, outParams);

} 


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("AGENT_ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("AGENT_ORG_NAME", new FieldDef("STRING"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("EVENT_DATE", new FieldDef("DATE"));
	  this.fields.put("WAREHOUSE_ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("WAREHOUSE_ORG_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"CODE"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
