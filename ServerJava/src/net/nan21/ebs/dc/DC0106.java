/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0106 DC Controller: Documents serial no. range
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0106 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_DOCSER_ID") != null && !this.request.getParam("QRY_DOCSER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOCSER_ID like :DOCSER_ID");
      this.queryParams.put("DOCSER_ID",(String)this.request.getParam("QRY_DOCSER_ID"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.DOCSER_ID"+
               " ,t.ID"+
               " ,t.IS_CLOSED"+
               " ,t.IS_INSTALLED"+
               " ,t.MAXVAL"+
               " ,t.MINVAL"+
           " from DOCUMENT_SERIAL_RANGE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.DOCSER_ID"+
               " ,t.MINVAL"+
               " ,t.MAXVAL"+
               " ,t.IS_INSTALLED"+
               " ,t.IS_CLOSED"+
           " from DOCUMENT_SERIAL_RANGE t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into DOCUMENT_SERIAL_RANGE("+
               "  DOCSER_ID"+
               " ,ID"+
               " ,MAXVAL"+
               " ,MINVAL"+
           " ) values ( "+
               "  :DOCSER_ID"+
               " ,:ID"+
               " ,:MAXVAL"+
               " ,:MINVAL"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_DOCSERRNG_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update DOCUMENT_SERIAL_RANGE set "+
               "  DOCSER_ID=:DOCSER_ID"+ 
               " ,ID=:ID"+ 
               " ,IS_INSTALLED=:IS_INSTALLED"+ 
               " ,MAXVAL=:MAXVAL"+ 
               " ,MINVAL=:MINVAL"+ 
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
   String sql = "delete from DOCUMENT_SERIAL_RANGE where "+
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
               " t.DOCSER_ID"+
               " ,t.ID"+
               " ,t.IS_CLOSED"+
               " ,t.IS_INSTALLED"+
               " ,t.MAXVAL"+
               " ,t.MINVAL"+
           " from DOCUMENT_SERIAL_RANGE t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("DOCSER_ID", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_CLOSED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_INSTALLED", new FieldDef("BOOLEAN"));
	  this.fields.put("MAXVAL", new FieldDef("NUMBER"));
	  this.fields.put("MINVAL", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
