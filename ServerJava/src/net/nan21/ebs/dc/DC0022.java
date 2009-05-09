/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0022 DC Controller: Menu items
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0022 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_MENUBAR_CODE") != null && !this.request.getParam("QRY_MENUBAR_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MENUBAR_CODE like :MENUBAR_CODE");
      this.queryParams.put("MENUBAR_CODE",(String)this.request.getParam("QRY_MENUBAR_CODE"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_MENUITEM_ID") != null && !this.request.getParam("QRY_MENUITEM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MENUITEM_ID like :MENUITEM_ID");
      this.queryParams.put("MENUITEM_ID",(String)this.request.getParam("QRY_MENUITEM_ID"));
    }
    if (this.request.getParam("QRY_LINK") != null && !this.request.getParam("QRY_LINK").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("LINK like :LINK");
      this.queryParams.put("LINK",(String)this.request.getParam("QRY_LINK"));
    }
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " (select t.name from menuitem t where t.id = menuitem.menuitem_id) PARENT_MENU"+
               " ,ID"+
               " ,MENUBAR_CODE"+
               " ,NAME"+
               " ,POSITION"+
               " ,MENUITEM_ID"+
               " ,CODE"+
               " ,LINK"+
               " ,TARGET"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,ACTIVE"+
           " from MENUITEM  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,MENUBAR_CODE"+
               " ,POSITION"+
               " ,NAME"+
               " ,LINK"+
               " ,MENUITEM_ID"+
               ",(select t.name from menuitem t where t.id = menuitem.menuitem_id) PARENT_MENU"+
               " ,CODE"+
               " ,TARGET"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,ACTIVE"+
           " from MENUITEM  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MENUITEM("+
               "  ID"+
               " ,MENUBAR_CODE"+
               " ,NAME"+
               " ,POSITION"+
               " ,MENUITEM_ID"+
               " ,CODE"+
               " ,LINK"+
               " ,TARGET"+
               " ,CREATEDBY"+
               " ,MODIFIEDBY"+
               " ,ACTIVE"+
           " ) values ( "+
               "  :ID"+
               " ,:MENUBAR_CODE"+
               " ,:NAME"+
               " ,:POSITION"+
               " ,:MENUITEM_ID"+
               " ,:CODE"+
               " ,:LINK"+
               " ,:TARGET"+
               " ,:CREATEDBY"+
               " ,:MODIFIEDBY"+
               " ,:ACTIVE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_menuitem_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MENUITEM set "+
               "  ID=:ID"+
               " ,MENUBAR_CODE=:MENUBAR_CODE"+
               " ,NAME=:NAME"+
               " ,POSITION=:POSITION"+
               " ,MENUITEM_ID=:MENUITEM_ID"+
               " ,CODE=:CODE"+
               " ,LINK=:LINK"+
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
   String sql = "delete from MENUITEM where "+
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
                "(select t.name from menuitem t where t.id = menuitem.menuitem_id) PARENT_MENU"+
               " ,ID"+
               " ,MENUBAR_CODE"+
               " ,NAME"+
               " ,POSITION"+
               " ,MENUITEM_ID"+
               " ,CODE"+
               " ,LINK"+
               " ,TARGET"+
               " ,CREATEDON"+
               " ,CREATEDBY"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,ACTIVE"+
           " from MENUITEM "+
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
	  this.fields.put("PARENT_MENU", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MENUBAR_CODE", new FieldDef("STRING"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("POSITION", new FieldDef("NUMBER"));
	  this.fields.put("MENUITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("LINK", new FieldDef("STRING"));
	  this.fields.put("TARGET", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
