/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0036 DC Controller: UI dictionary codes
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

public class DC0036 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CREATEDBY") != null && !this.request.getParam("QRY_CREATEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CREATEDBY like :CREATEDBY");
      this.queryParams.put("CREATEDBY",(String)this.request.getParam("QRY_CREATEDBY"));
    }
    if (this.request.getParam("QRY_CREATEDON") != null && !this.request.getParam("QRY_CREATEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CREATEDON like :CREATEDON");
      this.queryParams.put("CREATEDON",(String)this.request.getParam("QRY_CREATEDON"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_MAINTAINED_BY") != null && !this.request.getParam("QRY_MAINTAINED_BY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MAINTAINED_BY like :MAINTAINED_BY");
      this.queryParams.put("MAINTAINED_BY",(String)this.request.getParam("QRY_MAINTAINED_BY"));
    }
    if (this.request.getParam("QRY_MODIFIEDBY") != null && !this.request.getParam("QRY_MODIFIEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MODIFIEDBY like :MODIFIEDBY");
      this.queryParams.put("MODIFIEDBY",(String)this.request.getParam("QRY_MODIFIEDBY"));
    }
    if (this.request.getParam("QRY_MODIFIEDON") != null && !this.request.getParam("QRY_MODIFIEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MODIFIEDON like :MODIFIEDON");
      this.queryParams.put("MODIFIEDON",(String)this.request.getParam("QRY_MODIFIEDON"));
    }
    if (this.request.getParam("QRY_MSG_CODE") != null && !this.request.getParam("QRY_MSG_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MSG_CODE like :MSG_CODE");
      this.queryParams.put("MSG_CODE",(String)this.request.getParam("QRY_MSG_CODE"));
    }
    if (this.request.getParam("QRY_MSG_TYPE") != null && !this.request.getParam("QRY_MSG_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("MSG_TYPE like :MSG_TYPE");
      this.queryParams.put("MSG_TYPE",(String)this.request.getParam("QRY_MSG_TYPE"));
    }
    if (this.request.getParam("QRY_UIDC_CODE") != null && !this.request.getParam("QRY_UIDC_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UIDC_CODE like :UIDC_CODE");
      this.queryParams.put("UIDC_CODE",(String)this.request.getParam("QRY_UIDC_CODE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " CREATEDBY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,ID"+
               " ,MAINTAINED_BY"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MSG_CODE"+
               " ,MSG_TYPE"+
               " ,UIDC_CODE"+
           " from UI_DICTIONARY  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,UIDC_CODE"+
               " ,MSG_TYPE"+
               " ,MSG_CODE"+
               " ,MAINTAINED_BY"+
               " ,to_char(CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,CREATEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from UI_DICTIONARY  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into UI_DICTIONARY("+
               "  CREATEDBY"+
               " ,ID"+
               " ,MAINTAINED_BY"+
               " ,MODIFIEDBY"+
               " ,MSG_CODE"+
               " ,MSG_TYPE"+
               " ,UIDC_CODE"+
           " ) values ( "+
               "  :CREATEDBY"+
               " ,:ID"+
               " ,:MAINTAINED_BY"+
               " ,:MODIFIEDBY"+
               " ,:MSG_CODE"+
               " ,:MSG_TYPE"+
               " ,:UIDC_CODE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_UIDICT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update UI_DICTIONARY set "+
               "  ID=:ID"+
               " ,UIDC_CODE=:UIDC_CODE"+
               " ,MSG_TYPE=:MSG_TYPE"+
               " ,MSG_CODE=:MSG_CODE"+
               " ,MAINTAINED_BY=:MAINTAINED_BY"+
               " ,MODIFIEDBY=:MODIFIEDBY"+
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
   String sql = "delete from UI_DICTIONARY where "+
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
               " ,ID"+
               " ,MAINTAINED_BY"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MSG_CODE"+
               " ,MSG_TYPE"+
               " ,UIDC_CODE"+
           " from UI_DICTIONARY "+
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
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MAINTAINED_BY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MSG_CODE", new FieldDef("STRING"));
	  this.fields.put("MSG_TYPE", new FieldDef("STRING"));
	  this.fields.put("UIDC_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
