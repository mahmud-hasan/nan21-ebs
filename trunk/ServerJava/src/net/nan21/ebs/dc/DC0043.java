/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0043 DC Controller: Menu item translations
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0043 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_MENUITEM_ID") != null && !this.request.getParam("QRY_MENUITEM_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MENUITEM_ID like :MENUITEM_ID");
      this.queryParams.put("MENUITEM_ID",(String)this.request.getParam("QRY_MENUITEM_ID"));
    }
    if (this.request.getParam("QRY_LANG") != null && !this.request.getParam("QRY_LANG").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("LANG like :LANG");
      this.queryParams.put("LANG",(String)this.request.getParam("QRY_LANG"));
    }
    if (this.request.getParam("QRY_TRANSLATION") != null && !this.request.getParam("QRY_TRANSLATION").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("TRANSLATION like :TRANSLATION");
      this.queryParams.put("TRANSLATION",(String)this.request.getParam("QRY_TRANSLATION"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,MENUITEM_ID"+
               " ,LANG"+
               " ,TRANSLATION"+
           " from MENUITEM_TRL  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,MENUITEM_ID"+
               " ,LANG"+
               " ,TRANSLATION"+
           " from MENUITEM_TRL  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MENUITEM_TRL("+
               "  ID"+
               " ,MENUITEM_ID"+
               " ,LANG"+
               " ,TRANSLATION"+
           " ) values ( "+
               "  :ID"+
               " ,:MENUITEM_ID"+
               " ,:LANG"+
               " ,:TRANSLATION"+
    ")";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MENUITEM_TRL set "+
               "  ID=:ID"+ 
               " ,MENUITEM_ID=:MENUITEM_ID"+ 
               " ,TRANSLATION=:TRANSLATION"+ 
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
   String sql = "delete from MENUITEM_TRL where "+
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
               " ID"+
               " ,MENUITEM_ID"+
               " ,LANG"+
               " ,TRANSLATION"+
           " from MENUITEM_TRL "+
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
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MENUITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("LANG", new FieldDef("STRING"));
	  this.fields.put("TRANSLATION", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.get("MODIFIEDON").setInDS(false);
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
