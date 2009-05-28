/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0045 DC Controller: Projects
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0045 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
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
    if (this.request.getParam("QRY_STATUS_CODE") != null && !this.request.getParam("QRY_STATUS_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("STATUS_CODE like :STATUS_CODE");
      this.queryParams.put("STATUS_CODE",(String)this.request.getParam("QRY_STATUS_CODE"));
    }
    if (this.request.getParam("QRY_TYPE_CODE") != null && !this.request.getParam("QRY_TYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("TYPE_CODE like :TYPE_CODE");
      this.queryParams.put("TYPE_CODE",(String)this.request.getParam("QRY_TYPE_CODE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " CLIENT_ID"+
               " ,(select code from client where id = client_id) CLIENT_NAME"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,NAME"+
               " ,STATUS_CODE"+
               " ,TYPE_CODE"+
           " from PROJECT  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               ",(select code from client where id = client_id) CLIENT_NAME"+
               " ,CLIENT_ID"+
               " ,NAME"+
               " ,TYPE_CODE"+
               " ,STATUS_CODE"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from PROJECT  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into PROJECT("+
               "  CLIENT_ID"+
               " ,ID"+
               " ,NAME"+
               " ,STATUS_CODE"+
               " ,TYPE_CODE"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:ID"+
               " ,:NAME"+
               " ,:STATUS_CODE"+
               " ,:TYPE_CODE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_project_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PROJECT set "+
               "  CLIENT_ID=:CLIENT_ID"+
               " ,ID=:ID"+
               " ,NAME=:NAME"+
               " ,STATUS_CODE=:STATUS_CODE"+
               " ,TYPE_CODE=:TYPE_CODE"+
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
   String sql = "delete from PROJECT where "+
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
               " CLIENT_ID"+
                ",(select code from client where id = client_id) CLIENT_NAME"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,MODIFIEDON"+
               " ,NAME"+
               " ,STATUS_CODE"+
               " ,TYPE_CODE"+
           " from PROJECT "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_NAME", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("STATUS_CODE", new FieldDef("STRING"));
	  this.fields.put("TYPE_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
