/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0016 DC Controller: Parcel masterdata
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

public class DC0016 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_CUSTODY_ORG_ID") != null && !this.request.getParam("QRY_CUSTODY_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CUSTODY_ORG_ID like :CUSTODY_ORG_ID");
      this.queryParams.put("CUSTODY_ORG_ID",(String)this.request.getParam("QRY_CUSTODY_ORG_ID"));
    }
    if (this.request.getParam("QRY_DELIVERED") != null && !this.request.getParam("QRY_DELIVERED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DELIVERED like :DELIVERED");
      this.queryParams.put("DELIVERED",(String)this.request.getParam("QRY_DELIVERED"));
    }
    if (this.request.getParam("QRY_DELIVERY_AGENT_ID") != null && !this.request.getParam("QRY_DELIVERY_AGENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DELIVERY_AGENT_ID like :DELIVERY_AGENT_ID");
      this.queryParams.put("DELIVERY_AGENT_ID",(String)this.request.getParam("QRY_DELIVERY_AGENT_ID"));
    }
    if (this.request.getParam("QRY_DEST_BPADRESS_ID") != null && !this.request.getParam("QRY_DEST_BPADRESS_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_BPADRESS_ID like :DEST_BPADRESS_ID");
      this.queryParams.put("DEST_BPADRESS_ID",(String)this.request.getParam("QRY_DEST_BPADRESS_ID"));
    }
    if (this.request.getParam("QRY_DEST_BPARTNER_ID") != null && !this.request.getParam("QRY_DEST_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_BPARTNER_ID like :DEST_BPARTNER_ID");
      this.queryParams.put("DEST_BPARTNER_ID",(String)this.request.getParam("QRY_DEST_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_DEST_CITY_ID") != null && !this.request.getParam("QRY_DEST_CITY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_CITY_ID like :DEST_CITY_ID");
      this.queryParams.put("DEST_CITY_ID",(String)this.request.getParam("QRY_DEST_CITY_ID"));
    }
    if (this.request.getParam("QRY_DEST_NAME") != null && !this.request.getParam("QRY_DEST_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_NAME like :DEST_NAME");
      this.queryParams.put("DEST_NAME",(String)this.request.getParam("QRY_DEST_NAME"));
    }
    if (this.request.getParam("QRY_EXP_BPADRESS_ID") != null && !this.request.getParam("QRY_EXP_BPADRESS_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EXP_BPADRESS_ID like :EXP_BPADRESS_ID");
      this.queryParams.put("EXP_BPADRESS_ID",(String)this.request.getParam("QRY_EXP_BPADRESS_ID"));
    }
    if (this.request.getParam("QRY_EXP_BPARTNER_ID") != null && !this.request.getParam("QRY_EXP_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EXP_BPARTNER_ID like :EXP_BPARTNER_ID");
      this.queryParams.put("EXP_BPARTNER_ID",(String)this.request.getParam("QRY_EXP_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_EXP_CITY_ID") != null && !this.request.getParam("QRY_EXP_CITY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EXP_CITY_ID like :EXP_CITY_ID");
      this.queryParams.put("EXP_CITY_ID",(String)this.request.getParam("QRY_EXP_CITY_ID"));
    }
    if (this.request.getParam("QRY_EXP_NAME") != null && !this.request.getParam("QRY_EXP_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EXP_NAME like :EXP_NAME");
      this.queryParams.put("EXP_NAME",(String)this.request.getParam("QRY_EXP_NAME"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_LAST_EVENT_ID") != null && !this.request.getParam("QRY_LAST_EVENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.LAST_EVENT_ID like :LAST_EVENT_ID");
      this.queryParams.put("LAST_EVENT_ID",(String)this.request.getParam("QRY_LAST_EVENT_ID"));
    }
    if (this.request.getParam("QRY_PICKUP_AGENT_ID") != null && !this.request.getParam("QRY_PICKUP_AGENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PICKUP_AGENT_ID like :PICKUP_AGENT_ID");
      this.queryParams.put("PICKUP_AGENT_ID",(String)this.request.getParam("QRY_PICKUP_AGENT_ID"));
    }
    if (this.request.getParam("QRY_REJECTED") != null && !this.request.getParam("QRY_REJECTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.REJECTED like :REJECTED");
      this.queryParams.put("REJECTED",(String)this.request.getParam("QRY_REJECTED"));
    }
    if (this.request.getParam("QRY_REJECT_REASON_CODE") != null && !this.request.getParam("QRY_REJECT_REASON_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.REJECT_REASON_CODE like :REJECT_REASON_CODE");
      this.queryParams.put("REJECT_REASON_CODE",(String)this.request.getParam("QRY_REJECT_REASON_CODE").toUpperCase());
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
               " ,t.CONTENT"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CUSTODY_ORG_ID"+
               " ,pbo_org.get_name_by_id(t.CUSTODY_ORG_ID) CUSTODY_ORG_NAME"+
               " ,t.DECLARED_VALUE"+
               " ,t.DELIVERED"+
               " ,t.DELIVERED_TO_IDENT"+
               " ,t.DELIVERED_TO_NAME"+
               " ,t.DELIVERY_AGENT_ID"+
               " ,pbo_org.get_name_by_id(t.DELIVERY_AGENT_ID) DELIVERY_AGENT_NAME"+
               " ,to_char(t.DELIVERY_DATE,'"+this.DATE_FORMAT_DB+"') DELIVERY_DATE"+
               " ,t.DELIVERY_MODE"+
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
               " ,t.EXP_ADRESS_NOTE"+
               " ,t.EXP_BPADRESS"+
               " ,t.EXP_BPADRESS_ID"+
               " ,t.EXP_BPARTNER_ID"+
               " ,t.EXP_CITY"+
               " ,t.EXP_CITY_ID"+
               " ,t.EXP_COUNTRY"+
               " ,t.EXP_NAME"+
               " ,t.EXP_REGION"+
               " ,t.EXP_ZIP"+
               " ,t.ID"+
               " ,t.INSURED_VALUE"+
               " ,t.LAST_EVENT_ID"+
               " ,pbo_parcel.get_evnttyp_name_by_evntid(t.LAST_EVENT_ID) LAST_EVENT_NAME"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.PACKAGE_COUNT"+
               " ,t.PICKEDUP"+
               " ,t.PICKUP_AGENT_ID"+
               " ,pbo_org.get_name_by_id(t.PICKUP_AGENT_ID) PICKUP_AGENT_NAME"+
               " ,to_char(t.PICKUP_DATE,'"+this.DATE_FORMAT_DB+"') PICKUP_DATE"+
               " ,t.PICKUP_MODE"+
               " ,t.REF_PARCEL_ID"+
               " ,t.REF_PARCEL_REFERENCE_TYPE"+
               " ,t.REJECTED"+
               " ,t.REJECTED_BY_IDENT"+
               " ,t.REJECTED_BY_NAME"+
               " ,to_char(t.REJECT_DATE,'"+this.DATE_FORMAT_DB+"') REJECT_DATE"+
               " ,t.REJECT_REASON"+
               " ,t.REJECT_REASON_CODE"+
           " from TR_PARCEL t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CODE"+
               " ,t.EXP_BPADRESS_ID"+
               " ,t.EXP_CITY_ID"+
               " ,t.EXP_BPARTNER_ID"+
               " ,t.EXP_NAME"+
               " ,t.EXP_COUNTRY"+
               " ,t.EXP_REGION"+
               " ,t.EXP_CITY"+
               " ,t.EXP_BPADRESS"+
               " ,t.EXP_ZIP"+
               " ,t.EXP_ADRESS_NOTE"+
               " ,t.DEST_BPADRESS_ID"+
               " ,t.DEST_CITY_ID"+
               " ,t.DEST_BPARTNER_ID"+
               " ,t.DEST_NAME"+
               " ,t.DEST_COUNTRY"+
               " ,t.DEST_REGION"+
               " ,t.DEST_CITY"+
               " ,t.DEST_BPADRESS"+
               " ,t.DEST_ZIP"+
               " ,t.DEST_ADRESS_NOTE"+
               " ,t.PICKEDUP"+
               " ,t.PICKUP_MODE"+
               " ,to_char(t.PICKUP_DATE,'"+this.DATE_FORMAT_DB+"') PICKUP_DATE"+
               " ,t.PICKUP_AGENT_ID"+
               ",pbo_org.get_name_by_id(t.PICKUP_AGENT_ID) PICKUP_AGENT_NAME"+
               " ,t.DELIVERED"+
               " ,t.DELIVERY_MODE"+
               " ,to_char(t.DELIVERY_DATE,'"+this.DATE_FORMAT_DB+"') DELIVERY_DATE"+
               " ,t.DELIVERY_AGENT_ID"+
               ",pbo_org.get_name_by_id(t.DELIVERY_AGENT_ID) DELIVERY_AGENT_NAME"+
               " ,t.DELIVERED_TO_NAME"+
               " ,t.DELIVERED_TO_IDENT"+
               " ,t.REJECTED"+
               " ,to_char(t.REJECT_DATE,'"+this.DATE_FORMAT_DB+"') REJECT_DATE"+
               " ,t.REJECT_REASON"+
               " ,t.REJECTED_BY_NAME"+
               " ,t.REJECTED_BY_IDENT"+
               " ,t.PACKAGE_COUNT"+
               " ,t.CONTENT"+
               " ,t.NOTES"+
               " ,t.DECLARED_VALUE"+
               " ,t.INSURED_VALUE"+
               " ,t.REF_PARCEL_ID"+
               " ,t.REF_PARCEL_REFERENCE_TYPE"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CREATEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               ",pbo_org.get_name_by_id(t.CUSTODY_ORG_ID) CUSTODY_ORG_NAME"+
               " ,t.CUSTODY_ORG_ID"+
               " ,t.LAST_EVENT_ID"+
               ",pbo_parcel.get_evnttyp_name_by_evntid(t.LAST_EVENT_ID) LAST_EVENT_NAME"+
               " ,t.REJECT_REASON_CODE"+
           " from TR_PARCEL t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into TR_PARCEL("+
               "  CLIENT_ID"+
               " ,CODE"+
               " ,CONTENT"+
               " ,CREATEDBY"+
               " ,CUSTODY_ORG_ID"+
               " ,DECLARED_VALUE"+
               " ,DELIVERED"+
               " ,DELIVERED_TO_IDENT"+
               " ,DELIVERED_TO_NAME"+
               " ,DELIVERY_AGENT_ID"+
               " ,DELIVERY_DATE"+
               " ,DELIVERY_MODE"+
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
               " ,EXP_ADRESS_NOTE"+
               " ,EXP_BPADRESS"+
               " ,EXP_BPADRESS_ID"+
               " ,EXP_BPARTNER_ID"+
               " ,EXP_CITY"+
               " ,EXP_CITY_ID"+
               " ,EXP_COUNTRY"+
               " ,EXP_NAME"+
               " ,EXP_REGION"+
               " ,EXP_ZIP"+
               " ,ID"+
               " ,INSURED_VALUE"+
               " ,LAST_EVENT_ID"+
               " ,MODIFIEDBY"+
               " ,NOTES"+
               " ,PACKAGE_COUNT"+
               " ,PICKEDUP"+
               " ,PICKUP_AGENT_ID"+
               " ,PICKUP_DATE"+
               " ,PICKUP_MODE"+
               " ,REF_PARCEL_ID"+
               " ,REF_PARCEL_REFERENCE_TYPE"+
               " ,REJECTED"+
               " ,REJECTED_BY_IDENT"+
               " ,REJECTED_BY_NAME"+
               " ,REJECT_DATE"+
               " ,REJECT_REASON"+
               " ,REJECT_REASON_CODE"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:CODE"+
               " ,:CONTENT"+
               " ,:CREATEDBY"+
               " ,:CUSTODY_ORG_ID"+
               " ,:DECLARED_VALUE"+
               " ,:DELIVERED"+
               " ,:DELIVERED_TO_IDENT"+
               " ,:DELIVERED_TO_NAME"+
               " ,:DELIVERY_AGENT_ID"+
               " ,:DELIVERY_DATE"+
               " ,:DELIVERY_MODE"+
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
               " ,:EXP_ADRESS_NOTE"+
               " ,:EXP_BPADRESS"+
               " ,:EXP_BPADRESS_ID"+
               " ,:EXP_BPARTNER_ID"+
               " ,:EXP_CITY"+
               " ,:EXP_CITY_ID"+
               " ,:EXP_COUNTRY"+
               " ,:EXP_NAME"+
               " ,:EXP_REGION"+
               " ,:EXP_ZIP"+
               " ,:ID"+
               " ,:INSURED_VALUE"+
               " ,:LAST_EVENT_ID"+
               " ,:MODIFIEDBY"+
               " ,:NOTES"+
               " ,:PACKAGE_COUNT"+
               " ,:PICKEDUP"+
               " ,:PICKUP_AGENT_ID"+
               " ,:PICKUP_DATE"+
               " ,:PICKUP_MODE"+
               " ,:REF_PARCEL_ID"+
               " ,:REF_PARCEL_REFERENCE_TYPE"+
               " ,:REJECTED"+
               " ,:REJECTED_BY_IDENT"+
               " ,:REJECTED_BY_NAME"+
               " ,:REJECT_DATE"+
               " ,:REJECT_REASON"+
               " ,:REJECT_REASON_CODE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_parcel_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update TR_PARCEL set "+
               "  ID=:ID"+
               " ,CODE=:CODE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,EXP_BPARTNER_ID=:EXP_BPARTNER_ID"+
               " ,EXP_NAME=:EXP_NAME"+
               " ,EXP_BPADRESS_ID=:EXP_BPADRESS_ID"+
               " ,EXP_BPADRESS=:EXP_BPADRESS"+
               " ,EXP_COUNTRY=:EXP_COUNTRY"+
               " ,EXP_REGION=:EXP_REGION"+
               " ,EXP_CITY=:EXP_CITY"+
               " ,EXP_CITY_ID=:EXP_CITY_ID"+
               " ,EXP_ZIP=:EXP_ZIP"+
               " ,EXP_ADRESS_NOTE=:EXP_ADRESS_NOTE"+
               " ,DEST_BPARTNER_ID=:DEST_BPARTNER_ID"+
               " ,DEST_NAME=:DEST_NAME"+
               " ,DEST_BPADRESS_ID=:DEST_BPADRESS_ID"+
               " ,DEST_BPADRESS=:DEST_BPADRESS"+
               " ,DEST_COUNTRY=:DEST_COUNTRY"+
               " ,DEST_REGION=:DEST_REGION"+
               " ,DEST_CITY=:DEST_CITY"+
               " ,DEST_CITY_ID=:DEST_CITY_ID"+
               " ,DEST_ZIP=:DEST_ZIP"+
               " ,DEST_ADRESS_NOTE=:DEST_ADRESS_NOTE"+
               " ,PICKEDUP=:PICKEDUP"+
               " ,PICKUP_MODE=:PICKUP_MODE"+
               " ,PICKUP_DATE=:PICKUP_DATE"+
               " ,DELIVERED=:DELIVERED"+
               " ,DELIVERY_MODE=:DELIVERY_MODE"+
               " ,DELIVERY_DATE=:DELIVERY_DATE"+
               " ,DELIVERED_TO_NAME=:DELIVERED_TO_NAME"+
               " ,DELIVERED_TO_IDENT=:DELIVERED_TO_IDENT"+
               " ,REJECTED=:REJECTED"+
               " ,REJECT_DATE=:REJECT_DATE"+
               " ,REJECT_REASON=:REJECT_REASON"+
               " ,REJECTED_BY_NAME=:REJECTED_BY_NAME"+
               " ,REJECTED_BY_IDENT=:REJECTED_BY_IDENT"+
               " ,PACKAGE_COUNT=:PACKAGE_COUNT"+
               " ,CONTENT=:CONTENT"+
               " ,NOTES=:NOTES"+
               " ,DECLARED_VALUE=:DECLARED_VALUE"+
               " ,INSURED_VALUE=:INSURED_VALUE"+
               " ,REF_PARCEL_ID=:REF_PARCEL_ID"+
               " ,REF_PARCEL_REFERENCE_TYPE=:REF_PARCEL_REFERENCE_TYPE"+
               " ,REJECT_REASON_CODE=:REJECT_REASON_CODE"+
               " ,PICKUP_AGENT_ID=:PICKUP_AGENT_ID"+
               " ,DELIVERY_AGENT_ID=:DELIVERY_AGENT_ID"+
               " ,CUSTODY_ORG_ID=:CUSTODY_ORG_ID"+
               " ,LAST_EVENT_ID=:LAST_EVENT_ID"+
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
   String sql = "delete from TR_PARCEL where "+
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
               " ,t.CONTENT"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CUSTODY_ORG_ID"+
                ",pbo_org.get_name_by_id(t.CUSTODY_ORG_ID) CUSTODY_ORG_NAME"+
               " ,t.DECLARED_VALUE"+
               " ,t.DELIVERED"+
               " ,t.DELIVERED_TO_IDENT"+
               " ,t.DELIVERED_TO_NAME"+
               " ,t.DELIVERY_AGENT_ID"+
                ",pbo_org.get_name_by_id(t.DELIVERY_AGENT_ID) DELIVERY_AGENT_NAME"+
               " ,to_char(t.DELIVERY_DATE,'"+this.DATE_FORMAT_DB+"') DELIVERY_DATE"+
               " ,t.DELIVERY_MODE"+
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
               " ,t.EXP_ADRESS_NOTE"+
               " ,t.EXP_BPADRESS"+
               " ,t.EXP_BPADRESS_ID"+
               " ,t.EXP_BPARTNER_ID"+
               " ,t.EXP_CITY"+
               " ,t.EXP_CITY_ID"+
               " ,t.EXP_COUNTRY"+
               " ,t.EXP_NAME"+
               " ,t.EXP_REGION"+
               " ,t.EXP_ZIP"+
               " ,t.ID"+
               " ,t.INSURED_VALUE"+
               " ,t.LAST_EVENT_ID"+
                ",pbo_parcel.get_evnttyp_name_by_evntid(t.LAST_EVENT_ID) LAST_EVENT_NAME"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.PACKAGE_COUNT"+
               " ,t.PICKEDUP"+
               " ,t.PICKUP_AGENT_ID"+
                ",pbo_org.get_name_by_id(t.PICKUP_AGENT_ID) PICKUP_AGENT_NAME"+
               " ,to_char(t.PICKUP_DATE,'"+this.DATE_FORMAT_DB+"') PICKUP_DATE"+
               " ,t.PICKUP_MODE"+
               " ,t.REF_PARCEL_ID"+
               " ,t.REF_PARCEL_REFERENCE_TYPE"+
               " ,t.REJECTED"+
               " ,t.REJECTED_BY_IDENT"+
               " ,t.REJECTED_BY_NAME"+
               " ,to_char(t.REJECT_DATE,'"+this.DATE_FORMAT_DB+"') REJECT_DATE"+
               " ,t.REJECT_REASON"+
               " ,t.REJECT_REASON_CODE"+
           " from TR_PARCEL t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("CONTENT", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CUSTODY_ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("CUSTODY_ORG_NAME", new FieldDef("STRING"));
	  this.fields.put("DECLARED_VALUE", new FieldDef("NUMBER"));
	  this.fields.put("DELIVERED", new FieldDef("BOOLEAN"));
	  this.fields.put("DELIVERED_TO_IDENT", new FieldDef("STRING"));
	  this.fields.put("DELIVERED_TO_NAME", new FieldDef("STRING"));
	  this.fields.put("DELIVERY_AGENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("DELIVERY_AGENT_NAME", new FieldDef("STRING"));
	  this.fields.put("DELIVERY_DATE", new FieldDef("DATE"));
	  this.fields.put("DELIVERY_MODE", new FieldDef("STRING"));
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
	  this.fields.put("EXP_ADRESS_NOTE", new FieldDef("STRING"));
	  this.fields.put("EXP_BPADRESS", new FieldDef("STRING"));
	  this.fields.put("EXP_BPADRESS_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXP_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXP_CITY", new FieldDef("STRING"));
	  this.fields.put("EXP_CITY_ID", new FieldDef("NUMBER"));
	  this.fields.put("EXP_COUNTRY", new FieldDef("STRING"));
	  this.fields.put("EXP_NAME", new FieldDef("STRING"));
	  this.fields.put("EXP_REGION", new FieldDef("STRING"));
	  this.fields.put("EXP_ZIP", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("INSURED_VALUE", new FieldDef("NUMBER"));
	  this.fields.put("LAST_EVENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("LAST_EVENT_NAME", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PACKAGE_COUNT", new FieldDef("NUMBER"));
	  this.fields.put("PICKEDUP", new FieldDef("BOOLEAN"));
	  this.fields.put("PICKUP_AGENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("PICKUP_AGENT_NAME", new FieldDef("STRING"));
	  this.fields.put("PICKUP_DATE", new FieldDef("DATE"));
	  this.fields.put("PICKUP_MODE", new FieldDef("STRING"));
	  this.fields.put("REF_PARCEL_ID", new FieldDef("NUMBER"));
	  this.fields.put("REF_PARCEL_REFERENCE_TYPE", new FieldDef("STRING"));
	  this.fields.put("REJECTED", new FieldDef("BOOLEAN"));
	  this.fields.put("REJECTED_BY_IDENT", new FieldDef("STRING"));
	  this.fields.put("REJECTED_BY_NAME", new FieldDef("STRING"));
	  this.fields.put("REJECT_DATE", new FieldDef("DATE"));
	  this.fields.put("REJECT_REASON", new FieldDef("STRING"));
	  this.fields.put("REJECT_REASON_CODE", new FieldDef("STRING"));
	  this.fields.get("REJECT_REASON_CODE").setCaseRestriction("Upper");
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
