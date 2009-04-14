/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0042 DC Controller: Accounting doc. line
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

public class DC0042 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACCDOC_ID like :ACCDOC_ID");
      this.queryParams.put("ACCDOC_ID",(String)this.request.getParam("QRY_ACCDOC_ID"));
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_CREATEDBY") != null && !this.request.getParam("QRY_CREATEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CREATEDBY like :CREATEDBY");
      this.queryParams.put("CREATEDBY",(String)this.request.getParam("QRY_CREATEDBY"));
    }
    if (this.request.getParam("QRY_CREATEDON") != null && !this.request.getParam("QRY_CREATEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CREATEDON like :CREATEDON");
      this.queryParams.put("CREATEDON",(String)this.request.getParam("QRY_CREATEDON"));
    }
    if (this.request.getParam("QRY_CR_ACCT") != null && !this.request.getParam("QRY_CR_ACCT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CR_ACCT like :CR_ACCT");
      this.queryParams.put("CR_ACCT",(String)this.request.getParam("QRY_CR_ACCT"));
    }
    if (this.request.getParam("QRY_CR_AMOUNT") != null && !this.request.getParam("QRY_CR_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CR_AMOUNT like :CR_AMOUNT");
      this.queryParams.put("CR_AMOUNT",(String)this.request.getParam("QRY_CR_AMOUNT"));
    }
    if (this.request.getParam("QRY_CURRENCY") != null && !this.request.getParam("QRY_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CURRENCY like :CURRENCY");
      this.queryParams.put("CURRENCY",(String)this.request.getParam("QRY_CURRENCY"));
    }
    if (this.request.getParam("QRY_DB_ACCT") != null && !this.request.getParam("QRY_DB_ACCT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DB_ACCT like :DB_ACCT");
      this.queryParams.put("DB_ACCT",(String)this.request.getParam("QRY_DB_ACCT"));
    }
    if (this.request.getParam("QRY_DB_AMOUNT") != null && !this.request.getParam("QRY_DB_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DB_AMOUNT like :DB_AMOUNT");
      this.queryParams.put("DB_AMOUNT",(String)this.request.getParam("QRY_DB_AMOUNT"));
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
    if (this.request.getParam("QRY_MODIFIEDBY") != null && !this.request.getParam("QRY_MODIFIEDBY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.MODIFIEDBY like :MODIFIEDBY");
      this.queryParams.put("MODIFIEDBY",(String)this.request.getParam("QRY_MODIFIEDBY"));
    }
    if (this.request.getParam("QRY_MODIFIEDON") != null && !this.request.getParam("QRY_MODIFIEDON").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.MODIFIEDON like :MODIFIEDON");
      this.queryParams.put("MODIFIEDON",(String)this.request.getParam("QRY_MODIFIEDON"));
    }
    if (this.request.getParam("QRY_NOTES") != null && !this.request.getParam("QRY_NOTES").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.NOTES like :NOTES");
      this.queryParams.put("NOTES",(String)this.request.getParam("QRY_NOTES"));
    }
    if (this.request.getParam("QRY_ORIG_AMOUNT") != null && !this.request.getParam("QRY_ORIG_AMOUNT").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ORIG_AMOUNT like :ORIG_AMOUNT");
      this.queryParams.put("ORIG_AMOUNT",(String)this.request.getParam("QRY_ORIG_AMOUNT"));
    }
    if (this.request.getParam("QRY_ORIG_CURRENCY") != null && !this.request.getParam("QRY_ORIG_CURRENCY").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ORIG_CURRENCY like :ORIG_CURRENCY");
      this.queryParams.put("ORIG_CURRENCY",(String)this.request.getParam("QRY_ORIG_CURRENCY"));
    }
    if (this.request.getParam("QRY_XRATE") != null && !this.request.getParam("QRY_XRATE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.XRATE like :XRATE");
      this.queryParams.put("XRATE",(String)this.request.getParam("QRY_XRATE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ACCDOC_ID"+
               " ,pbo_acc.get_accdoc_name_by_id(t.accdoc_id) ACCDOC_NAME"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CR_ACCT"+
               " ,t.CR_AMOUNT"+
               " ,t.CURRENCY"+
               " ,t.DB_ACCT"+
               " ,t.DB_AMOUNT"+
               " ,t.ID"+
               " ,t.IS_GENERATED"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.ORIG_AMOUNT"+
               " ,t.ORIG_CURRENCY"+
               " ,t.XRATE"+
           " from AC_ACCDOC_LINE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.ACCDOC_ID"+
               ",pbo_acc.get_accdoc_name_by_id(t.accdoc_id) ACCDOC_NAME"+
               " ,t.CLIENT_ID"+
               " ,t.NOTES"+
               " ,t.DB_ACCT"+
               " ,t.CR_ACCT"+
               " ,t.DB_AMOUNT"+
               " ,t.CR_AMOUNT"+
               " ,t.CURRENCY"+
               " ,t.XRATE"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CREATEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.IS_GENERATED"+
               " ,t.ORIG_AMOUNT"+
               " ,t.ORIG_CURRENCY"+
           " from AC_ACCDOC_LINE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into AC_ACCDOC_LINE("+
               "  ACCDOC_ID"+
               " ,CLIENT_ID"+
               " ,CREATEDBY"+
               " ,CREATEDON"+
               " ,CR_ACCT"+
               " ,CR_AMOUNT"+
               " ,CURRENCY"+
               " ,DB_ACCT"+
               " ,DB_AMOUNT"+
               " ,ID"+
               " ,IS_GENERATED"+
               " ,MODIFIEDBY"+
               " ,NOTES"+
               " ,ORIG_AMOUNT"+
               " ,ORIG_CURRENCY"+
               " ,XRATE"+
           " ) values ( "+
               "  :ACCDOC_ID"+
               " ,:CLIENT_ID"+
               " ,:CREATEDBY"+
               " ,:CREATEDON"+
               " ,:CR_ACCT"+
               " ,:CR_AMOUNT"+
               " ,:CURRENCY"+
               " ,:DB_ACCT"+
               " ,:DB_AMOUNT"+
               " ,:ID"+
               " ,:IS_GENERATED"+
               " ,:MODIFIEDBY"+
               " ,:NOTES"+
               " ,:ORIG_AMOUNT"+
               " ,:ORIG_CURRENCY"+
               " ,:XRATE"+
    ")";
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update AC_ACCDOC_LINE set "+
               "  CR_AMOUNT=:CR_AMOUNT"+
               " ,ID=:ID"+
               " ,ACCDOC_ID=:ACCDOC_ID"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,DB_ACCT=:DB_ACCT"+
               " ,CR_ACCT=:CR_ACCT"+
               " ,DB_AMOUNT=:DB_AMOUNT"+
               " ,CURRENCY=:CURRENCY"+
               " ,XRATE=:XRATE"+
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
   String sql = "delete from AC_ACCDOC_LINE where "+
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
               " t.ACCDOC_ID"+
                ",pbo_acc.get_accdoc_name_by_id(t.accdoc_id) ACCDOC_NAME"+
               " ,t.CLIENT_ID"+
               " ,t.CREATEDBY"+
               " ,to_char(t.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,t.CR_ACCT"+
               " ,t.CR_AMOUNT"+
               " ,t.CURRENCY"+
               " ,t.DB_ACCT"+
               " ,t.DB_AMOUNT"+
               " ,t.ID"+
               " ,t.IS_GENERATED"+
               " ,t.MODIFIEDBY"+
               " ,to_char(t.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,t.NOTES"+
               " ,t.ORIG_AMOUNT"+
               " ,t.ORIG_CURRENCY"+
               " ,t.XRATE"+
           " from AC_ACCDOC_LINE t"+
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
	  this.fields.put("ACCDOC_ID", new FieldDef("NUMBER"));
	  this.fields.put("ACCDOC_NAME", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CR_ACCT", new FieldDef("STRING"));
	  this.fields.put("CR_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DB_ACCT", new FieldDef("STRING"));
	  this.fields.put("DB_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_GENERATED", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("ORIG_AMOUNT", new FieldDef("NUMBER"));
	  this.fields.put("ORIG_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("XRATE", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
