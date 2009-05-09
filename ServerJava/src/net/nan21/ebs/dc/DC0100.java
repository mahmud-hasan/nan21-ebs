/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0100 DC Controller: BP client list
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0100 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_IS_CUSTOMER") != null && !this.request.getParam("QRY_IS_CUSTOMER").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_CUSTOMER like :IS_CUSTOMER");
      this.queryParams.put("IS_CUSTOMER",(String)this.request.getParam("QRY_IS_CUSTOMER"));
    }
    if (this.request.getParam("QRY_IS_VENDOR") != null && !this.request.getParam("QRY_IS_VENDOR").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_VENDOR like :IS_VENDOR");
      this.queryParams.put("IS_VENDOR",(String)this.request.getParam("QRY_IS_VENDOR"));
    }
    if (this.request.getParam("QRY_IS_EMPLOYEE") != null && !this.request.getParam("QRY_IS_EMPLOYEE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_EMPLOYEE like :IS_EMPLOYEE");
      this.queryParams.put("IS_EMPLOYEE",(String)this.request.getParam("QRY_IS_EMPLOYEE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.BPARTNER_ID"+
               " ,t.CLIENT_ID"+
               " ,t.IS_CUSTOMER"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_VENDOR"+
               " ,t.IS_EMPLOYEE"+
           " from BP_CLIENT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.BPARTNER_ID"+
               " ,t.CLIENT_ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.IS_CUSTOMER"+
               " ,t.IS_VENDOR"+
               " ,t.IS_EMPLOYEE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from BP_CLIENT t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into BP_CLIENT("+
               "  ID"+
               " ,BPARTNER_ID"+
               " ,CLIENT_ID"+
               " ,IS_CUSTOMER"+
               " ,IS_VENDOR"+
               " ,IS_EMPLOYEE"+
           " ) values ( "+
               "  :ID"+
               " ,:BPARTNER_ID"+
               " ,:CLIENT_ID"+
               " ,:IS_CUSTOMER"+
               " ,:IS_VENDOR"+
               " ,:IS_EMPLOYEE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_BPCLIENT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BP_CLIENT set "+
               "  BPARTNER_ID=:BPARTNER_ID"+ 
               " ,CLIENT_ID=:CLIENT_ID"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,ID=:ID"+ 
               " ,IS_CUSTOMER=:IS_CUSTOMER"+ 
               " ,IS_EMPLOYEE=:IS_EMPLOYEE"+ 
               " ,IS_VENDOR=:IS_VENDOR"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
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
   String sql = "delete from BP_CLIENT where "+
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
               " t.ID"+
               " ,t.BPARTNER_ID"+
               " ,t.CLIENT_ID"+
               " ,t.IS_CUSTOMER"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_VENDOR"+
               " ,t.IS_EMPLOYEE"+
           " from BP_CLIENT t"+
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
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_CUSTOMER", new FieldDef("BOOLEAN"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("IS_VENDOR", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_EMPLOYEE", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
