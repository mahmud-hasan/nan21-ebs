/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0014 DC Controller: Business partner master data
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

public class DC0014 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bp.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bp.CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE").toUpperCase());
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bp.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bp.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_TAX_NUMBER") != null && !this.request.getParam("QRY_TAX_NUMBER").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("bp.TAX_NUMBER like :TAX_NUMBER");
      this.queryParams.put("TAX_NUMBER",(String)this.request.getParam("QRY_TAX_NUMBER"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " bp.BPARTNER_ID"+
               " ,bp.BPARTNER_TYPE"+
               " ,bp.CODE"+
               " ,bp.COMPANY_REG_NR"+
               " ,bp.COPIED_FROM_BPARTNER_ID"+
               " ,bp.CREATEDBY"+
               " ,to_char(bp.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,bp.EMAIL"+
               " ,bp.FAX"+
               " ,bp.ID"+
               " ,bp.MODIFIEDBY"+
               " ,to_char(bp.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,bp.NAME"+
               " ,bp.PHONE"+
               " ,bp.TAX_NUMBER"+
               " ,bp.TAX_NUMBER_TYPE"+
           " from BPARTNER bp "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " bp.ID"+
               " ,bp.CODE"+
               " ,bp.NAME"+
               " ,bp.TAX_NUMBER_TYPE"+
               " ,bp.TAX_NUMBER"+
               " ,bp.COMPANY_REG_NR"+
               " ,bp.PHONE"+
               " ,bp.EMAIL"+
               " ,bp.FAX"+
               " ,bp.BPARTNER_TYPE"+
               " ,bp.BPARTNER_ID"+
               " ,bp.COPIED_FROM_BPARTNER_ID"+
               " ,to_char(bp.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,bp.CREATEDBY"+
               " ,to_char(bp.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,bp.MODIFIEDBY"+
           " from BPARTNER bp "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into BPARTNER("+
               "  BPARTNER_ID"+
               " ,BPARTNER_TYPE"+
               " ,CODE"+
               " ,COMPANY_REG_NR"+
               " ,COPIED_FROM_BPARTNER_ID"+
               " ,EMAIL"+
               " ,FAX"+
               " ,ID"+
               " ,NAME"+
               " ,PHONE"+
               " ,TAX_NUMBER"+
               " ,TAX_NUMBER_TYPE"+
           " ) values ( "+
               "  :BPARTNER_ID"+
               " ,:BPARTNER_TYPE"+
               " ,:CODE"+
               " ,:COMPANY_REG_NR"+
               " ,:COPIED_FROM_BPARTNER_ID"+
               " ,:EMAIL"+
               " ,:FAX"+
               " ,:ID"+
               " ,:NAME"+
               " ,:PHONE"+
               " ,:TAX_NUMBER"+
               " ,:TAX_NUMBER_TYPE"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_bpartner_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BPARTNER set "+
               "  ID=:ID"+
               " ,NAME=:NAME"+
               " ,CODE=:CODE"+
               " ,TAX_NUMBER=:TAX_NUMBER"+
               " ,TAX_NUMBER_TYPE=:TAX_NUMBER_TYPE"+
               " ,COMPANY_REG_NR=:COMPANY_REG_NR"+
               " ,PHONE=:PHONE"+
               " ,EMAIL=:EMAIL"+
               " ,FAX=:FAX"+
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
   String sql = "delete from BPARTNER where "+
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
               " bp.BPARTNER_ID"+
               " ,bp.BPARTNER_TYPE"+
               " ,bp.CODE"+
               " ,bp.COMPANY_REG_NR"+
               " ,bp.COPIED_FROM_BPARTNER_ID"+
               " ,bp.CREATEDBY"+
               " ,to_char(bp.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,bp.EMAIL"+
               " ,bp.FAX"+
               " ,bp.ID"+
               " ,bp.MODIFIEDBY"+
               " ,to_char(bp.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,bp.NAME"+
               " ,bp.PHONE"+
               " ,bp.TAX_NUMBER"+
               " ,bp.TAX_NUMBER_TYPE"+
           " from BPARTNER bp"+
        " where "+
     "      bp.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_TYPE", new FieldDef("STRING"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.get("CODE").setCaseRestriction("Upper");
	  this.fields.put("COMPANY_REG_NR", new FieldDef("STRING"));
	  this.fields.put("COPIED_FROM_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("EMAIL", new FieldDef("STRING"));
	  this.fields.put("FAX", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("PHONE", new FieldDef("STRING"));
	  this.fields.put("TAX_NUMBER", new FieldDef("STRING"));
	  this.fields.put("TAX_NUMBER_TYPE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
