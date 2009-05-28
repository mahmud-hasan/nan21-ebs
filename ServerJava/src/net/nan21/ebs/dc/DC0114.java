/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0114 DC Controller: Parcel events
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0114 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_DEST_ORG_ID") != null && !this.request.getParam("QRY_DEST_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_ORG_ID like :DEST_ORG_ID");
      this.queryParams.put("DEST_ORG_ID",(String)this.request.getParam("QRY_DEST_ORG_ID"));
    }
    if (this.request.getParam("QRY_DEST_ORG_NAME") != null && !this.request.getParam("QRY_DEST_ORG_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_ORG_NAME like :DEST_ORG_NAME");
      this.queryParams.put("DEST_ORG_NAME",(String)this.request.getParam("QRY_DEST_ORG_NAME"));
    }
    if (this.request.getParam("QRY_EVENTTYP_ID") != null && !this.request.getParam("QRY_EVENTTYP_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EVENTTYP_ID like :EVENTTYP_ID");
      this.queryParams.put("EVENTTYP_ID",(String)this.request.getParam("QRY_EVENTTYP_ID"));
    }
    if (this.request.getParam("QRY_EVENTTYP_NAME") != null && !this.request.getParam("QRY_EVENTTYP_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EVENTTYP_NAME like :EVENTTYP_NAME");
      this.queryParams.put("EVENTTYP_NAME",(String)this.request.getParam("QRY_EVENTTYP_NAME"));
    }
    if (this.request.getParam("QRY_EVENT_DATE") != null && !this.request.getParam("QRY_EVENT_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.EVENT_DATE like :EVENT_DATE");
      this.queryParams.put("EVENT_DATE",(String)this.request.getParam("QRY_EVENT_DATE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_PARCEL_CODE") != null && !this.request.getParam("QRY_PARCEL_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PARCEL_CODE like :PARCEL_CODE");
      this.queryParams.put("PARCEL_CODE",(String)this.request.getParam("QRY_PARCEL_CODE"));
    }
    if (this.request.getParam("QRY_PARCEL_ID") != null && !this.request.getParam("QRY_PARCEL_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.PARCEL_ID like :PARCEL_ID");
      this.queryParams.put("PARCEL_ID",(String)this.request.getParam("QRY_PARCEL_ID"));
    }
    if (this.request.getParam("QRY_SRC_ORG_ID") != null && !this.request.getParam("QRY_SRC_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.SRC_ORG_ID like :SRC_ORG_ID");
      this.queryParams.put("SRC_ORG_ID",(String)this.request.getParam("QRY_SRC_ORG_ID"));
    }
    if (this.request.getParam("QRY_SRC_ORG_NAME") != null && !this.request.getParam("QRY_SRC_ORG_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.SRC_ORG_NAME like :SRC_ORG_NAME");
      this.queryParams.put("SRC_ORG_NAME",(String)this.request.getParam("QRY_SRC_ORG_NAME"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DEST_ORG_ID"+
               " ,t.DEST_ORG_NAME"+
               " ,t.EVENTTYP_ID"+
               " ,t.EVENTTYP_NAME"+
               " ,t.EVENT_DATE"+
               " ,t.ID"+
               " ,t.PARCEL_CODE"+
               " ,t.PARCEL_ID"+
               " ,t.SRC_ORG_ID"+
               " ,t.SRC_ORG_NAME"+
           " from v_parcel_event t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.PARCEL_ID"+
               " ,t.PARCEL_CODE"+
               " ,t.EVENT_DATE"+
               " ,t.EVENTTYP_ID"+
               " ,t.EVENTTYP_NAME"+
               " ,t.SRC_ORG_ID"+
               " ,t.SRC_ORG_NAME"+
               " ,t.DEST_ORG_NAME"+
               " ,t.DEST_ORG_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
           " from v_parcel_event t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate() throws Exception  {}
public void doDelete() throws Exception {}
public void initNewRecord() throws Exception {}
private void findByPk()  throws Exception {
    String sql = "select "+ 
               " t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DEST_ORG_ID"+
               " ,t.DEST_ORG_NAME"+
               " ,t.EVENTTYP_ID"+
               " ,t.EVENTTYP_NAME"+
               " ,t.EVENT_DATE"+
               " ,t.ID"+
               " ,t.PARCEL_CODE"+
               " ,t.PARCEL_ID"+
               " ,t.SRC_ORG_ID"+
               " ,t.SRC_ORG_NAME"+
           " from v_parcel_event t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DEST_ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("DEST_ORG_NAME", new FieldDef("STRING"));
	  this.fields.put("EVENTTYP_ID", new FieldDef("NUMBER"));
	  this.fields.put("EVENTTYP_NAME", new FieldDef("STRING"));
	  this.fields.put("EVENT_DATE", new FieldDef("DATE"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("PARCEL_CODE", new FieldDef("STRING"));
	  this.fields.put("PARCEL_ID", new FieldDef("NUMBER"));
	  this.fields.put("SRC_ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("SRC_ORG_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 40;
	}

}
