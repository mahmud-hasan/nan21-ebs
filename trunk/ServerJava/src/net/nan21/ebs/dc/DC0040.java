/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0040 DC Controller: Accounting doc.
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

public class DC0040 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ACCPERIOD_ID") != null && !this.request.getParam("QRY_ACCPERIOD_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCPERIOD_ID like :ACCPERIOD_ID");
      this.queryParams.put("ACCPERIOD_ID",(String)this.request.getParam("QRY_ACCPERIOD_ID"));
    }
    if (this.request.getParam("QRY_ACCSCHEMA_ID") != null && !this.request.getParam("QRY_ACCSCHEMA_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCSCHEMA_ID like :ACCSCHEMA_ID");
      this.queryParams.put("ACCSCHEMA_ID",(String)this.request.getParam("QRY_ACCSCHEMA_ID"));
    }
    if (this.request.getParam("QRY_BASEDOC_DATE") != null && !this.request.getParam("QRY_BASEDOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.BASEDOC_DATE like :BASEDOC_DATE");
      this.queryParams.put("BASEDOC_DATE",(String)this.request.getParam("QRY_BASEDOC_DATE"));
    }
    if (this.request.getParam("QRY_BASEDOC_ID") != null && !this.request.getParam("QRY_BASEDOC_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.BASEDOC_ID like :BASEDOC_ID");
      this.queryParams.put("BASEDOC_ID",(String)this.request.getParam("QRY_BASEDOC_ID"));
    }
    if (this.request.getParam("QRY_BASEDOC_NO") != null && !this.request.getParam("QRY_BASEDOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.BASEDOC_NO like :BASEDOC_NO");
      this.queryParams.put("BASEDOC_NO",(String)this.request.getParam("QRY_BASEDOC_NO"));
    }
    if (this.request.getParam("QRY_BASEDOC_TYPE") != null && !this.request.getParam("QRY_BASEDOC_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.BASEDOC_TYPE like :BASEDOC_TYPE");
      this.queryParams.put("BASEDOC_TYPE",(String)this.request.getParam("QRY_BASEDOC_TYPE"));
    }
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
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IS_GENERATED") != null && !this.request.getParam("QRY_IS_GENERATED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_GENERATED like :IS_GENERATED");
      this.queryParams.put("IS_GENERATED",(String)this.request.getParam("QRY_IS_GENERATED"));
    }
    if (this.request.getParam("QRY_IS_INSERTED") != null && !this.request.getParam("QRY_IS_INSERTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_INSERTED like :IS_INSERTED");
      this.queryParams.put("IS_INSERTED",(String)this.request.getParam("QRY_IS_INSERTED"));
    }
    if (this.request.getParam("QRY_IS_POSTED") != null && !this.request.getParam("QRY_IS_POSTED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_POSTED like :IS_POSTED");
      this.queryParams.put("IS_POSTED",(String)this.request.getParam("QRY_IS_POSTED"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ACCPERIOD_ID"+
               " ,t.ACCSCHEMA_ID"+
               " ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,to_char(t.BASEDOC_DATE,'"+this.DATE_FORMAT_DB+"') BASEDOC_DATE"+
               " ,t.BASEDOC_ID"+
               " ,t.BASEDOC_NO"+
               " ,t.BASEDOC_TYPE"+
               " ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT"+
               " ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT"+
               " ,to_char(t.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,t.DOC_NO"+
               " ,t.ID"+
               " ,t.IS_GENERATED"+
               " ,t.IS_INSERTED"+
               " ,t.IS_POSTED"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.POSTEDBY"+
               " ,to_char(t.POSTEDON,'"+this.DATE_FORMAT_DB+"') POSTEDON"+
           " from AC_ACCDOC t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.CLIENT_ID"+
               ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.ACCPERIOD_ID"+
               ",pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT"+
               ",pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT"+
               " ,t.DOC_NO"+
               " ,to_char(t.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,t.BASEDOC_TYPE"+
               " ,t.BASEDOC_NO"+
               " ,to_char(t.BASEDOC_DATE,'"+this.DATE_FORMAT_DB+"') BASEDOC_DATE"+
               " ,t.BASEDOC_ID"+
               " ,t.NOTES"+
               " ,t.IS_GENERATED"+
               " ,t.IS_INSERTED"+
               " ,t.IS_POSTED"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CREATEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.POSTEDON,'"+this.DATE_FORMAT_DB+"') POSTEDON"+
               " ,t.POSTEDBY"+
               " ,t.ACCSCHEMA_ID"+
               ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
           " from AC_ACCDOC t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into AC_ACCDOC("+
               "  ACCPERIOD_ID"+
               " ,ACCSCHEMA_ID"+
               " ,BASEDOC_DATE"+
               " ,BASEDOC_ID"+
               " ,BASEDOC_NO"+
               " ,BASEDOC_TYPE"+
               " ,CLIENT_ID"+
               " ,DOC_DATE"+
               " ,DOC_NO"+
               " ,ID"+
               " ,IS_GENERATED"+
               " ,IS_INSERTED"+
               " ,IS_POSTED"+
               " ,NOTES"+
           " ) values ( "+
               "  :ACCPERIOD_ID"+
               " ,:ACCSCHEMA_ID"+
               " ,:BASEDOC_DATE"+
               " ,:BASEDOC_ID"+
               " ,:BASEDOC_NO"+
               " ,:BASEDOC_TYPE"+
               " ,:CLIENT_ID"+
               " ,:DOC_DATE"+
               " ,:DOC_NO"+
               " ,:ID"+
               " ,:IS_GENERATED"+
               " ,:IS_INSERTED"+
               " ,:IS_POSTED"+
               " ,:NOTES"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_ACCDOC_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update AC_ACCDOC set "+
               "  ID=:ID"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,BASEDOC_TYPE=:BASEDOC_TYPE"+
               " ,BASEDOC_NO=:BASEDOC_NO"+
               " ,BASEDOC_DATE=:BASEDOC_DATE"+
               " ,BASEDOC_ID=:BASEDOC_ID"+
               " ,NOTES=:NOTES"+
               " ,IS_GENERATED=:IS_GENERATED"+
               " ,IS_INSERTED=:IS_INSERTED"+
               " ,IS_POSTED=:IS_POSTED"+
               " ,ACCPERIOD_ID=:ACCPERIOD_ID"+
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
   String sql = "delete from AC_ACCDOC where "+
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
               " t.ACCPERIOD_ID"+
               " ,t.ACCSCHEMA_ID"+
                ",pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME"+
               " ,to_char(t.BASEDOC_DATE,'"+this.DATE_FORMAT_DB+"') BASEDOC_DATE"+
               " ,t.BASEDOC_ID"+
               " ,t.BASEDOC_NO"+
               " ,t.BASEDOC_TYPE"+
                ",pbo_client.get_code_by_id(t.client_id) CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
                ",pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT"+
                ",pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT"+
               " ,to_char(t.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,t.DOC_NO"+
               " ,t.ID"+
               " ,t.IS_GENERATED"+
               " ,t.IS_INSERTED"+
               " ,t.IS_POSTED"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.POSTEDBY"+
               " ,to_char(t.POSTEDON,'"+this.DATE_FORMAT_DB+"') POSTEDON"+
           " from AC_ACCDOC t"+
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
	  this.fields.put("ACCPERIOD_ID", new FieldDef("STRING"));
	  this.fields.put("ACCSCHEMA_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCSCHEMA_NAME", new FieldDef("STRING"));
	  this.fields.put("BASEDOC_DATE", new FieldDef("DATE"));
	  this.fields.put("BASEDOC_ID", new FieldDef("NUMBER"));
	  this.fields.put("BASEDOC_NO", new FieldDef("STRING"));
	  this.fields.put("BASEDOC_TYPE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CR_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("DB_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_GENERATED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_INSERTED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_POSTED", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("POSTEDBY", new FieldDef("STRING"));
	  this.fields.put("POSTEDON", new FieldDef("DATE"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
