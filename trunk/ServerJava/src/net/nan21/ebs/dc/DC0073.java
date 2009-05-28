/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0073 DC Controller: Define prod. attribute groups
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0073 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ag.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ag.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_PRODATTRGRP_ID") != null && !this.request.getParam("QRY_PRODATTRGRP_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ag.PRODATTRGRP_ID like :PRODATTRGRP_ID");
      this.queryParams.put("PRODATTRGRP_ID",(String)this.request.getParam("QRY_PRODATTRGRP_ID"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ag.DESCRIPTION"+
               " ,ag.ID"+
               " ,ag.NAME"+
               " ,ag.PRODATTRGRP_ID"+
               " ,( select p.name from MM_PROD_ATTR_GRP p where p.id = ag.PRODATTRGRP_ID) PRODATTRGRP_NAME"+
           " from MM_PROD_ATTR_GRP ag "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ag.ID"+
               " ,ag.NAME"+
               " ,ag.PRODATTRGRP_ID"+
               ",( select p.name from MM_PROD_ATTR_GRP p where p.id = ag.PRODATTRGRP_ID) PRODATTRGRP_NAME"+
               " ,ag.DESCRIPTION"+
           " from MM_PROD_ATTR_GRP ag "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into MM_PROD_ATTR_GRP("+
               "  DESCRIPTION"+
               " ,ID"+
               " ,NAME"+
               " ,PRODATTRGRP_ID"+
           " ) values ( "+
               "  :DESCRIPTION"+
               " ,:ID"+
               " ,:NAME"+
               " ,:PRODATTRGRP_ID"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_PRDATTRGRP_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update MM_PROD_ATTR_GRP set "+
               "  DESCRIPTION=:DESCRIPTION"+ 
               " ,ID=:ID"+ 
               " ,NAME=:NAME"+ 
               " ,PRODATTRGRP_ID=:PRODATTRGRP_ID"+ 
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
   String sql = "delete from MM_PROD_ATTR_GRP where "+
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
               " ag.DESCRIPTION"+
               " ,ag.ID"+
               " ,ag.NAME"+
               " ,ag.PRODATTRGRP_ID"+
                ",( select p.name from MM_PROD_ATTR_GRP p where p.id = ag.PRODATTRGRP_ID) PRODATTRGRP_NAME"+
           " from MM_PROD_ATTR_GRP ag"+
        " where "+
     "      ag.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("DESCRIPTION", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("PRODATTRGRP_ID", new FieldDef("NUMBER"));
	  this.fields.put("PRODATTRGRP_NAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
