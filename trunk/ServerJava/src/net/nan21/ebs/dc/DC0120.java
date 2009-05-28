/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0120 DC Controller: Import strategy fields
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0120 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_DATA_LENGTH") != null && !this.request.getParam("QRY_DATA_LENGTH").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DATA_LENGTH like :DATA_LENGTH");
      this.queryParams.put("DATA_LENGTH",(String)this.request.getParam("QRY_DATA_LENGTH"));
    }
    if (this.request.getParam("QRY_DATA_TYPE") != null && !this.request.getParam("QRY_DATA_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DATA_TYPE like :DATA_TYPE");
      this.queryParams.put("DATA_TYPE",(String)this.request.getParam("QRY_DATA_TYPE"));
    }
    if (this.request.getParam("QRY_DEST_NAME") != null && !this.request.getParam("QRY_DEST_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_NAME like :DEST_NAME");
      this.queryParams.put("DEST_NAME",(String)this.request.getParam("QRY_DEST_NAME"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IMPSTG_ID") != null && !this.request.getParam("QRY_IMPSTG_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IMPSTG_ID like :IMPSTG_ID");
      this.queryParams.put("IMPSTG_ID",(String)this.request.getParam("QRY_IMPSTG_ID"));
    }
    if (this.request.getParam("QRY_IN_DEST") != null && !this.request.getParam("QRY_IN_DEST").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IN_DEST like :IN_DEST");
      this.queryParams.put("IN_DEST",(String)this.request.getParam("QRY_IN_DEST"));
    }
    if (this.request.getParam("QRY_IN_SRC") != null && !this.request.getParam("QRY_IN_SRC").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IN_SRC like :IN_SRC");
      this.queryParams.put("IN_SRC",(String)this.request.getParam("QRY_IN_SRC"));
    }
    if (this.request.getParam("QRY_POSITION") != null && !this.request.getParam("QRY_POSITION").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.POSITION like :POSITION");
      this.queryParams.put("POSITION",(String)this.request.getParam("QRY_POSITION"));
    }
    if (this.request.getParam("QRY_SRC_NAME") != null && !this.request.getParam("QRY_SRC_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.SRC_NAME like :SRC_NAME");
      this.queryParams.put("SRC_NAME",(String)this.request.getParam("QRY_SRC_NAME"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DATA_LENGTH"+
               " ,t.DATA_TYPE"+
               " ,t.DEST_NAME"+
               " ,t.ID"+
               " ,t.IMPSTG_ID"+
               " ,t.IN_DEST"+
               " ,t.IN_SRC"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.POSITION"+
               " ,t.SRC_NAME"+
           " from IE_IMP_STRATEGY_FIELD t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.IMPSTG_ID"+
               " ,t.POSITION"+
               " ,t.IN_SRC"+
               " ,t.IN_DEST"+
               " ,t.SRC_NAME"+
               " ,t.DEST_NAME"+
               " ,t.DATA_TYPE"+
               " ,t.DATA_LENGTH"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from IE_IMP_STRATEGY_FIELD t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into IE_IMP_STRATEGY_FIELD("+
               "  DATA_LENGTH"+
               " ,DATA_TYPE"+
               " ,DEST_NAME"+
               " ,ID"+
               " ,IMPSTG_ID"+
               " ,IN_DEST"+
               " ,IN_SRC"+
               " ,POSITION"+
               " ,SRC_NAME"+
           " ) values ( "+
               "  :DATA_LENGTH"+
               " ,:DATA_TYPE"+
               " ,:DEST_NAME"+
               " ,:ID"+
               " ,:IMPSTG_ID"+
               " ,:IN_DEST"+
               " ,:IN_SRC"+
               " ,:POSITION"+
               " ,:SRC_NAME"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_IMPSTGFLD_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update IE_IMP_STRATEGY_FIELD set "+
               "  CREATEDBY=:CREATEDBY"+ 
               " ,CREATEDON=:CREATEDON"+ 
               " ,DATA_LENGTH=:DATA_LENGTH"+ 
               " ,DATA_TYPE=:DATA_TYPE"+ 
               " ,DEST_NAME=:DEST_NAME"+ 
               " ,ID=:ID"+ 
               " ,IMPSTG_ID=:IMPSTG_ID"+ 
               " ,IN_DEST=:IN_DEST"+ 
               " ,IN_SRC=:IN_SRC"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,POSITION=:POSITION"+ 
               " ,SRC_NAME=:SRC_NAME"+ 
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
   String sql = "delete from IE_IMP_STRATEGY_FIELD where "+
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
               " t.CREATEDBY"+
               " ,t.CREATEDON"+
               " ,t.DATA_LENGTH"+
               " ,t.DATA_TYPE"+
               " ,t.DEST_NAME"+
               " ,t.ID"+
               " ,t.IMPSTG_ID"+
               " ,t.IN_DEST"+
               " ,t.IN_SRC"+
               " ,t.MODIFIEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.POSITION"+
               " ,t.SRC_NAME"+
           " from IE_IMP_STRATEGY_FIELD t"+
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
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DATA_LENGTH", new FieldDef("NUMBER"));
	  this.fields.put("DATA_TYPE", new FieldDef("STRING"));
	  this.fields.put("DEST_NAME", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IMPSTG_ID", new FieldDef("NUMBER"));
	  this.fields.put("IN_DEST", new FieldDef("BOOLEAN"));
	  this.fields.put("IN_SRC", new FieldDef("BOOLEAN"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("POSITION", new FieldDef("NUMBER"));
	  this.fields.put("SRC_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
