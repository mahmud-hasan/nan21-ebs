/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0015 DC Controller: BP adress
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0015 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_COUNTRY_CODE") != null && !this.request.getParam("QRY_COUNTRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("COUNTRY_CODE like :COUNTRY_CODE");
      this.queryParams.put("COUNTRY_CODE",(String)this.request.getParam("QRY_COUNTRY_CODE"));
    }
    if (this.request.getParam("QRY_REGION_CODE") != null && !this.request.getParam("QRY_REGION_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("REGION_CODE like :REGION_CODE");
      this.queryParams.put("REGION_CODE",(String)this.request.getParam("QRY_REGION_CODE"));
    }
    if (this.request.getParam("QRY_CITY") != null && !this.request.getParam("QRY_CITY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CITY like :CITY");
      this.queryParams.put("CITY",(String)this.request.getParam("QRY_CITY"));
    }
    if (this.request.getParam("QRY_CITY_ID") != null && !this.request.getParam("QRY_CITY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CITY_ID like :CITY_ID");
      this.queryParams.put("CITY_ID",(String)this.request.getParam("QRY_CITY_ID"));
    }
    if (this.request.getParam("QRY_STREET") != null && !this.request.getParam("QRY_STREET").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STREET like :STREET");
      this.queryParams.put("STREET",(String)this.request.getParam("QRY_STREET"));
    }
    if (this.request.getParam("QRY_STREET_ID") != null && !this.request.getParam("QRY_STREET_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STREET_ID like :STREET_ID");
      this.queryParams.put("STREET_ID",(String)this.request.getParam("QRY_STREET_ID"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_ENTRANCE") != null && !this.request.getParam("QRY_ENTRANCE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ENTRANCE like :ENTRANCE");
      this.queryParams.put("ENTRANCE",(String)this.request.getParam("QRY_ENTRANCE"));
    }
    if (this.request.getParam("QRY_IS_BILLING") != null && !this.request.getParam("QRY_IS_BILLING").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_BILLING like :IS_BILLING");
      this.queryParams.put("IS_BILLING",(String)this.request.getParam("QRY_IS_BILLING"));
    }
    if (this.request.getParam("QRY_IS_DELIVERY") != null && !this.request.getParam("QRY_IS_DELIVERY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_DELIVERY like :IS_DELIVERY");
      this.queryParams.put("IS_DELIVERY",(String)this.request.getParam("QRY_IS_DELIVERY"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_ZIP") != null && !this.request.getParam("QRY_ZIP").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ZIP like :ZIP");
      this.queryParams.put("ZIP",(String)this.request.getParam("QRY_ZIP"));
    }
    if (this.request.getParam("QRY_ADRESS") != null && !this.request.getParam("QRY_ADRESS").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ADRESS like :ADRESS");
      this.queryParams.put("ADRESS",(String)this.request.getParam("QRY_ADRESS"));
    }
    if (this.request.getParam("QRY_IS_DETAILED") != null && !this.request.getParam("QRY_IS_DETAILED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("IS_DETAILED like :IS_DETAILED");
      this.queryParams.put("IS_DETAILED",(String)this.request.getParam("QRY_IS_DETAILED"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,BPARTNER_ID"+
               " ,COUNTRY_CODE"+
               " ,REGION_CODE"+
               " ,CITY"+
               " ,CITY_ID"+
               " ,STREET"+
               " ,STREET_ID"+
               " ,NOTES"+
               " ,ENTRANCE"+
               " ,IS_BILLING"+
               " ,IS_DELIVERY"+
               " ,NAME"+
               " ,ZIP"+
               " ,ADRESS"+
               " ,IS_DETAILED"+
           " from BP_ADRESS  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,BPARTNER_ID"+
               " ,NAME"+
               " ,COUNTRY_CODE"+
               " ,REGION_CODE"+
               " ,CITY"+
               " ,CITY_ID"+
               " ,IS_DETAILED"+
               " ,ADRESS"+
               " ,ZIP"+
               " ,STREET_ID"+
               " ,STREET"+
               " ,ENTRANCE"+
               " ,IS_BILLING"+
               " ,IS_DELIVERY"+
               " ,NOTES"+
           " from BP_ADRESS  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into BP_ADRESS("+
               "  ID"+
               " ,BPARTNER_ID"+
               " ,COUNTRY_CODE"+
               " ,REGION_CODE"+
               " ,CITY"+
               " ,CITY_ID"+
               " ,STREET"+
               " ,STREET_ID"+
               " ,NOTES"+
               " ,ENTRANCE"+
               " ,IS_BILLING"+
               " ,IS_DELIVERY"+
               " ,NAME"+
               " ,ZIP"+
               " ,ADRESS"+
               " ,IS_DETAILED"+
           " ) values ( "+
               "  :ID"+
               " ,:BPARTNER_ID"+
               " ,:COUNTRY_CODE"+
               " ,:REGION_CODE"+
               " ,:CITY"+
               " ,:CITY_ID"+
               " ,:STREET"+
               " ,:STREET_ID"+
               " ,:NOTES"+
               " ,:ENTRANCE"+
               " ,:IS_BILLING"+
               " ,:IS_DELIVERY"+
               " ,:NAME"+
               " ,:ZIP"+
               " ,:ADRESS"+
               " ,:IS_DETAILED"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_BPADR_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BP_ADRESS set "+
               "  ADRESS=:ADRESS"+ 
               " ,BPARTNER_ID=:BPARTNER_ID"+ 
               " ,CITY=:CITY"+ 
               " ,CITY_ID=:CITY_ID"+ 
               " ,COUNTRY_CODE=:COUNTRY_CODE"+ 
               " ,ENTRANCE=:ENTRANCE"+ 
               " ,ID=:ID"+ 
               " ,IS_BILLING=:IS_BILLING"+ 
               " ,IS_DELIVERY=:IS_DELIVERY"+ 
               " ,IS_DETAILED=:IS_DETAILED"+ 
               " ,NAME=:NAME"+ 
               " ,NOTES=:NOTES"+ 
               " ,REGION_CODE=:REGION_CODE"+ 
               " ,STREET=:STREET"+ 
               " ,STREET_ID=:STREET_ID"+ 
               " ,ZIP=:ZIP"+ 
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
   String sql = "delete from BP_ADRESS where "+
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
               " ID"+
               " ,BPARTNER_ID"+
               " ,COUNTRY_CODE"+
               " ,REGION_CODE"+
               " ,CITY"+
               " ,CITY_ID"+
               " ,STREET"+
               " ,STREET_ID"+
               " ,NOTES"+
               " ,ENTRANCE"+
               " ,IS_BILLING"+
               " ,IS_DELIVERY"+
               " ,NAME"+
               " ,ZIP"+
               " ,ADRESS"+
               " ,IS_DETAILED"+
           " from BP_ADRESS "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("COUNTRY_CODE", new FieldDef("STRING"));
	  this.fields.put("REGION_CODE", new FieldDef("STRING"));
	  this.fields.put("CITY", new FieldDef("STRING"));
	  this.fields.put("CITY_ID", new FieldDef("NUMBER"));
	  this.fields.put("STREET", new FieldDef("STRING"));
	  this.fields.put("STREET_ID", new FieldDef("NUMBER"));
	  this.fields.put("NO", new FieldDef("STRING"));
	  this.fields.get("NO").setInDS(false);
	  this.fields.put("BUILDING", new FieldDef("STRING"));
	  this.fields.get("BUILDING").setInDS(false);
	  this.fields.put("FLOOR", new FieldDef("STRING"));
	  this.fields.get("FLOOR").setInDS(false);
	  this.fields.put("APT", new FieldDef("STRING"));
	  this.fields.get("APT").setInDS(false);
	  this.fields.put("ADRESS_TYPE", new FieldDef("STRING"));
	  this.fields.get("ADRESS_TYPE").setInDS(false);
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("ENTRANCE", new FieldDef("STRING"));
	  this.fields.put("IS_BILLING", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_DELIVERY", new FieldDef("BOOLEAN"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.get("MODIFIEDON").setInDS(false);
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  this.fields.put("ZIP", new FieldDef("STRING"));
	  this.fields.put("ADRESS", new FieldDef("STRING"));
	  this.fields.put("IS_DETAILED", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
