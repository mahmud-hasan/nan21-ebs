/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0093 DC Controller: Accounting schema parameters
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0093 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_IS_ACCOUNT") != null && !this.request.getParam("QRY_IS_ACCOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_ACCOUNT like :IS_ACCOUNT");
      this.queryParams.put("IS_ACCOUNT",(String)this.request.getParam("QRY_IS_ACCOUNT"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME").toUpperCase());
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DESCRIPTION"+
               " ,t.ID"+
               " ,t.IS_ACCOUNT"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.NAME"+
           " from AC_ACCSCHEMA_PARAM t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.NAME"+
               " ,t.DESCRIPTION"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_ACCOUNT"+
           " from AC_ACCSCHEMA_PARAM t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into AC_ACCSCHEMA_PARAM("+
               "  DESCRIPTION"+
               " ,ID"+
               " ,IS_ACCOUNT"+
               " ,NAME"+
           " ) values ( "+
               "  :DESCRIPTION"+
               " ,:ID"+
               " ,:IS_ACCOUNT"+
               " ,:NAME"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_ACCSCHPARAM_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update AC_ACCSCHEMA_PARAM set "+
               "  CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,DESCRIPTION=:DESCRIPTION"+ 
               " ,ID=:ID"+ 
               " ,IS_ACCOUNT=:IS_ACCOUNT"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,NAME=:NAME"+ 
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
   String sql = "delete from AC_ACCSCHEMA_PARAM where "+
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
               " t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DESCRIPTION"+
               " ,t.ID"+
               " ,t.IS_ACCOUNT"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.NAME"+
           " from AC_ACCSCHEMA_PARAM t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_ACCOUNT", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.get("NAME").setCaseRestriction("Upper");
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 30;
	}

}
