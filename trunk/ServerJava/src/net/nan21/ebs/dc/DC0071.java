/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0071 DC Controller: UI DC role permission
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

public class DC0071 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_DELETE_ALLOWED") != null && !this.request.getParam("QRY_DELETE_ALLOWED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("DELETE_ALLOWED like :DELETE_ALLOWED");
      this.queryParams.put("DELETE_ALLOWED",(String)this.request.getParam("QRY_DELETE_ALLOWED"));
    }
    if (this.request.getParam("QRY_FETCH_ALLOWED") != null && !this.request.getParam("QRY_FETCH_ALLOWED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("FETCH_ALLOWED like :FETCH_ALLOWED");
      this.queryParams.put("FETCH_ALLOWED",(String)this.request.getParam("QRY_FETCH_ALLOWED"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_INSERT_ALLOWED") != null && !this.request.getParam("QRY_INSERT_ALLOWED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("INSERT_ALLOWED like :INSERT_ALLOWED");
      this.queryParams.put("INSERT_ALLOWED",(String)this.request.getParam("QRY_INSERT_ALLOWED"));
    }
    if (this.request.getParam("QRY_ROLE_NAME") != null && !this.request.getParam("QRY_ROLE_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ROLE_NAME like :ROLE_NAME");
      this.queryParams.put("ROLE_NAME",(String)this.request.getParam("QRY_ROLE_NAME"));
    }
    if (this.request.getParam("QRY_UI_DC") != null && !this.request.getParam("QRY_UI_DC").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UI_DC like :UI_DC");
      this.queryParams.put("UI_DC",(String)this.request.getParam("QRY_UI_DC"));
    }
    if (this.request.getParam("QRY_UPDATE_ALLOWED") != null && !this.request.getParam("QRY_UPDATE_ALLOWED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UPDATE_ALLOWED like :UPDATE_ALLOWED");
      this.queryParams.put("UPDATE_ALLOWED",(String)this.request.getParam("QRY_UPDATE_ALLOWED"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,DELETE_ALLOWED"+
               " ,FETCH_ALLOWED"+
               " ,ID"+
               " ,INSERT_ALLOWED"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,ROLE_NAME"+
               " ,UI_DC"+
               " ,UPDATE_ALLOWED"+
           " from UI_DC_ROLE_PERMISSION  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,UI_DC"+
               " ,ROLE_NAME"+
               " ,FETCH_ALLOWED"+
               " ,INSERT_ALLOWED"+
               " ,UPDATE_ALLOWED"+
               " ,DELETE_ALLOWED"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CREATEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from UI_DC_ROLE_PERMISSION  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into UI_DC_ROLE_PERMISSION("+
               "  DELETE_ALLOWED"+
               " ,FETCH_ALLOWED"+
               " ,ID"+
               " ,INSERT_ALLOWED"+
               " ,ROLE_NAME"+
               " ,UI_DC"+
               " ,UPDATE_ALLOWED"+
           " ) values ( "+
               "  :DELETE_ALLOWED"+
               " ,:FETCH_ALLOWED"+
               " ,:ID"+
               " ,:INSERT_ALLOWED"+
               " ,:ROLE_NAME"+
               " ,:UI_DC"+
               " ,:UPDATE_ALLOWED"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_UIDCROLEPRMS_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update UI_DC_ROLE_PERMISSION set "+
               "  DELETE_ALLOWED=:DELETE_ALLOWED"+ 
               " ,FETCH_ALLOWED=:FETCH_ALLOWED"+ 
               " ,ID=:ID"+ 
               " ,INSERT_ALLOWED=:INSERT_ALLOWED"+ 
               " ,UPDATE_ALLOWED=:UPDATE_ALLOWED"+ 
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
   String sql = "delete from UI_DC_ROLE_PERMISSION where "+
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
               " CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,DELETE_ALLOWED"+
               " ,FETCH_ALLOWED"+
               " ,ID"+
               " ,INSERT_ALLOWED"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,ROLE_NAME"+
               " ,UI_DC"+
               " ,UPDATE_ALLOWED"+
           " from UI_DC_ROLE_PERMISSION "+
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
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DELETE_ALLOWED", new FieldDef("BOOLEAN"));
	  this.fields.put("FETCH_ALLOWED", new FieldDef("BOOLEAN"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("INSERT_ALLOWED", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("ROLE_NAME", new FieldDef("STRING"));
	  this.fields.put("UI_DC", new FieldDef("STRING"));
	  this.fields.put("UPDATE_ALLOWED", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
