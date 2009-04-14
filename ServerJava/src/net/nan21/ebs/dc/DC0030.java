/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0030 DC Controller: Field default values
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

public class DC0030 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_APPLY_TO_USER") != null && !this.request.getParam("QRY_APPLY_TO_USER").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("APPLY_TO_USER like :APPLY_TO_USER");
      this.queryParams.put("APPLY_TO_USER",(String)this.request.getParam("QRY_APPLY_TO_USER"));
    }
    if (this.request.getParam("QRY_FIELD_NAME") != null && !this.request.getParam("QRY_FIELD_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("FIELD_NAME like :FIELD_NAME");
      this.queryParams.put("FIELD_NAME",(String)this.request.getParam("QRY_FIELD_NAME"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_UIDC_CODE") != null && !this.request.getParam("QRY_UIDC_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UIDC_CODE like :UIDC_CODE");
      this.queryParams.put("UIDC_CODE",(String)this.request.getParam("QRY_UIDC_CODE"));
    }
    if (this.request.getParam("QRY_VALUE_TYPE") != null && !this.request.getParam("QRY_VALUE_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("VALUE_TYPE like :VALUE_TYPE");
      this.queryParams.put("VALUE_TYPE",(String)this.request.getParam("QRY_VALUE_TYPE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ACTIVE"+
               " ,APPLY_TO_USER"+
               " ,CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,FIELD_NAME"+
               " ,FIELD_VALUE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,UIDC_CODE"+
               " ,VALUE_TYPE"+
           " from UI_DC_FIELD_INITVAL  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,UIDC_CODE"+
               " ,FIELD_NAME"+
               " ,VALUE_TYPE"+
               " ,FIELD_VALUE"+
               " ,ACTIVE"+
               " ,APPLY_TO_USER"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CREATEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from UI_DC_FIELD_INITVAL  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into UI_DC_FIELD_INITVAL("+
               "  ACTIVE"+
               " ,APPLY_TO_USER"+
               " ,FIELD_NAME"+
               " ,FIELD_VALUE"+
               " ,ID"+
               " ,UIDC_CODE"+
               " ,VALUE_TYPE"+
           " ) values ( "+
               "  :ACTIVE"+
               " ,:APPLY_TO_USER"+
               " ,:FIELD_NAME"+
               " ,:FIELD_VALUE"+
               " ,:ID"+
               " ,:UIDC_CODE"+
               " ,:VALUE_TYPE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_UIFLDINITVAL_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update UI_DC_FIELD_INITVAL set "+
               "  ID=:ID"+
               " ,UIDC_CODE=:UIDC_CODE"+
               " ,FIELD_NAME=:FIELD_NAME"+
               " ,FIELD_VALUE=:FIELD_VALUE"+
               " ,VALUE_TYPE=:VALUE_TYPE"+
               " ,ACTIVE=:ACTIVE"+
               " ,APPLY_TO_USER=:APPLY_TO_USER"+
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
   String sql = "delete from UI_DC_FIELD_INITVAL where "+
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
               " ,APPLY_TO_USER"+
               " ,CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,FIELD_NAME"+
               " ,FIELD_VALUE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,UIDC_CODE"+
               " ,VALUE_TYPE"+
           " from UI_DC_FIELD_INITVAL "+
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
	  this.fields.put("APPLY_TO_USER", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("FIELD_NAME", new FieldDef("STRING"));
	  this.fields.put("FIELD_VALUE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("UIDC_CODE", new FieldDef("STRING"));
	  this.fields.put("VALUE_TYPE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
