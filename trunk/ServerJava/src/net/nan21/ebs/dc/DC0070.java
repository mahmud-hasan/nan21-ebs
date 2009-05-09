/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0070 DC Controller: Menu item roles
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0070 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("mir.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_MENUITEM_ID") != null && !this.request.getParam("QRY_MENUITEM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("mir.MENUITEM_ID like :MENUITEM_ID");
      this.queryParams.put("MENUITEM_ID",(String)this.request.getParam("QRY_MENUITEM_ID"));
    }
    if (this.request.getParam("QRY_ROLE_NAME") != null && !this.request.getParam("QRY_ROLE_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("mir.ROLE_NAME like :ROLE_NAME");
      this.queryParams.put("ROLE_NAME",(String)this.request.getParam("QRY_ROLE_NAME"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " mir.MODIFIEDBY"+
               " ,mir.ID"+
               " ,mir.MENUITEM_ID"+
               " ,mir.ROLE_NAME"+
               " ,mir.CREATEDON"+
               " ,mir.CREATEDBY"+
               " ,mir.MODIFIEDON"+
           " from MENUITEM_ROLE mir "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " mir.ID"+
               " ,mir.MENUITEM_ID"+
               " ,mir.ROLE_NAME"+
               " ,mir.CREATEDON"+
               " ,mir.CREATEDBY"+
               " ,mir.MODIFIEDON"+
               " ,mir.MODIFIEDBY"+
           " from MENUITEM_ROLE mir "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MENUITEM_ROLE("+
               "  ID"+
               " ,MENUITEM_ID"+
               " ,ROLE_NAME"+
           " ) values ( "+
               "  :ID"+
               " ,:MENUITEM_ID"+
               " ,:ROLE_NAME"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_MENUITEMROLE_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MENUITEM_ROLE set "+
               "  CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,ID=:ID"+ 
               " ,MENUITEM_ID=:MENUITEM_ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,ROLE_NAME=:ROLE_NAME"+ 
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
   String sql = "delete from MENUITEM_ROLE where "+
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
               " mir.MODIFIEDBY"+
               " ,mir.ID"+
               " ,mir.MENUITEM_ID"+
               " ,mir.ROLE_NAME"+
               " ,mir.CREATEDON"+
               " ,mir.CREATEDBY"+
               " ,mir.MODIFIEDON"+
           " from MENUITEM_ROLE mir"+
        " where "+
     "      mir.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MENUITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("ROLE_NAME", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
