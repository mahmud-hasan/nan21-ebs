/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0082 DC Controller: Organizations hierarchy
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0082 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_COSTCENTER_ID") != null && !this.request.getParam("QRY_COSTCENTER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.COSTCENTER_ID like :COSTCENTER_ID");
      this.queryParams.put("COSTCENTER_ID",(String)this.request.getParam("QRY_COSTCENTER_ID"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_ORG_ID") != null && !this.request.getParam("QRY_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.ORG_ID like :ORG_ID");
      this.queryParams.put("ORG_ID",(String)this.request.getParam("QRY_ORG_ID"));
    }
    if (this.request.getParam("QRY_ORG_TYPE") != null && !this.request.getParam("QRY_ORG_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.ORG_TYPE like :ORG_TYPE");
      this.queryParams.put("ORG_TYPE",(String)this.request.getParam("QRY_ORG_TYPE"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("o.ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pbo_client.get_code_by_id(o.client_id) CLIENT_CODE"+
               " ,o.COSTCENTER_ID"+
               " ,o.ID"+
               " ,o.CLIENT_ID"+
               " ,o.NAME"+
               " ,o.ORG_ID"+
               " ,o.ORG_TYPE"+
               " ,o.BPARTNER_ID"+
               " ,o.COSTMETHOD_CODE"+
               " ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME"+
               " ,o.NOTES"+
               " ,o.ACTIVE"+
               " ,o.CREATEDON"+
               " ,o.CREATEDBY"+
               " ,o.MODIFIEDON"+
               " ,o.MODIFIEDBY"+
           " from ORGANIZATION o "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " o.ID"+
               ",pbo_client.get_code_by_id(o.client_id) CLIENT_CODE"+
               " ,o.CLIENT_ID"+
               " ,o.NAME"+
               " ,o.ORG_TYPE"+
               " ,o.ORG_ID"+
               " ,o.COSTMETHOD_CODE"+
               ",pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME"+
               " ,o.COSTCENTER_ID"+
               " ,o.BPARTNER_ID"+
               " ,o.NOTES"+
               " ,o.ACTIVE"+
               " ,o.CREATEDON"+
               " ,o.CREATEDBY"+
               " ,o.MODIFIEDON"+
               " ,o.MODIFIEDBY"+
           " from ORGANIZATION o "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into ORGANIZATION("+
               "  COSTCENTER_ID"+
               " ,ID"+
               " ,CLIENT_ID"+
               " ,NAME"+
               " ,ORG_ID"+
               " ,ORG_TYPE"+
               " ,BPARTNER_ID"+
               " ,COSTMETHOD_CODE"+
               " ,NOTES"+
               " ,ACTIVE"+
           " ) values ( "+
               "  :COSTCENTER_ID"+
               " ,:ID"+
               " ,:CLIENT_ID"+
               " ,:NAME"+
               " ,:ORG_ID"+
               " ,:ORG_TYPE"+
               " ,:BPARTNER_ID"+
               " ,:COSTMETHOD_CODE"+
               " ,:NOTES"+
               " ,:ACTIVE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_ORG_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update ORGANIZATION set "+
               "  COSTCENTER_ID=:COSTCENTER_ID"+
               " ,ID=:ID"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,NAME=:NAME"+
               " ,ORG_ID=:ORG_ID"+
               " ,ORG_TYPE=:ORG_TYPE"+
               " ,BPARTNER_ID=:BPARTNER_ID"+
               " ,COSTMETHOD_CODE=:COSTMETHOD_CODE"+
               " ,NOTES=:NOTES"+
               " ,ACTIVE=:ACTIVE"+
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
   String sql = "delete from ORGANIZATION where "+
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
                "pbo_client.get_code_by_id(o.client_id) CLIENT_CODE"+
               " ,o.COSTCENTER_ID"+
               " ,o.ID"+
               " ,o.CLIENT_ID"+
               " ,o.NAME"+
               " ,o.ORG_ID"+
               " ,o.ORG_TYPE"+
               " ,o.BPARTNER_ID"+
               " ,o.COSTMETHOD_CODE"+
                ",pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME"+
               " ,o.NOTES"+
               " ,o.ACTIVE"+
               " ,o.CREATEDON"+
               " ,o.CREATEDBY"+
               " ,o.MODIFIEDON"+
               " ,o.MODIFIEDBY"+
           " from ORGANIZATION o"+
        " where "+
     "      o.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("COSTCENTER_ID", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("ORG_TYPE", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("COSTMETHOD_CODE", new FieldDef("STRING"));
	  this.fields.put("COSTCENTER_NAME", new FieldDef("STRING"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
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
