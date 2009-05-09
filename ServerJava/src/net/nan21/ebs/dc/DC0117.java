/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0117 DC Controller: Parcel reception new
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0117 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

public void doQuery() throws Exception {}

public void doExport() throws Exception {}

public void fetchRecord() throws Exception {}

public void doInsert()  throws Exception {
  this.populateRecordFromRequest(); 
  this.populateRecordWithClientSpecific();
    String sql = "insert into TR_PARCEL("+
               "  CLIENT_ID"+
               " ,CODE"+
               " ,CONTENT"+
               " ,DECLARED_VALUE"+
               " ,DEST_ADRESS_NOTE"+
               " ,DEST_BPADRESS"+
               " ,DEST_BPADRESS_ID"+
               " ,DEST_BPARTNER_ID"+
               " ,DEST_CITY"+
               " ,DEST_CITY_ID"+
               " ,DEST_COUNTRY"+
               " ,DEST_NAME"+
               " ,DEST_REGION"+
               " ,DEST_ZIP"+
               " ,EXP_BPADRESS"+
               " ,EXP_BPADRESS_ID"+
               " ,EXP_BPARTNER_ID"+
               " ,EXP_CITY"+
               " ,EXP_CITY_ID"+
               " ,EXP_COUNTRY"+
               " ,EXP_NAME"+
               " ,EXP_REGION"+
               " ,ID"+
               " ,INSURED_VALUE"+
               " ,NOTES"+
               " ,PACKAGE_COUNT"+
               " ,REF_PARCEL_ID"+
               " ,REF_PARCEL_REFERENCE_TYPE"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:CODE"+
               " ,:CONTENT"+
               " ,:DECLARED_VALUE"+
               " ,:DEST_ADRESS_NOTE"+
               " ,:DEST_BPADRESS"+
               " ,:DEST_BPADRESS_ID"+
               " ,:DEST_BPARTNER_ID"+
               " ,:DEST_CITY"+
               " ,:DEST_CITY_ID"+
               " ,:DEST_COUNTRY"+
               " ,:DEST_NAME"+
               " ,:DEST_REGION"+
               " ,:DEST_ZIP"+
               " ,:EXP_BPADRESS"+
               " ,:EXP_BPADRESS_ID"+
               " ,:EXP_BPARTNER_ID"+
               " ,:EXP_CITY"+
               " ,:EXP_CITY_ID"+
               " ,:EXP_COUNTRY"+
               " ,:EXP_NAME"+
               " ,:EXP_REGION"+
               " ,:ID"+
               " ,:INSURED_VALUE"+
               " ,:NOTES"+
               " ,:PACKAGE_COUNT"+
               " ,:REF_PARCEL_ID"+
               " ,:REF_PARCEL_REFERENCE_TYPE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_parcel_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.postInsert();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception  {}
public void doDelete() throws Exception {}
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
               " ,t.CONTENT"+
               " ,t.DECLARED_VALUE"+
               " ,t.DEST_ADRESS_NOTE"+
               " ,t.DEST_BPADRESS"+
               " ,t.DEST_BPADRESS_ID"+
               " ,t.DEST_BPARTNER_ID"+
               " ,t.DEST_CITY"+
               " ,t.DEST_CITY_ID"+
               " ,t.DEST_COUNTRY"+
               " ,t.DEST_NAME"+
               " ,t.DEST_REGION"+
               " ,t.DEST_ZIP"+
               " ,t.EXP_BPADRESS"+
               " ,t.EXP_BPADRESS_ID"+
               " ,t.EXP_BPARTNER_ID"+
               " ,t.EXP_CITY"+
               " ,t.EXP_CITY_ID"+
               " ,t.EXP_COUNTRY"+
               " ,t.EXP_NAME"+
               " ,t.EXP_REGION"+
               " ,t.ID"+
               " ,t.INSURED_VALUE"+
               " ,t.NOTES"+
               " ,t.PACKAGE_COUNT"+
               " ,t.REF_PARCEL_ID"+
               " ,t.REF_PARCEL_REFERENCE_TYPE"+
           " from TR_PARCEL t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 

private void postInsert()  throws Exception {
  this.callProc_doReception(); 

} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    if (pName.equals("doReception")) { this.callProc_doReception(); }
}


private void callProc_doReception() throws Exception {

  String p_raise = "Y"; 
  String p_agent_id = null; 

  Properties inParams = new Properties();
  Properties outParams = new Properties();
   inParams.setProperty("p_event_date", "EVENT_DATE");
   inParams.setProperty("p_warehouse_id", "WAREHOUSE_ORG_ID");
   inParams.setProperty("p_parcel_code", "CODE");
   inParams.setProperty("p_raise", p_raise);
   inParams.setProperty("p_agent_id", p_agent_id);
  String sql = "BEGIN pbo_parcel.reception_new(?,?,?,?,?); END;";
  dbm.executeProcedure(sql, inParams, outParams, this.record);

} 


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("CONTENT", new FieldDef("STRING"));
	  this.fields.put("WAREHOUSE_ORG_ID", new FieldDef("NUMBER"));
	  this.fields.get("WAREHOUSE_ORG_ID").setInDS(false);
	  this.fields.put("WAREHOUSE_ORG_NAME", new FieldDef("STRING"));
	  this.fields.get("WAREHOUSE_ORG_NAME").setInDS(false);
	  this.fields.put("DECLARED_VALUE", new FieldDef("NUMBER"));
	  this.fields.put("DEST_ADRESS_NOTE", new FieldDef("STRING"));
	  this.fields.put("DEST_BPADRESS", new FieldDef("STRING"));
	  this.fields.put("DEST_BPADRESS_ID", new FieldDef("NUMBER"));
	  this.fields.put("DEST_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("DEST_CITY", new FieldDef("STRING"));
	  this.fields.put("DEST_CITY_ID", new FieldDef("NUMBER"));
	  this.fields.put("DEST_COUNTRY", new FieldDef("STRING"));
	  this.fields.put("DEST_NAME", new FieldDef("STRING"));
	  this.fields.put("DEST_REGION", new FieldDef("STRING"));
	  this.fields.put("DEST_ZIP", new FieldDef("STRING"));
	  this.fields.put("EXP_BPADRESS", new FieldDef("STRING"));
	  this.fields.put("EXP_BPADRESS_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXP_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXP_CITY", new FieldDef("STRING"));
	  this.fields.put("EXP_CITY_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXP_COUNTRY", new FieldDef("STRING"));
	  this.fields.put("EXP_NAME", new FieldDef("STRING"));
	  this.fields.put("EXP_REGION", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("INSURED_VALUE", new FieldDef("NUMBER"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PACKAGE_COUNT", new FieldDef("NUMBER"));
	  this.fields.put("REF_PARCEL_ID", new FieldDef("NUMBER"));
	  this.fields.put("REF_PARCEL_REFERENCE_TYPE", new FieldDef("STRING"));
	  this.fields.put("EVENT_DATE", new FieldDef("DATE"));
	  this.fields.get("EVENT_DATE").setInDS(false);
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
