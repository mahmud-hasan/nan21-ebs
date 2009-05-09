/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0066 DC Controller: Menu shortcuts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0066 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_OWNER") != null && !this.request.getParam("QRY_OWNER").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.OWNER like :OWNER");
      this.queryParams.put("OWNER",(String)this.request.getParam("QRY_OWNER"));
    }
    if (this.request.getParam("QRY_TITLE") != null && !this.request.getParam("QRY_TITLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.TITLE like :TITLE");
      this.queryParams.put("TITLE",(String)this.request.getParam("QRY_TITLE"));
    }
    if (this.request.getParam("QRY_LINK") != null && !this.request.getParam("QRY_LINK").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.LINK like :LINK");
      this.queryParams.put("LINK",(String)this.request.getParam("QRY_LINK"));
    }
    if (this.request.getParam("QRY_MENUITEM_ID") != null && !this.request.getParam("QRY_MENUITEM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.MENUITEM_ID like :MENUITEM_ID");
      this.queryParams.put("MENUITEM_ID",(String)this.request.getParam("QRY_MENUITEM_ID"));
    }
    if (this.request.getParam("QRY_MENUSHRCT_ID") != null && !this.request.getParam("QRY_MENUSHRCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.MENUSHRCT_ID like :MENUSHRCT_ID");
      this.queryParams.put("MENUSHRCT_ID",(String)this.request.getParam("QRY_MENUSHRCT_ID"));
    }
    if (this.request.getParam("QRY_POSITION") != null && !this.request.getParam("QRY_POSITION").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ms.POSITION like :POSITION");
      this.queryParams.put("POSITION",(String)this.request.getParam("QRY_POSITION"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ms.ID"+
               " ,ms.OWNER"+
               " ,ms.TITLE"+
               " ,ms.LINK"+
               " ,ms.MENUITEM_ID"+
               " ,ms.MENUSHRCT_ID"+
               " ,ms.POSITION"+
               " ,ms.CREATEDON"+
               " ,ms.CREATEDBY"+
               " ,ms.MODIFIEDON"+
               " ,ms.MODIFIEDBY"+
           " from MENU_SHORTCUT ms "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ms.ID"+
               " ,ms.POSITION"+
               " ,ms.OWNER"+
               " ,ms.TITLE"+
               " ,ms.LINK"+
               " ,ms.MENUSHRCT_ID"+
               " ,ms.MENUITEM_ID"+
               " ,ms.CREATEDON"+
               " ,ms.CREATEDBY"+
               " ,ms.MODIFIEDON"+
               " ,ms.MODIFIEDBY"+
           " from MENU_SHORTCUT ms "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MENU_SHORTCUT("+
               "  ID"+
               " ,OWNER"+
               " ,TITLE"+
               " ,LINK"+
               " ,MENUITEM_ID"+
               " ,MENUSHRCT_ID"+
               " ,POSITION"+
           " ) values ( "+
               "  :ID"+
               " ,:OWNER"+
               " ,:TITLE"+
               " ,:LINK"+
               " ,:MENUITEM_ID"+
               " ,:MENUSHRCT_ID"+
               " ,:POSITION"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_MENUSHRCT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MENU_SHORTCUT set "+
               "  CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,LINK=:LINK"+ 
               " ,MENUITEM_ID=:MENUITEM_ID"+ 
               " ,MENUSHRCT_ID=:MENUSHRCT_ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,OWNER=:OWNER"+ 
               " ,POSITION=:POSITION"+ 
               " ,TITLE=:TITLE"+ 
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
   String sql = "delete from MENU_SHORTCUT where "+
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
               " ms.ID"+
               " ,ms.OWNER"+
               " ,ms.TITLE"+
               " ,ms.LINK"+
               " ,ms.MENUITEM_ID"+
               " ,ms.MENUSHRCT_ID"+
               " ,ms.POSITION"+
               " ,ms.CREATEDON"+
               " ,ms.CREATEDBY"+
               " ,ms.MODIFIEDON"+
               " ,ms.MODIFIEDBY"+
           " from MENU_SHORTCUT ms"+
        " where "+
     "      ms.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("OWNER", new FieldDef("STRING"));
	  this.fields.put("TITLE", new FieldDef("STRING"));
	  this.fields.put("LINK", new FieldDef("STRING"));
	  this.fields.put("MENUITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("MENUSHRCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("POSITION", new FieldDef("NUMBER"));
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
