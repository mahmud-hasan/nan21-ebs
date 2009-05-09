/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0057 DC Controller: BP contact
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0057 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_FIRSTNAME") != null && !this.request.getParam("QRY_FIRSTNAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.FIRSTNAME like :FIRSTNAME");
      this.queryParams.put("FIRSTNAME",(String)this.request.getParam("QRY_FIRSTNAME"));
    }
    if (this.request.getParam("QRY_LASTNAME") != null && !this.request.getParam("QRY_LASTNAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.LASTNAME like :LASTNAME");
      this.queryParams.put("LASTNAME",(String)this.request.getParam("QRY_LASTNAME"));
    }
    if (this.request.getParam("QRY_PHONE") != null && !this.request.getParam("QRY_PHONE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.PHONE like :PHONE");
      this.queryParams.put("PHONE",(String)this.request.getParam("QRY_PHONE"));
    }
    if (this.request.getParam("QRY_EMAIL") != null && !this.request.getParam("QRY_EMAIL").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.EMAIL like :EMAIL");
      this.queryParams.put("EMAIL",(String)this.request.getParam("QRY_EMAIL"));
    }
    if (this.request.getParam("QRY_FAX") != null && !this.request.getParam("QRY_FAX").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.FAX like :FAX");
      this.queryParams.put("FAX",(String)this.request.getParam("QRY_FAX"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_MOBILE") != null && !this.request.getParam("QRY_MOBILE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bpc.MOBILE like :MOBILE");
      this.queryParams.put("MOBILE",(String)this.request.getParam("QRY_MOBILE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " bpc.ID"+
               " ,bpc.BPARTNER_ID"+
               " ,bpc.NAME"+
               " ,bpc.FIRSTNAME"+
               " ,bpc.LASTNAME"+
               " ,bpc.PHONE"+
               " ,bpc.EMAIL"+
               " ,bpc.FAX"+
               " ,bpc.NOTES"+
               " ,bpc.MOBILE"+
           " from BP_CONTACT bpc "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " bpc.ID"+
               " ,bpc.BPARTNER_ID"+
               " ,bpc.NAME"+
               " ,bpc.FIRSTNAME"+
               " ,bpc.LASTNAME"+
               " ,bpc.PHONE"+
               " ,bpc.EMAIL"+
               " ,bpc.FAX"+
               " ,bpc.MOBILE"+
               " ,bpc.NOTES"+
           " from BP_CONTACT bpc "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
               "  ID"+
               " ,BPARTNER_ID"+
               " ,NAME"+
               " ,FIRSTNAME"+
               " ,LASTNAME"+
               " ,PHONE"+
               " ,EMAIL"+
               " ,FAX"+
               " ,NOTES"+
               " ,MOBILE"+
           " ) values ( "+
               "  :ID"+
               " ,:BPARTNER_ID"+
               " ,:NAME"+
               " ,:FIRSTNAME"+
               " ,:LASTNAME"+
               " ,:PHONE"+
               " ,:EMAIL"+
               " ,:FAX"+
               " ,:NOTES"+
               " ,:MOBILE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_BPCONTACT_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
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
               " ,NAME=:NAME"+ 
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
               " bpc.ID"+
               " ,bpc.BPARTNER_ID"+
               " ,bpc.NAME"+
               " ,bpc.FIRSTNAME"+
               " ,bpc.LASTNAME"+
               " ,bpc.PHONE"+
               " ,bpc.EMAIL"+
               " ,bpc.FAX"+
               " ,bpc.NOTES"+
               " ,bpc.MOBILE"+
           " from BP_CONTACT bpc"+
        " where "+
     "      bpc.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("FIRSTNAME", new FieldDef("STRING"));
	  this.fields.put("LASTNAME", new FieldDef("STRING"));
	  this.fields.put("PHONE", new FieldDef("STRING"));
	  this.fields.put("EMAIL", new FieldDef("STRING"));
	  this.fields.put("FAX", new FieldDef("STRING"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("MOBILE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = -1;
	}

}
