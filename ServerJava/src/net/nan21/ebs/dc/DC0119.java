/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0119 DC Controller: Import strategies
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0119 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_FILE_TYPE") != null && !this.request.getParam("QRY_FILE_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.FILE_TYPE like :FILE_TYPE");
      this.queryParams.put("FILE_TYPE",(String)this.request.getParam("QRY_FILE_TYPE"));
    }
    if (this.request.getParam("QRY_IMPSTGGRP_ID") != null && !this.request.getParam("QRY_IMPSTGGRP_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IMPSTGGRP_ID like :IMPSTGGRP_ID");
      this.queryParams.put("IMPSTGGRP_ID",(String)this.request.getParam("QRY_IMPSTGGRP_ID"));
    }
    if (this.request.getParam("QRY_ACTIVE") != null && !this.request.getParam("QRY_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ACTIVE like :ACTIVE");
      this.queryParams.put("ACTIVE",(String)this.request.getParam("QRY_ACTIVE"));
    }
    if (this.request.getParam("QRY_DEST_TABLE") != null && !this.request.getParam("QRY_DEST_TABLE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DEST_TABLE like :DEST_TABLE");
      this.queryParams.put("DEST_TABLE",(String)this.request.getParam("QRY_DEST_TABLE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.NAME"+
               " ,t.FILE_TYPE"+
               " ,t.DESCRIPTION"+
               " ,t.IMPSTGGRP_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.ACTIVE"+
               " ,t.DEST_TABLE"+
               " ,t.FILE_LOCATION"+
               " ,pbo_ie.get_strategy_name_by_id(t.ID) IMPSTGGRP_NAME"+
           " from IE_IMP_STRATEGY t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.NAME"+
               " ,t.IMPSTGGRP_ID"+
               ",pbo_ie.get_strategy_name_by_id(t.ID) IMPSTGGRP_NAME"+
               " ,t.FILE_TYPE"+
               " ,t.DESCRIPTION"+
               " ,t.DEST_TABLE"+
               " ,t.FILE_LOCATION"+
               " ,t.ACTIVE"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
           " from IE_IMP_STRATEGY t "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into IE_IMP_STRATEGY("+
               "  ID"+
               " ,NAME"+
               " ,FILE_TYPE"+
               " ,DESCRIPTION"+
               " ,IMPSTGGRP_ID"+
               " ,ACTIVE"+
               " ,DEST_TABLE"+
               " ,FILE_LOCATION"+
           " ) values ( "+
               "  :ID"+
               " ,:NAME"+
               " ,:FILE_TYPE"+
               " ,:DESCRIPTION"+
               " ,:IMPSTGGRP_ID"+
               " ,:ACTIVE"+
               " ,:DEST_TABLE"+
               " ,:FILE_LOCATION"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_IMPSTG_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update IE_IMP_STRATEGY set "+
               "  ID=:ID"+
               " ,NAME=:NAME"+
               " ,FILE_TYPE=:FILE_TYPE"+
               " ,DESCRIPTION=:DESCRIPTION"+
               " ,IMPSTGGRP_ID=:IMPSTGGRP_ID"+
               " ,ACTIVE=:ACTIVE"+
               " ,DEST_TABLE=:DEST_TABLE"+
               " ,FILE_LOCATION=:FILE_LOCATION"+
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
   String sql = "delete from IE_IMP_STRATEGY where "+
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
               " t.ID"+
               " ,t.NAME"+
               " ,t.FILE_TYPE"+
               " ,t.DESCRIPTION"+
               " ,t.IMPSTGGRP_ID"+
               " ,t.CREATEDON"+
               " ,t.CREATEDBY"+
               " ,t.MODIFIEDON"+
               " ,t.MODIFIEDBY"+
               " ,t.ACTIVE"+
               " ,t.DEST_TABLE"+
               " ,t.FILE_LOCATION"+
                ",pbo_ie.get_strategy_name_by_id(t.ID) IMPSTGGRP_NAME"+
           " from IE_IMP_STRATEGY t"+
        " where "+
     "      t.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("FILE_TYPE", new FieldDef("STRING"));
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("IMPSTGGRP_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("ACTIVE", new FieldDef("BOOLEAN"));
	  this.fields.put("DEST_TABLE", new FieldDef("STRING"));
	  this.fields.put("FILE_LOCATION", new FieldDef("STRING"));
	  this.fields.put("IMPSTGGRP_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
