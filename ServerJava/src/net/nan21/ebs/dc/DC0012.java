/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0012 DC Controller: Currency exchange rates
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;

public class DC0012 extends AbstractDataControl implements IDataControl {

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
    if (this.request.getParam("QRY_CURRENCY_FROM") != null && !this.request.getParam("QRY_CURRENCY_FROM").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CURRENCY_FROM like :CURRENCY_FROM");
      this.queryParams.put("CURRENCY_FROM",(String)this.request.getParam("QRY_CURRENCY_FROM"));
    }
    if (this.request.getParam("QRY_VALID_FROM") != null && !this.request.getParam("QRY_VALID_FROM").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("VALID_FROM like :VALID_FROM");
      this.queryParams.put("VALID_FROM",(String)this.request.getParam("QRY_VALID_FROM"));
    }
    if (this.request.getParam("QRY_VALID_TO") != null && !this.request.getParam("QRY_VALID_TO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("VALID_TO like :VALID_TO");
      this.queryParams.put("VALID_TO",(String)this.request.getParam("QRY_VALID_TO"));
    }
    if (this.request.getParam("QRY_CURRENCY_TO") != null && !this.request.getParam("QRY_CURRENCY_TO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CURRENCY_TO like :CURRENCY_TO");
      this.queryParams.put("CURRENCY_TO",(String)this.request.getParam("QRY_CURRENCY_TO"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,CURRENCY_FROM"+
               " ,XRATE"+
               " ,MODIFIEDON"+
               " ,VALID_FROM"+
               " ,VALID_TO"+
               " ,CURRENCY_TO"+
           " from CURRENCY_XRATE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,CURRENCY_FROM"+
               " ,CURRENCY_TO"+
               " ,XRATE"+
               " ,VALID_FROM"+
               " ,VALID_TO"+
               " ,MODIFIEDON"+
           " from CURRENCY_XRATE  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into CURRENCY_XRATE("+
               "  ID"+
               " ,CURRENCY_FROM"+
               " ,XRATE"+
               " ,VALID_FROM"+
               " ,VALID_TO"+
               " ,CURRENCY_TO"+
           " ) values ( "+
               "  :ID"+
               " ,:CURRENCY_FROM"+
               " ,:XRATE"+
               " ,:VALID_FROM"+
               " ,:VALID_TO"+
               " ,:CURRENCY_TO"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_CRNCYXRATE_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update CURRENCY_XRATE set "+
               "  CURRENCY_FROM=:CURRENCY_FROM"+ 
               " ,CURRENCY_TO=:CURRENCY_TO"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,VALID_FROM=:VALID_FROM"+ 
               " ,VALID_TO=:VALID_TO"+ 
               " ,XRATE=:XRATE"+ 
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
   String sql = "delete from CURRENCY_XRATE where "+
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
               " ,CURRENCY_FROM"+
               " ,XRATE"+
               " ,MODIFIEDON"+
               " ,VALID_FROM"+
               " ,VALID_TO"+
               " ,CURRENCY_TO"+
           " from CURRENCY_XRATE "+
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
	  this.fields.put("CURRENCY_FROM", new FieldDef("STRING"));
	  this.fields.put("XRATE", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.get("MODIFIEDBY").setInDS(false);
	  this.fields.put("VALID_FROM", new FieldDef("DATE"));
	  this.fields.put("VALID_TO", new FieldDef("DATE"));
	  this.fields.put("CURRENCY_TO", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
