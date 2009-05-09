/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0112 DC Controller: Parcel event types
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0112 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_EVNTGRP_CODE") != null && !this.request.getParam("QRY_EVNTGRP_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EVNTGRP_CODE like :EVNTGRP_CODE");
      this.queryParams.put("EVNTGRP_CODE",(String)this.request.getParam("QRY_EVNTGRP_CODE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE").toUpperCase());
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.EVNTGRP_CODE"+
               " ,t.ID"+
               " ,t.CODE"+
               " ,t.NAME"+
               " ,t.ACTIVE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from TR_PARCEL_EVENT_TYPE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.CODE"+
               " ,t.NAME"+
               " ,t.EVNTGRP_CODE"+
               " ,t.ACTIVE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from TR_PARCEL_EVENT_TYPE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into TR_PARCEL_EVENT_TYPE("+
               "  EVNTGRP_CODE"+
               " ,ID"+
               " ,CODE"+
               " ,NAME"+
               " ,ACTIVE"+
           " ) values ( "+
               "  :EVNTGRP_CODE"+
               " ,:ID"+
               " ,:CODE"+
               " ,:NAME"+
               " ,:ACTIVE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PARCELEVNTTYP_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update TR_PARCEL_EVENT_TYPE set "+
               "  ACTIVE=:ACTIVE"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,EVNTGRP_CODE=:EVNTGRP_CODE"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,NAME=:NAME"+ 
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
   String sql = "delete from TR_PARCEL_EVENT_TYPE where "+
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
               " t.EVNTGRP_CODE"+
               " ,t.ID"+
               " ,t.CODE"+
               " ,t.NAME"+
               " ,t.ACTIVE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from TR_PARCEL_EVENT_TYPE t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("EVNTGRP_CODE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.get("CODE").setCaseRestriction("Upper");
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
