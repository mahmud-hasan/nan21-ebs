/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0026 DC Controller: Received invoice
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

public class DC0026 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_DOC_TYPE") != null && !this.request.getParam("QRY_DOC_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.DOC_TYPE like :DOC_TYPE");
      this.queryParams.put("DOC_TYPE",(String)this.request.getParam("QRY_DOC_TYPE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_ISSUER_ID") != null && !this.request.getParam("QRY_ISSUER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.ISSUER_ID like :ISSUER_ID");
      this.queryParams.put("ISSUER_ID",(String)this.request.getParam("QRY_ISSUER_ID"));
    }
    if (this.request.getParam("QRY_RECEIVER_ID") != null && !this.request.getParam("QRY_RECEIVER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.RECEIVER_ID like :RECEIVER_ID");
      this.queryParams.put("RECEIVER_ID",(String)this.request.getParam("QRY_RECEIVER_ID"));
    }
    if (this.request.getParam("QRY_REF_RINVOICE_ID") != null && !this.request.getParam("QRY_REF_RINVOICE_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("rinv.REF_RINVOICE_ID like :REF_RINVOICE_ID");
      this.queryParams.put("REF_RINVOICE_ID",(String)this.request.getParam("QRY_REF_RINVOICE_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " rinv.CLIENT_ID"+
               " ,(select code from client where id=rinv.client_id) CLIENT_NAME"+
               " ,rinv.CREATEDBY"+
               " ,to_char(rinv.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,rinv.DOC_CURRENCY"+
               " ,to_char(rinv.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,rinv.DOC_NO"+
               " ,rinv.DOC_TYPE"+
               " ,to_char(rinv.DUE_DATE,'"+this.DATE_FORMAT_DB+"') DUE_DATE"+
               " ,rinv.ID"+
               " ,rinv.INSERTEDBY"+
               " ,to_char(rinv.INSERTEDON,'"+this.DATE_FORMAT_DB+"') INSERTEDON"+
               " ,rinv.ISSUER_ID"+
               " ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME"+
               " ,rinv.IS_INSERTED"+
               " ,rinv.IS_PAYABLE"+
               " ,rinv.IS_PAYED"+
               " ,rinv.MODIFIEDBY"+
               " ,to_char(rinv.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,rinv.NOTES"+
               " ,rinv.RECEIVER_ID"+
               " ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME"+
               " ,rinv.REF_RINVOICE_ID"+
               " ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME"+
               " ,rinv.TOTAL_AMOUNT"+
               " ,rinv.TOTAL_NET_AMOUNT"+
               " ,rinv.TOTAL_TAX_AMOUNT"+
           " from RINVOICE rinv "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " rinv.ID"+
               " ,rinv.CLIENT_ID"+
               ",(select code from client where id=rinv.client_id) CLIENT_NAME"+
               ",(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME"+
               " ,rinv.RECEIVER_ID"+
               " ,rinv.DOC_TYPE"+
               " ,rinv.DOC_NO"+
               " ,to_char(rinv.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               ",pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME"+
               " ,rinv.ISSUER_ID"+
               " ,rinv.DOC_CURRENCY"+
               " ,rinv.TOTAL_AMOUNT"+
               " ,rinv.TOTAL_NET_AMOUNT"+
               " ,rinv.TOTAL_TAX_AMOUNT"+
               " ,to_char(rinv.DUE_DATE,'"+this.DATE_FORMAT_DB+"') DUE_DATE"+
               " ,rinv.IS_INSERTED"+
               " ,rinv.IS_PAYABLE"+
               " ,rinv.IS_PAYED"+
               " ,rinv.REF_RINVOICE_ID"+
               " ,rinv.NOTES"+
               ",(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME"+
               " ,rinv.INSERTEDBY"+
               " ,to_char(rinv.INSERTEDON,'"+this.DATE_FORMAT_DB+"') INSERTEDON"+
               " ,to_char(rinv.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,rinv.CREATEDBY"+
               " ,to_char(rinv.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,rinv.MODIFIEDBY"+
           " from RINVOICE rinv "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into RINVOICE("+
               "  CLIENT_ID"+
               " ,DOC_CURRENCY"+
               " ,DOC_DATE"+
               " ,DOC_NO"+
               " ,DOC_TYPE"+
               " ,DUE_DATE"+
               " ,ID"+
               " ,ISSUER_ID"+
               " ,IS_INSERTED"+
               " ,IS_PAYABLE"+
               " ,IS_PAYED"+
               " ,NOTES"+
               " ,RECEIVER_ID"+
               " ,REF_RINVOICE_ID"+
               " ,TOTAL_AMOUNT"+
               " ,TOTAL_NET_AMOUNT"+
               " ,TOTAL_TAX_AMOUNT"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:DOC_CURRENCY"+
               " ,:DOC_DATE"+
               " ,:DOC_NO"+
               " ,:DOC_TYPE"+
               " ,:DUE_DATE"+
               " ,:ID"+
               " ,:ISSUER_ID"+
               " ,:IS_INSERTED"+
               " ,:IS_PAYABLE"+
               " ,:IS_PAYED"+
               " ,:NOTES"+
               " ,:RECEIVER_ID"+
               " ,:REF_RINVOICE_ID"+
               " ,:TOTAL_AMOUNT"+
               " ,:TOTAL_NET_AMOUNT"+
               " ,:TOTAL_TAX_AMOUNT"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_rinv_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update RINVOICE set "+
               "  ID=:ID"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,DOC_TYPE=:DOC_TYPE"+
               " ,DOC_CURRENCY=:DOC_CURRENCY"+
               " ,TOTAL_NET_AMOUNT=:TOTAL_NET_AMOUNT"+
               " ,TOTAL_TAX_AMOUNT=:TOTAL_TAX_AMOUNT"+
               " ,TOTAL_AMOUNT=:TOTAL_AMOUNT"+
               " ,ISSUER_ID=:ISSUER_ID"+
               " ,RECEIVER_ID=:RECEIVER_ID"+
               " ,DUE_DATE=:DUE_DATE"+
               " ,IS_INSERTED=:IS_INSERTED"+
               " ,IS_PAYABLE=:IS_PAYABLE"+
               " ,IS_PAYED=:IS_PAYED"+
               " ,REF_RINVOICE_ID=:REF_RINVOICE_ID"+
               " ,NOTES=:NOTES"+
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
   String sql = "delete from RINVOICE where "+
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
               " rinv.CLIENT_ID"+
                ",(select code from client where id=rinv.client_id) CLIENT_NAME"+
               " ,rinv.CREATEDBY"+
               " ,to_char(rinv.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,rinv.DOC_CURRENCY"+
               " ,to_char(rinv.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,rinv.DOC_NO"+
               " ,rinv.DOC_TYPE"+
               " ,to_char(rinv.DUE_DATE,'"+this.DATE_FORMAT_DB+"') DUE_DATE"+
               " ,rinv.ID"+
               " ,rinv.INSERTEDBY"+
               " ,to_char(rinv.INSERTEDON,'"+this.DATE_FORMAT_DB+"') INSERTEDON"+
               " ,rinv.ISSUER_ID"+
                ",pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME"+
               " ,rinv.IS_INSERTED"+
               " ,rinv.IS_PAYABLE"+
               " ,rinv.IS_PAYED"+
               " ,rinv.MODIFIEDBY"+
               " ,to_char(rinv.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,rinv.NOTES"+
               " ,rinv.RECEIVER_ID"+
                ",(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME"+
               " ,rinv.REF_RINVOICE_ID"+
                ",(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME"+
               " ,rinv.TOTAL_AMOUNT"+
               " ,rinv.TOTAL_NET_AMOUNT"+
               " ,rinv.TOTAL_TAX_AMOUNT"+
           " from RINVOICE rinv"+
        " where "+
     "      rinv.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_NAME", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DOC_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("DOC_TYPE", new FieldDef("STRING"));
	  this.fields.put("DUE_DATE", new FieldDef("DATE"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("INSERTEDBY", new FieldDef("STRING"));
	  this.fields.put("INSERTEDON", new FieldDef("DATE"));
	  this.fields.put("ISSUER_ID", new FieldDef("NUMBER"));
	  this.fields.put("ISSUER_NAME", new FieldDef("STRING"));
	  this.fields.put("IS_INSERTED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_PAYABLE", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_PAYED", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("RECEIVER_ID", new FieldDef("NUMBER"));
	  this.fields.put("RECEIVER_NAME", new FieldDef("STRING"));
	  this.fields.put("REF_RINVOICE_ID", new FieldDef("NUMBER"));
	  this.fields.put("REF_RINVOICE_NAME", new FieldDef("STRING"));
	  this.fields.put("TOTAL_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("TOTAL_NET_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("TOTAL_TAX_AMOUNT", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
