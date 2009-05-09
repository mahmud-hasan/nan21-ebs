/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0037 DC Controller: UI dictionary translations
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0037 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_UIDICT_ID") != null && !this.request.getParam("QRY_UIDICT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UIDICT_ID like :UIDICT_ID");
      this.queryParams.put("UIDICT_ID",(String)this.request.getParam("QRY_UIDICT_ID"));
    }
    if (this.request.getParam("QRY_LANGUAGE_CODE") != null && !this.request.getParam("QRY_LANGUAGE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("LANGUAGE_CODE like :LANGUAGE_CODE");
      this.queryParams.put("LANGUAGE_CODE",(String)this.request.getParam("QRY_LANGUAGE_CODE"));
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
               " ,UIDICT_ID"+
               " ,LANGUAGE_CODE"+
               " ,TRANSLATION"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
               " ,(select uidc_code from ui_dictionary where id = uidict_id) UIDC_CODE"+
               " ,(select msg_code from ui_dictionary where id = uidict_id) MSG_CODE"+
           " from UI_DICTIONARY_TRL  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,UIDICT_ID"+
               ",(select uidc_code from ui_dictionary where id = uidict_id) UIDC_CODE"+
               ",(select msg_code from ui_dictionary where id = uidict_id) MSG_CODE"+
               " ,LANGUAGE_CODE"+
               " ,TRANSLATION"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from UI_DICTIONARY_TRL  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update UI_DICTIONARY_TRL set "+
               "  ID=:ID"+ 
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
   String sql = "delete from UI_DICTIONARY_TRL where "+
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
               " ,UIDICT_ID"+
               " ,LANGUAGE_CODE"+
               " ,TRANSLATION"+
               " ,MODIFIEDON"+
               " ,MODIFIEDBY"+
                ",(select uidc_code from ui_dictionary where id = uidict_id) UIDC_CODE"+
                ",(select msg_code from ui_dictionary where id = uidict_id) MSG_CODE"+
           " from UI_DICTIONARY_TRL "+
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
	  this.fields.put("UIDICT_ID", new FieldDef("NUMBER"));
	  this.fields.put("LANGUAGE_CODE", new FieldDef("STRING"));
	  this.fields.put("TRANSLATION", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("UIDC_CODE", new FieldDef("STRING"));
	  this.fields.put("MSG_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
