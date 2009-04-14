/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0011 DC Controller: UoM conversions
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

public class DC0011 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CONVERSION_TYPE") != null && !this.request.getParam("QRY_CONVERSION_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("CONVERSION_TYPE like :CONVERSION_TYPE");
      this.queryParams.put("CONVERSION_TYPE",(String)this.request.getParam("QRY_CONVERSION_TYPE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_UOM_FROM") != null && !this.request.getParam("QRY_UOM_FROM").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UOM_FROM like :UOM_FROM");
      this.queryParams.put("UOM_FROM",(String)this.request.getParam("QRY_UOM_FROM"));
    }
    if (this.request.getParam("QRY_UOM_TO") != null && !this.request.getParam("QRY_UOM_TO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("UOM_TO like :UOM_TO");
      this.queryParams.put("UOM_TO",(String)this.request.getParam("QRY_UOM_TO"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " CONVERSION_FACTOR"+
               " ,CONVERSION_TYPE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,UOM_FROM"+
               " ,UOM_TO"+
           " from UOM_CONVERSION  "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ID"+
               " ,UOM_TO"+
               " ,UOM_FROM"+
               " ,CONVERSION_TYPE"+
               " ,CONVERSION_FACTOR"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,MODIFIEDBY"+
           " from UOM_CONVERSION  "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into UOM_CONVERSION("+
               "  CONVERSION_FACTOR"+
               " ,CONVERSION_TYPE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,UOM_FROM"+
               " ,UOM_TO"+
           " ) values ( "+
               "  :CONVERSION_FACTOR"+
               " ,:CONVERSION_TYPE"+
               " ,:ID"+
               " ,:MODIFIEDBY"+
               " ,:UOM_FROM"+
               " ,:UOM_TO"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("seq_uomconv_id")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate()  throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update UOM_CONVERSION set "+
               "  CONVERSION_FACTOR=:CONVERSION_FACTOR"+ 
               " ,CONVERSION_TYPE=:CONVERSION_TYPE"+ 
               " ,ID=:ID"+ 
               " ,MODIFIEDBY=:MODIFIEDBY"+ 
               " ,MODIFIEDON=:MODIFIEDON"+ 
               " ,UOM_FROM=:UOM_FROM"+ 
               " ,UOM_TO=:UOM_TO"+ 
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
   String sql = "delete from UOM_CONVERSION where "+
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
               " CONVERSION_FACTOR"+
               " ,CONVERSION_TYPE"+
               " ,ID"+
               " ,MODIFIEDBY"+
               " ,to_char(MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,UOM_FROM"+
               " ,UOM_TO"+
           " from UOM_CONVERSION "+
        " where "+
     "      ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CONVERSION_FACTOR", new FieldDef("NUMBER"));
	  this.fields.put("CONVERSION_TYPE", new FieldDef("STRING"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.get("CREATEDBY").setInDS(false);
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.get("CREATEDON").setInDS(false);
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("UOM_FROM", new FieldDef("STRING"));
	  this.fields.put("UOM_TO", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
