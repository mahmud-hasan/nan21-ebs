/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0035 DC Controller: Contracts
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0035 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_DOC_NO") != null && !this.request.getParam("QRY_DOC_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.DOC_NO like :DOC_NO");
      this.queryParams.put("DOC_NO",(String)this.request.getParam("QRY_DOC_NO"));
    }
    if (this.request.getParam("QRY_DOC_DATE") != null && !this.request.getParam("QRY_DOC_DATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.DOC_DATE like :DOC_DATE");
      this.queryParams.put("DOC_DATE",(String)this.request.getParam("QRY_DOC_DATE"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_CUST_BPARTNER_ID") != null && !this.request.getParam("QRY_CUST_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.CUST_BPARTNER_ID like :CUST_BPARTNER_ID");
      this.queryParams.put("CUST_BPARTNER_ID",(String)this.request.getParam("QRY_CUST_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_CONTRTYPE_CODE") != null && !this.request.getParam("QRY_CONTRTYPE_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.CONTRTYPE_CODE like :CONTRTYPE_CODE");
      this.queryParams.put("CONTRTYPE_CODE",(String)this.request.getParam("QRY_CONTRTYPE_CODE"));
    }
    if (this.request.getParam("QRY_BPCONTR_ID") != null && !this.request.getParam("QRY_BPCONTR_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.BPCONTR_ID like :BPCONTR_ID");
      this.queryParams.put("BPCONTR_ID",(String)this.request.getParam("QRY_BPCONTR_ID"));
    }
    if (this.request.getParam("QRY_CONTRSTAT_CODE") != null && !this.request.getParam("QRY_CONTRSTAT_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.CONTRSTAT_CODE like :CONTRSTAT_CODE");
      this.queryParams.put("CONTRSTAT_CODE",(String)this.request.getParam("QRY_CONTRSTAT_CODE"));
    }
    if (this.request.getParam("QRY_SUPP_BPARTNER_ID") != null && !this.request.getParam("QRY_SUPP_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("c.SUPP_BPARTNER_ID like :SUPP_BPARTNER_ID");
      this.queryParams.put("SUPP_BPARTNER_ID",(String)this.request.getParam("QRY_SUPP_BPARTNER_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " (select t.name from bpartner t where t.id = c.supp_bpartner_id) SUPP_BPARTNER_NAME"+
               " ,(select tt.doc_no||'/'||tt.doc_date from bp_contract tt where tt.id = c.bpcontr_id ) BPCONTR_NAME"+
               " ,c.ID"+
               " ,c.DOC_NO"+
               " ,c.DOC_DATE"+
               " ,c.CLIENT_ID"+
               " ,c.CUST_BPARTNER_ID"+
               " ,c.CONTRTYPE_CODE"+
               " ,c.STARTDATE"+
               " ,c.ENDDATE"+
               " ,c.NOTES"+
               " ,c.BPCONTR_ID"+
               " ,c.CREATEDON"+
               " ,c.CREATEDBY"+
               " ,c.MODIFIEDON"+
               " ,c.MODIFIEDBY"+
               " ,c.CONTRSTAT_CODE"+
               " ,c.SUPP_BPARTNER_ID"+
               " ,(select t1.code from client t1 where t1.id = client_id) CLIENT_NAME"+
               " ,(select t.name from bpartner t where t.id = c.cust_bpartner_id) CUST_BPARTNER_NAME"+
           " from BP_CONTRACT c "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " c.ID"+
               ",(select t1.code from client t1 where t1.id = client_id) CLIENT_NAME"+
               " ,c.CLIENT_ID"+
               " ,c.DOC_NO"+
               " ,c.DOC_DATE"+
               " ,c.CUST_BPARTNER_ID"+
               ",(select t.name from bpartner t where t.id = c.cust_bpartner_id) CUST_BPARTNER_NAME"+
               " ,c.SUPP_BPARTNER_ID"+
               ",(select t.name from bpartner t where t.id = c.supp_bpartner_id) SUPP_BPARTNER_NAME"+
               " ,c.CONTRTYPE_CODE"+
               " ,c.STARTDATE"+
               " ,c.ENDDATE"+
               ",(select tt.doc_no||'/'||tt.doc_date from bp_contract tt where tt.id = c.bpcontr_id ) BPCONTR_NAME"+
               " ,c.BPCONTR_ID"+
               " ,c.NOTES"+
               " ,c.CREATEDON"+
               " ,c.CREATEDBY"+
               " ,c.MODIFIEDON"+
               " ,c.MODIFIEDBY"+
               " ,c.CONTRSTAT_CODE"+
           " from BP_CONTRACT c "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into BP_CONTRACT("+
               "  ID"+
               " ,DOC_NO"+
               " ,DOC_DATE"+
               " ,CLIENT_ID"+
               " ,CUST_BPARTNER_ID"+
               " ,CONTRTYPE_CODE"+
               " ,STARTDATE"+
               " ,ENDDATE"+
               " ,NOTES"+
               " ,BPCONTR_ID"+
               " ,CREATEDBY"+
               " ,MODIFIEDBY"+
               " ,CONTRSTAT_CODE"+
               " ,SUPP_BPARTNER_ID"+
           " ) values ( "+
               "  :ID"+
               " ,:DOC_NO"+
               " ,:DOC_DATE"+
               " ,:CLIENT_ID"+
               " ,:CUST_BPARTNER_ID"+
               " ,:CONTRTYPE_CODE"+
               " ,:STARTDATE"+
               " ,:ENDDATE"+
               " ,:NOTES"+
               " ,:BPCONTR_ID"+
               " ,:CREATEDBY"+
               " ,:MODIFIEDBY"+
               " ,:CONTRSTAT_CODE"+
               " ,:SUPP_BPARTNER_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_BPCONTR_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update BP_CONTRACT set "+
               "  ID=:ID"+
               " ,DOC_NO=:DOC_NO"+
               " ,DOC_DATE=:DOC_DATE"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,CUST_BPARTNER_ID=:CUST_BPARTNER_ID"+
               " ,CONTRTYPE_CODE=:CONTRTYPE_CODE"+
               " ,STARTDATE=:STARTDATE"+
               " ,ENDDATE=:ENDDATE"+
               " ,NOTES=:NOTES"+
               " ,BPCONTR_ID=:BPCONTR_ID"+
               " ,CONTRSTAT_CODE=:CONTRSTAT_CODE"+
               " ,SUPP_BPARTNER_ID=:SUPP_BPARTNER_ID"+
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
   String sql = "delete from BP_CONTRACT where "+
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
                "(select t.name from bpartner t where t.id = c.supp_bpartner_id) SUPP_BPARTNER_NAME"+
                ",(select tt.doc_no||'/'||tt.doc_date from bp_contract tt where tt.id = c.bpcontr_id ) BPCONTR_NAME"+
               " ,c.ID"+
               " ,c.DOC_NO"+
               " ,c.DOC_DATE"+
               " ,c.CLIENT_ID"+
               " ,c.CUST_BPARTNER_ID"+
               " ,c.CONTRTYPE_CODE"+
               " ,c.STARTDATE"+
               " ,c.ENDDATE"+
               " ,c.NOTES"+
               " ,c.BPCONTR_ID"+
               " ,c.CREATEDON"+
               " ,c.CREATEDBY"+
               " ,c.MODIFIEDON"+
               " ,c.MODIFIEDBY"+
               " ,c.CONTRSTAT_CODE"+
               " ,c.SUPP_BPARTNER_ID"+
                ",(select t1.code from client t1 where t1.id = client_id) CLIENT_NAME"+
                ",(select t.name from bpartner t where t.id = c.cust_bpartner_id) CUST_BPARTNER_NAME"+
           " from BP_CONTRACT c"+
        " where "+
     "      c.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("SUPP_BPARTNER_NAME", new FieldDef("STRING"));
	  this.fields.put("BPCONTR_NAME", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CUST_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CONTRTYPE_CODE", new FieldDef("STRING"));
	  this.fields.put("STARTDATE", new FieldDef("DATE"));
	  this.fields.put("ENDDATE", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("BPCONTR_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("CONTRSTAT_CODE", new FieldDef("STRING"));
	  this.fields.put("SUPP_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_NAME", new FieldDef("STRING"));
	  this.fields.put("CUST_BPARTNER_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
