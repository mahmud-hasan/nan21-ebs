/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0028 DC Controller: Payment doc. types
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0028 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_CODE") != null && !this.request.getParam("QRY_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CODE like :CODE");
      this.queryParams.put("CODE",(String)this.request.getParam("QRY_CODE"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,CODE"+
               " ,NAME"+
               " ,COMPENSATION"+
               " ,PAYABLE"+
               " ,RECEIVABLE"+
               " ,PRINT_REPORT"+
               " ,CLIENT_ID"+
               " ,(select t.code from client t where t.id = client_id) CLIENT_CODE"+
           " from PAYMENT_DOC_TYPE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               ",(select t.code from client t where t.id = client_id) CLIENT_CODE"+
               " ,CLIENT_ID"+
               " ,CODE"+
               " ,NAME"+
               " ,COMPENSATION"+
               " ,PAYABLE"+
               " ,RECEIVABLE"+
               " ,PRINT_REPORT"+
           " from PAYMENT_DOC_TYPE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into PAYMENT_DOC_TYPE("+
               "  ID"+
               " ,CODE"+
               " ,NAME"+
               " ,COMPENSATION"+
               " ,PAYABLE"+
               " ,RECEIVABLE"+
               " ,PRINT_REPORT"+
               " ,CLIENT_ID"+
           " ) values ( "+
               "  :ID"+
               " ,:CODE"+
               " ,:NAME"+
               " ,:COMPENSATION"+
               " ,:PAYABLE"+
               " ,:RECEIVABLE"+
               " ,:PRINT_REPORT"+
               " ,:CLIENT_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PAYDOCTYPE_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update PAYMENT_DOC_TYPE set "+
               "  CLIENT_ID=:CLIENT_ID"+ 
               " ,CODE=:CODE"+ 
               " ,COMPENSATION=:COMPENSATION"+ 
               " ,ID=:ID"+ 
               " ,NAME=:NAME"+ 
               " ,PAYABLE=:PAYABLE"+ 
               " ,PRINT_REPORT=:PRINT_REPORT"+ 
               " ,RECEIVABLE=:RECEIVABLE"+ 
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
   String sql = "delete from PAYMENT_DOC_TYPE where "+
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
               " ID"+
               " ,CODE"+
               " ,NAME"+
               " ,COMPENSATION"+
               " ,PAYABLE"+
               " ,RECEIVABLE"+
               " ,PRINT_REPORT"+
               " ,CLIENT_ID"+
                ",(select t.code from client t where t.id = client_id) CLIENT_CODE"+
           " from PAYMENT_DOC_TYPE "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("COMPENSATION", new FieldDef("BOOLEAN"));
	  this.fields.put("PAYABLE", new FieldDef("BOOLEAN"));
	  this.fields.put("RECEIVABLE", new FieldDef("BOOLEAN"));
	  this.fields.put("PRINT_REPORT", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.get("MODIFIEDON").setInDS(false);
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
