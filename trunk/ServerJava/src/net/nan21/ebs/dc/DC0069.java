/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0069 DC Controller: Contacts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0069 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_FIRSTNAME") != null && !this.request.getParam("QRY_FIRSTNAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.FIRSTNAME like :FIRSTNAME");
      this.queryParams.put("FIRSTNAME",(String)this.request.getParam("QRY_FIRSTNAME"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_LASTNAME") != null && !this.request.getParam("QRY_LASTNAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.LASTNAME like :LASTNAME");
      this.queryParams.put("LASTNAME",(String)this.request.getParam("QRY_LASTNAME"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " c.BPARTNER_ID"+
               " ,pbo_bpartner.get_name_by_id(c.bpartner_id) BPARTNER_NAME"+
               " ,c.CREATEDBY"+
               " ,c.CREATEDON"+
               " ,c.EMAIL"+
               " ,c.FAX"+
               " ,c.FIRSTNAME"+
               " ,c.ID"+
               " ,c.LASTNAME"+
               " ,c.MOBILE"+
               " ,c.MODIFIEDBY"+
               " ,c.MODIFIEDON"+
               " ,c.NAME"+
               " ,c.NOTES"+
               " ,c.PHONE"+
           " from BP_CONTACT c "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " c.ID"+
               " ,c.BPARTNER_ID"+
               " ,c.NAME"+
               ",pbo_bpartner.get_name_by_id(c.bpartner_id) BPARTNER_NAME"+
               " ,c.FIRSTNAME"+
               " ,c.LASTNAME"+
               " ,c.PHONE"+
               " ,c.EMAIL"+
               " ,c.FAX"+
               " ,c.NOTES"+
               " ,c.MOBILE"+
               " ,c.CREATEDON"+
               " ,c.CREATEDBY"+
               " ,c.MODIFIEDON"+
               " ,c.MODIFIEDBY"+
           " from BP_CONTACT c "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into BP_CONTACT("+
               "  BPARTNER_ID"+
               " ,EMAIL"+
               " ,FAX"+
               " ,FIRSTNAME"+
               " ,ID"+
               " ,LASTNAME"+
               " ,MOBILE"+
               " ,NAME"+
               " ,NOTES"+
               " ,PHONE"+
           " ) values ( "+
               "  :BPARTNER_ID"+
               " ,:EMAIL"+
               " ,:FAX"+
               " ,:FIRSTNAME"+
               " ,:ID"+
               " ,:LASTNAME"+
               " ,:MOBILE"+
               " ,:NAME"+
               " ,:NOTES"+
               " ,:PHONE"+
    ")";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BP_CONTACT set "+
               "  BPARTNER_ID=:BPARTNER_ID"+
               " ,EMAIL=:EMAIL"+
               " ,FAX=:FAX"+
               " ,FIRSTNAME=:FIRSTNAME"+
               " ,ID=:ID"+
               " ,LASTNAME=:LASTNAME"+
               " ,MOBILE=:MOBILE"+
               " ,NOTES=:NOTES"+
               " ,PHONE=:PHONE"+
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
   String sql = "delete from BP_CONTACT where "+
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
               " c.BPARTNER_ID"+
                ",pbo_bpartner.get_name_by_id(c.bpartner_id) BPARTNER_NAME"+
               " ,c.CREATEDBY"+
               " ,c.CREATEDON"+
               " ,c.EMAIL"+
               " ,c.FAX"+
               " ,c.FIRSTNAME"+
               " ,c.ID"+
               " ,c.LASTNAME"+
               " ,c.MOBILE"+
               " ,c.MODIFIEDBY"+
               " ,c.MODIFIEDON"+
               " ,c.NAME"+
               " ,c.NOTES"+
               " ,c.PHONE"+
           " from BP_CONTACT c"+
        " where "+
     "      c.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("EMAIL", new FieldDef("STRING"));
	  this.fields.put("FAX", new FieldDef("STRING"));
	  this.fields.put("FIRSTNAME", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("LASTNAME", new FieldDef("STRING"));
	  this.fields.put("MOBILE", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PHONE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
