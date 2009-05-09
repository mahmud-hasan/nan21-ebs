/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0034 DC Controller: Contract types def.
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0034 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE"));
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
               " CODE"+
               " ,NAME"+
               " ,DESCRIPTION"+
               " ,ACTIVE"+
           " from CONTRACT_TYPE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " CODE"+
               " ,NAME"+
               " ,DESCRIPTION"+
               " ,ACTIVE"+
           " from CONTRACT_TYPE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into CONTRACT_TYPE("+
               "  CODE"+
               " ,NAME"+
               " ,DESCRIPTION"+
               " ,ACTIVE"+
           " ) values ( "+
               "  :CODE"+
               " ,:NAME"+
               " ,:DESCRIPTION"+
               " ,:ACTIVE"+
    ")";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update CONTRACT_TYPE set "+
               "  ACTIVE=:ACTIVE"+ 
               " ,CODE=:CODE"+ 
               " ,DESCRIPTION=:DESCRIPTION"+ 
               " ,NAME=:NAME"+ 
   " where "+ 
     "      CODE= :CODE"+
    "";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoUpdate();	
}

public void doDelete() throws Exception {
    this.populateRecordPkFromRequest();
   String sql = "delete from CONTRACT_TYPE where "+
     "      CODE= :CODE"+
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
               " CODE"+
               " ,NAME"+
               " ,DESCRIPTION"+
               " ,ACTIVE"+
           " from CONTRACT_TYPE "+
        " where "+
     "      CODE= :CODE"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"CODE"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
