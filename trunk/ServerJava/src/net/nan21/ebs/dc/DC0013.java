/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0013 DC Controller: Streets
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

public class DC0013 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
    }
    if (this.request.getParam("QRY_CITY_ID") != null && !this.request.getParam("QRY_CITY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CITY_ID like :CITY_ID");
      this.queryParams.put("CITY_ID",(String)this.request.getParam("QRY_CITY_ID"));
    }
    if (this.request.getParam("QRY_COUNTRY_CODE") != null && !this.request.getParam("QRY_COUNTRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("COUNTRY_CODE like :COUNTRY_CODE");
      this.queryParams.put("COUNTRY_CODE",(String)this.request.getParam("QRY_COUNTRY_CODE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_REGION_CODE") != null && !this.request.getParam("QRY_REGION_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("REGION_CODE like :REGION_CODE");
      this.queryParams.put("REGION_CODE",(String)this.request.getParam("QRY_REGION_CODE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ACTIVE"+
               " ,CITY_ID"+
               " ,(select name from city where id=city_id) CITY_NAME"+
               " ,COUNTRY_CODE"+
               " ,ID"+
               " ,NAME"+
               " ,REGION_CODE"+
           " from STREET  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,COUNTRY_CODE"+
               " ,REGION_CODE"+
               ",(select name from city where id=city_id) CITY_NAME"+
               " ,CITY_ID"+
               " ,NAME"+
               " ,ACTIVE"+
           " from STREET  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into STREET("+
               "  ACTIVE"+
               " ,CITY_ID"+
               " ,COUNTRY_CODE"+
               " ,ID"+
               " ,NAME"+
               " ,REGION_CODE"+
           " ) values ( "+
               "  :ACTIVE"+
               " ,:CITY_ID"+
               " ,:COUNTRY_CODE"+
               " ,:ID"+
               " ,:NAME"+
               " ,:REGION_CODE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_STREET_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update STREET set "+
               "  ACTIVE=:ACTIVE"+ 
               " ,CITY_ID=:CITY_ID"+ 
               " ,COUNTRY_CODE=:COUNTRY_CODE"+ 
               " ,ID=:ID"+ 
               " ,NAME=:NAME"+ 
               " ,REGION_CODE=:REGION_CODE"+ 
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
   String sql = "delete from STREET where "+
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
               " ACTIVE"+
               " ,CITY_ID"+
                ",(select name from city where id=city_id) CITY_NAME"+
               " ,COUNTRY_CODE"+
               " ,ID"+
               " ,NAME"+
               " ,REGION_CODE"+
           " from STREET "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  this.fields.put("CITY_ID", new FieldDef("NUMBER"));
	  this.fields.put("CITY_NAME", new FieldDef("STRING"));
	  this.fields.put("COUNTRY_CODE", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.get("MODIFIEDON").setInDS(false);
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("REGION_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
