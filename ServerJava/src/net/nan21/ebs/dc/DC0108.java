/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0108 DC Controller: Parcel confirm delivery
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0108 extends AbstractDataControl implements IDataControl {

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


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    if (pName.equals("markDelivered")) { this.callProc_markDelivered(); }
}


private void callProc_markDelivered() throws Exception {

  String p_raise = "Y"; 

  Properties inParams = new Properties();
  Properties outParams = new Properties();
   inParams.setProperty("p_event_date", "EVENT_DATE");
   inParams.setProperty("p_parcel_code", "CODE");
   inParams.setProperty("p_raise", p_raise);
   inParams.setProperty("p_agent_id", "ORG_ID");
  String sql = "BEGIN pbo_parcel.mark_delivered(?,?,?,?); END;";
  dbm.executeProcedure(sql, inParams, outParams, this.record);

} 


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("EVENT_DATE", new FieldDef("DATE"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("ORG", new FieldDef("STRING"));
	  this.fields.put("ORG_ID", new FieldDef("NUMBER"));
	  String[] _pkFields = {"CODE"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
