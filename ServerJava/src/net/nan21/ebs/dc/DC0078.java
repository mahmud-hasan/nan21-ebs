/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0078 DC Controller: Reception document
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

public class DC0078 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_DOC_TYPE") != null && !this.request.getParam("QRY_DOC_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOC_TYPE like :DOC_TYPE");
      this.queryParams.put("DOC_TYPE",(String)this.request.getParam("QRY_DOC_TYPE"));
    }
    if (this.request.getParam("QRY_FROM_BPARTNER_ID") != null && !this.request.getParam("QRY_FROM_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.FROM_BPARTNER_ID like :FROM_BPARTNER_ID");
      this.queryParams.put("FROM_BPARTNER_ID",(String)this.request.getParam("QRY_FROM_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_ORGINV_ID") != null && !this.request.getParam("QRY_ORGINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ORGINV_ID like :ORGINV_ID");
      this.queryParams.put("ORGINV_ID",(String)this.request.getParam("QRY_ORGINV_ID"));
    }
    if (this.request.getParam("QRY_ORG_ID") != null && !this.request.getParam("QRY_ORG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ORG_ID like :ORG_ID");
      this.queryParams.put("ORG_ID",(String)this.request.getParam("QRY_ORG_ID"));
    }
    if (this.request.getParam("QRY_QTY_CHECK") != null && !this.request.getParam("QRY_QTY_CHECK").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.QTY_CHECK like :QTY_CHECK");
      this.queryParams.put("QTY_CHECK",(String)this.request.getParam("QRY_QTY_CHECK"));
    }
    if (this.request.getParam("QRY_QUALITY_CHECK") != null && !this.request.getParam("QRY_QUALITY_CHECK").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.QUALITY_CHECK like :QUALITY_CHECK");
      this.queryParams.put("QUALITY_CHECK",(String)this.request.getParam("QRY_QUALITY_CHECK"));
    }
    if (this.request.getParam("QRY_RINV_ID") != null && !this.request.getParam("QRY_RINV_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.RINV_ID like :RINV_ID");
      this.queryParams.put("RINV_ID",(String)this.request.getParam("QRY_RINV_ID"));
    }
    if (this.request.getParam("QRY_VALUE_CHECK") != null && !this.request.getParam("QRY_VALUE_CHECK").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.VALUE_CHECK like :VALUE_CHECK");
      this.queryParams.put("VALUE_CHECK",(String)this.request.getParam("QRY_VALUE_CHECK"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,to_char(t.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,t.DOC_NO"+
               " ,t.DOC_TYPE"+
               " ,t.FROM_BPARTNER_ID"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.ORGINV_ID"+
               " ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME"+
               " ,t.ORG_ID"+
               " ,pbo_org.get_name_by_id(t.org_id) ORG_NAME"+
               " ,t.QTY_CHECK"+
               " ,t.QTY_CHECK_BY"+
               " ,to_char(t.QTY_CHECK_ON,'"+this.DATE_FORMAT_DB+"') QTY_CHECK_ON"+
               " ,t.QUALITY_CHECK"+
               " ,t.QUALITY_CHECK_BY"+
               " ,to_char(t.QUALITY_CHECK_ON,'"+this.DATE_FORMAT_DB+"') QUALITY_CHECK_ON"+
               " ,t.RINV_ID"+
               " ,t.VALUE_CHECK"+
               " ,t.VALUE_CHECK_BY"+
               " ,to_char(t.VALUE_CHECK_ON,'"+this.DATE_FORMAT_DB+"') VALUE_CHECK_ON"+
           " from MM_MOVEMENT_IN_DOC t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               ",pbo_org.get_name_by_id(t.org_id) ORG_NAME"+
               " ,t.ORG_ID"+
               " ,t.ORGINV_ID"+
               ",pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME"+
               " ,t.DOC_NO"+
               " ,to_char(t.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,t.FROM_BPARTNER_ID"+
               " ,t.NOTES"+
               " ,t.DOC_TYPE"+
               " ,t.RINV_ID"+
               " ,t.QTY_CHECK"+
               " ,to_char(t.QTY_CHECK_ON,'"+this.DATE_FORMAT_DB+"') QTY_CHECK_ON"+
               " ,t.QTY_CHECK_BY"+
               " ,t.QUALITY_CHECK"+
               " ,to_char(t.QUALITY_CHECK_ON,'"+this.DATE_FORMAT_DB+"') QUALITY_CHECK_ON"+
               " ,t.QUALITY_CHECK_BY"+
               " ,t.VALUE_CHECK"+
               " ,to_char(t.VALUE_CHECK_ON,'"+this.DATE_FORMAT_DB+"') VALUE_CHECK_ON"+
               " ,t.VALUE_CHECK_BY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CREATEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from MM_MOVEMENT_IN_DOC t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_MOVEMENT_IN_DOC("+
               "  CLIENT_ID"+
               " ,DOC_DATE"+
               " ,DOC_NO"+
               " ,DOC_TYPE"+
               " ,FROM_BPARTNER_ID"+
               " ,ID"+
               " ,NOTES"+
               " ,ORGINV_ID"+
               " ,ORG_ID"+
               " ,QUALITY_CHECK"+
               " ,RINV_ID"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:DOC_DATE"+
               " ,:DOC_NO"+
               " ,:DOC_TYPE"+
               " ,:FROM_BPARTNER_ID"+
               " ,:ID"+
               " ,:NOTES"+
               " ,:ORGINV_ID"+
               " ,:ORG_ID"+
               " ,:QUALITY_CHECK"+
               " ,:RINV_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_mvmntindoc_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_MOVEMENT_IN_DOC set "+
               "  ID=:ID"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,FROM_BPARTNER_ID=:FROM_BPARTNER_ID"+
               " ,NOTES=:NOTES"+
               " ,DOC_TYPE=:DOC_TYPE"+
               " ,RINV_ID=:RINV_ID"+
               " ,QTY_CHECK=:QTY_CHECK"+
               " ,QUALITY_CHECK=:QUALITY_CHECK"+
               " ,VALUE_CHECK=:VALUE_CHECK"+
               " ,ORG_ID=:ORG_ID"+
               " ,ORGINV_ID=:ORGINV_ID"+
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
   String sql = "delete from MM_MOVEMENT_IN_DOC where "+
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
                "pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,to_char(t.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,t.DOC_NO"+
               " ,t.DOC_TYPE"+
               " ,t.FROM_BPARTNER_ID"+
               " ,t.ID"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.ORGINV_ID"+
                ",pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME"+
               " ,t.ORG_ID"+
                ",pbo_org.get_name_by_id(t.org_id) ORG_NAME"+
               " ,t.QTY_CHECK"+
               " ,t.QTY_CHECK_BY"+
               " ,to_char(t.QTY_CHECK_ON,'"+this.DATE_FORMAT_DB+"') QTY_CHECK_ON"+
               " ,t.QUALITY_CHECK"+
               " ,t.QUALITY_CHECK_BY"+
               " ,to_char(t.QUALITY_CHECK_ON,'"+this.DATE_FORMAT_DB+"') QUALITY_CHECK_ON"+
               " ,t.RINV_ID"+
               " ,t.VALUE_CHECK"+
               " ,t.VALUE_CHECK_BY"+
               " ,to_char(t.VALUE_CHECK_ON,'"+this.DATE_FORMAT_DB+"') VALUE_CHECK_ON"+
           " from MM_MOVEMENT_IN_DOC t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("NUMBER"));
	  this.fields.put("DOC_TYPE", new FieldDef("STRING"));
	  this.fields.put("FROM_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("ORGINV_ID", new FieldDef("NUMBER"));
	  this.fields.put("ORGINV_NAME", new FieldDef("STRING"));
	  this.fields.put("ORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("ORG_NAME", new FieldDef("STRING"));
	  this.fields.put("QTY_CHECK", new FieldDef("BOOLEAN"));
	  this.fields.put("QTY_CHECK_BY", new FieldDef("STRING"));
	  this.fields.put("QTY_CHECK_ON", new FieldDef("DATE"));
	  this.fields.put("QUALITY_CHECK", new FieldDef("BOOLEAN"));
	  this.fields.put("QUALITY_CHECK_BY", new FieldDef("STRING"));
	  this.fields.put("QUALITY_CHECK_ON", new FieldDef("DATE"));
	  this.fields.put("RINV_ID", new FieldDef("NUMBER"));
	  this.fields.put("VALUE_CHECK", new FieldDef("BOOLEAN"));
	  this.fields.put("VALUE_CHECK_BY", new FieldDef("STRING"));
	  this.fields.put("VALUE_CHECK_ON", new FieldDef("DATE"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
