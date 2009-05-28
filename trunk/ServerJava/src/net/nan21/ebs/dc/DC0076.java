/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0076 DC Controller: Price lists
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0076 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pl.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_COPY_FROM_LIST_IS") != null && !this.request.getParam("QRY_COPY_FROM_LIST_IS").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pl.COPY_FROM_LIST_IS like :COPY_FROM_LIST_IS");
      this.queryParams.put("COPY_FROM_LIST_IS",(String)this.request.getParam("QRY_COPY_FROM_LIST_IS"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pl.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("pl.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pbo_client.get_code_by_id(pl.client_id, 'N') CLIENT_CODE"+
               " ,pl.CLIENT_ID"+
               " ,pl.COPY_FROM_LIST_IS"+
               " ,pl.CREATEDBY"+
               " ,pl.CREATEDON"+
               " ,pl.CURRENCY"+
               " ,pl.ID"+
               " ,pl.MODIFIEDBY"+
               " ,pl.MODIFIEDON"+
               " ,pl.VALID_FROM"+
               " ,pl.VALID_TO"+
           " from MM_PRICE_LIST pl "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " pl.ID"+
               ",pbo_client.get_code_by_id(pl.client_id, 'N') CLIENT_CODE"+
               " ,pl.CLIENT_ID"+
               " ,pl.CURRENCY"+
               " ,pl.VALID_FROM"+
               " ,pl.VALID_TO"+
               " ,pl.COPY_FROM_LIST_IS"+
               " ,pl.CREATEDON"+
               " ,pl.CREATEDBY"+
               " ,pl.MODIFIEDON"+
               " ,pl.MODIFIEDBY"+
           " from MM_PRICE_LIST pl "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PRICE_LIST("+
               "  CLIENT_ID"+
               " ,COPY_FROM_LIST_IS"+
               " ,CURRENCY"+
               " ,ID"+
               " ,VALID_FROM"+
               " ,VALID_TO"+
           " ) values ( "+
               "  :CLIENT_ID"+
               " ,:COPY_FROM_LIST_IS"+
               " ,:CURRENCY"+
               " ,:ID"+
               " ,:VALID_FROM"+
               " ,:VALID_TO"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PRICELST_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PRICE_LIST set "+
               "  CLIENT_ID=:CLIENT_ID"+ 
               " ,COPY_FROM_LIST_IS=:COPY_FROM_LIST_IS"+ 
               " ,CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,CURRENCY=:CURRENCY"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,VALID_FROM=:VALID_FROM"+ 
               " ,VALID_TO=:VALID_TO"+ 
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
   String sql = "delete from MM_PRICE_LIST where "+
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
                "pbo_client.get_code_by_id(pl.client_id, 'N') CLIENT_CODE"+
               " ,pl.CLIENT_ID"+
               " ,pl.COPY_FROM_LIST_IS"+
               " ,pl.CREATEDBY"+
               " ,pl.CREATEDON"+
               " ,pl.CURRENCY"+
               " ,pl.ID"+
               " ,pl.MODIFIEDBY"+
               " ,pl.MODIFIEDON"+
               " ,pl.VALID_FROM"+
               " ,pl.VALID_TO"+
           " from MM_PRICE_LIST pl"+
        " where "+
     "      pl.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("COPY_FROM_LIST_IS", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("VALID_FROM", new FieldDef("DATE"));
	  this.fields.put("VALID_TO", new FieldDef("DATE"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
