/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0068 DC Controller: User roles
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0068 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ur.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_ROLE_NAME") != null && !this.request.getParam("QRY_ROLE_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ur.ROLE_NAME like :ROLE_NAME");
      this.queryParams.put("ROLE_NAME",(String)this.request.getParam("QRY_ROLE_NAME"));
    }
    if (this.request.getParam("QRY_USER_ID") != null && !this.request.getParam("QRY_USER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ur.USER_ID like :USER_ID");
      this.queryParams.put("USER_ID",(String)this.request.getParam("QRY_USER_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ur.CREATEDBY"+
               " ,ur.CREATEDON"+
               " ,ur.ID"+
               " ,ur.ROLE_NAME"+
               " ,ur.USER_ID"+
           " from SYS_USER_ROLE ur "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ur.ID"+
               " ,ur.USER_ID"+
               " ,ur.ROLE_NAME"+
               " ,ur.CREATEDON"+
               " ,ur.CREATEDBY"+
           " from SYS_USER_ROLE ur "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into SYS_USER_ROLE("+
               "  ID"+
               " ,ROLE_NAME"+
               " ,USER_ID"+
           " ) values ( "+
               "  :ID"+
               " ,:ROLE_NAME"+
               " ,:USER_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_USRROL_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update SYS_USER_ROLE set "+
               "  CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,ID=:ID"+ 
               " ,ROLE_NAME=:ROLE_NAME"+ 
               " ,USER_ID=:USER_ID"+ 
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
   String sql = "delete from SYS_USER_ROLE where "+
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
               " ur.CREATEDBY"+
               " ,ur.CREATEDON"+
               " ,ur.ID"+
               " ,ur.ROLE_NAME"+
               " ,ur.USER_ID"+
           " from SYS_USER_ROLE ur"+
        " where "+
     "      ur.ID= :ID"+ 
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
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("ROLE_NAME", new FieldDef("STRING"));
	  this.fields.put("USER_ID", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
