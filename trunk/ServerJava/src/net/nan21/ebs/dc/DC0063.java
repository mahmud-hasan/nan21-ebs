/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0063 DC Controller: Purchase orders
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

public class DC0063 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_BPARTNER_CONTACT_ID") != null && !this.request.getParam("QRY_BPARTNER_CONTACT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.BPARTNER_CONTACT_ID like :BPARTNER_CONTACT_ID");
      this.queryParams.put("BPARTNER_CONTACT_ID",(String)this.request.getParam("QRY_BPARTNER_CONTACT_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_REF_PORDER_ID") != null && !this.request.getParam("QRY_REF_PORDER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.REF_PORDER_ID like :REF_PORDER_ID");
      this.queryParams.put("REF_PORDER_ID",(String)this.request.getParam("QRY_REF_PORDER_ID"));
    }
    if (this.request.getParam("QRY_TOTAL_AMOUNT") != null && !this.request.getParam("QRY_TOTAL_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("po.TOTAL_AMOUNT like :TOTAL_AMOUNT");
      this.queryParams.put("TOTAL_AMOUNT",(String)this.request.getParam("QRY_TOTAL_AMOUNT"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " po.BPARTNER_CONTACT_ID"+
               " ,po.BPARTNER_ID"+
               " ,pbo_bpartner.get_name_by_id(po.BPARTNER_ID) BPARTNER_NAME"+
               " ,(select code from client where id = po.client_id) CLIENT_CODE"+
               " ,po.CLIENT_ID"+
               " ,po.CREATEDBY"+
               " ,to_char(po.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,po.CURRENCY"+
               " ,to_char(po.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,po.DOC_NO"+
               " ,po.ID"+
               " ,po.MODIFIEDBY"+
               " ,to_char(po.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,po.REF_PORDER_ID"+
               " ,po.TOTAL_AMOUNT"+
           " from PURCHASE_ORDER po "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " po.ID"+
               ",(select code from client where id = po.client_id) CLIENT_CODE"+
               " ,po.CLIENT_ID"+
               " ,po.DOC_NO"+
               " ,to_char(po.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,po.BPARTNER_ID"+
               ",pbo_bpartner.get_name_by_id(po.BPARTNER_ID) BPARTNER_NAME"+
               " ,po.BPARTNER_CONTACT_ID"+
               " ,po.REF_PORDER_ID"+
               " ,po.TOTAL_AMOUNT"+
               " ,po.CURRENCY"+
               " ,to_char(po.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,po.CREATEDBY"+
               " ,to_char(po.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,po.MODIFIEDBY"+
           " from PURCHASE_ORDER po "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into PURCHASE_ORDER("+
               "  BPARTNER_CONTACT_ID"+
               " ,BPARTNER_ID"+
               " ,CLIENT_ID"+
               " ,CURRENCY"+
               " ,DOC_DATE"+
               " ,DOC_NO"+
               " ,ID"+
               " ,REF_PORDER_ID"+
               " ,TOTAL_AMOUNT"+
           " ) values ( "+
               "  :BPARTNER_CONTACT_ID"+
               " ,:BPARTNER_ID"+
               " ,:CLIENT_ID"+
               " ,:CURRENCY"+
               " ,:DOC_DATE"+
               " ,:DOC_NO"+
               " ,:ID"+
               " ,:REF_PORDER_ID"+
               " ,:TOTAL_AMOUNT"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_porder_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PURCHASE_ORDER set "+
               "  ID=:ID"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,BPARTNER_ID=:BPARTNER_ID"+
               " ,BPARTNER_CONTACT_ID=:BPARTNER_CONTACT_ID"+
               " ,CURRENCY=:CURRENCY"+
               " ,TOTAL_AMOUNT=:TOTAL_AMOUNT"+
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
   String sql = "delete from PURCHASE_ORDER where "+
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
               " po.BPARTNER_CONTACT_ID"+
               " ,po.BPARTNER_ID"+
                ",pbo_bpartner.get_name_by_id(po.BPARTNER_ID) BPARTNER_NAME"+
                ",(select code from client where id = po.client_id) CLIENT_CODE"+
               " ,po.CLIENT_ID"+
               " ,po.CREATEDBY"+
               " ,to_char(po.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,po.CURRENCY"+
               " ,to_char(po.DOC_DATE,'"+this.DATE_FORMAT_DB+"') DOC_DATE"+
               " ,po.DOC_NO"+
               " ,po.ID"+
               " ,po.MODIFIEDBY"+
               " ,to_char(po.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,po.REF_PORDER_ID"+
               " ,po.TOTAL_AMOUNT"+
           " from PURCHASE_ORDER po"+
        " where "+
     "      po.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("BPARTNER_CONTACT_ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("REF_PORDER_ID", new FieldDef("NUMBER"));
	  this.fields.put("TOTAL_AMOUNT", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
