/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0061 DC Controller: Assets
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

public class DC0061 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ASSETGRP_ID") != null && !this.request.getParam("QRY_ASSETGRP_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.ASSETGRP_ID like :ASSETGRP_ID");
      this.queryParams.put("ASSETGRP_ID",(String)this.request.getParam("QRY_ASSETGRP_ID"));
    }
    if (this.request.getParam("QRY_BPARTNER_ID") != null && !this.request.getParam("QRY_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.BPARTNER_ID like :BPARTNER_ID");
      this.queryParams.put("BPARTNER_ID",(String)this.request.getParam("QRY_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_DEPREC_MONTHS") != null && !this.request.getParam("QRY_DEPREC_MONTHS").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.DEPREC_MONTHS like :DEPREC_MONTHS");
      this.queryParams.put("DEPREC_MONTHS",(String)this.request.getParam("QRY_DEPREC_MONTHS"));
    }
    if (this.request.getParam("QRY_DEPREC_MONTHS_REMAINED") != null && !this.request.getParam("QRY_DEPREC_MONTHS_REMAINED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.DEPREC_MONTHS_REMAINED like :DEPREC_MONTHS_REMAINED");
      this.queryParams.put("DEPREC_MONTHS_REMAINED",(String)this.request.getParam("QRY_DEPREC_MONTHS_REMAINED"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_INUSE_BPARTNER_ID") != null && !this.request.getParam("QRY_INUSE_BPARTNER_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.INUSE_BPARTNER_ID like :INUSE_BPARTNER_ID");
      this.queryParams.put("INUSE_BPARTNER_ID",(String)this.request.getParam("QRY_INUSE_BPARTNER_ID"));
    }
    if (this.request.getParam("QRY_IS_ACTIVE") != null && !this.request.getParam("QRY_IS_ACTIVE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.IS_ACTIVE like :IS_ACTIVE");
      this.queryParams.put("IS_ACTIVE",(String)this.request.getParam("QRY_IS_ACTIVE"));
    }
    if (this.request.getParam("QRY_IS_DEPRECIATED") != null && !this.request.getParam("QRY_IS_DEPRECIATED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.IS_DEPRECIATED like :IS_DEPRECIATED");
      this.queryParams.put("IS_DEPRECIATED",(String)this.request.getParam("QRY_IS_DEPRECIATED"));
    }
    if (this.request.getParam("QRY_IS_DISPOSED") != null && !this.request.getParam("QRY_IS_DISPOSED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.IS_DISPOSED like :IS_DISPOSED");
      this.queryParams.put("IS_DISPOSED",(String)this.request.getParam("QRY_IS_DISPOSED"));
    }
    if (this.request.getParam("QRY_IS_INPOSESSION") != null && !this.request.getParam("QRY_IS_INPOSESSION").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.IS_INPOSESSION like :IS_INPOSESSION");
      this.queryParams.put("IS_INPOSESSION",(String)this.request.getParam("QRY_IS_INPOSESSION"));
    }
    if (this.request.getParam("QRY_IS_OWNED") != null && !this.request.getParam("QRY_IS_OWNED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.IS_OWNED like :IS_OWNED");
      this.queryParams.put("IS_OWNED",(String)this.request.getParam("QRY_IS_OWNED"));
    }
    if (this.request.getParam("QRY_NAME") != null && !this.request.getParam("QRY_NAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.NAME like :NAME");
      this.queryParams.put("NAME",(String)this.request.getParam("QRY_NAME"));
    }
    if (this.request.getParam("QRY_PRODUCT_ID") != null && !this.request.getParam("QRY_PRODUCT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.PRODUCT_ID like :PRODUCT_ID");
      this.queryParams.put("PRODUCT_ID",(String)this.request.getParam("QRY_PRODUCT_ID"));
    }
    if (this.request.getParam("QRY_SERIAL_NO") != null && !this.request.getParam("QRY_SERIAL_NO").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.SERIAL_NO like :SERIAL_NO");
      this.queryParams.put("SERIAL_NO",(String)this.request.getParam("QRY_SERIAL_NO"));
    }
    if (this.request.getParam("QRY_WITH_DEPRECIATION") != null && !this.request.getParam("QRY_WITH_DEPRECIATION").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("a.WITH_DEPRECIATION like :WITH_DEPRECIATION");
      this.queryParams.put("WITH_DEPRECIATION",(String)this.request.getParam("QRY_WITH_DEPRECIATION"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " a.ASSETGRP_ID"+
               " ,(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME"+
               " ,a.BPARTNER_ID"+
               " ,(select code from client where id = a.client_id) CLIENT_CODE"+
               " ,a.CLIENT_ID"+
               " ,a.CLIORG_ID"+
               " ,a.CREATEDBY"+
               " ,to_char(a.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,a.DEPREC_BASE_VALUE"+
               " ,a.DEPREC_MONTHS"+
               " ,a.DEPREC_MONTHS_REMAINED"+
               " ,a.ID"+
               " ,a.INUSE_BPARTNER_ID"+
               " ,a.IS_ACTIVE"+
               " ,a.IS_DEPRECIATED"+
               " ,a.IS_DISPOSED"+
               " ,a.IS_INPOSESSION"+
               " ,a.IS_OWNED"+
               " ,to_char(a.LAST_MAINTENANCE_DATE,'"+this.DATE_FORMAT_DB+"') LAST_MAINTENANCE_DATE"+
               " ,a.MAINTENANCE_PLAN_ID"+
               " ,a.MODIFIEDBY"+
               " ,to_char(a.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,a.NAME"+
               " ,to_char(a.NEXT_MAINTENENCE_DATE,'"+this.DATE_FORMAT_DB+"') NEXT_MAINTENENCE_DATE"+
               " ,a.NOTES"+
               " ,a.PRODUCT_ID"+
               " ,a.QUANTITY"+
               " ,a.SERIAL_NO"+
               " ,a.WITH_DEPRECIATION"+
           " from ASSET a "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " a.ASSETGRP_ID"+
               " ,a.CLIENT_ID"+
               " ,a.PRODUCT_ID"+
               " ,a.CLIORG_ID"+
               " ,a.ID"+
               ",(select code from client where id = a.client_id) CLIENT_CODE"+
               " ,a.NAME"+
               ",(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME"+
               " ,a.QUANTITY"+
               " ,a.SERIAL_NO"+
               " ,a.NOTES"+
               " ,a.IS_ACTIVE"+
               " ,a.IS_DEPRECIATED"+
               " ,a.IS_DISPOSED"+
               " ,a.IS_OWNED"+
               " ,a.IS_INPOSESSION"+
               " ,to_char(a.LAST_MAINTENANCE_DATE,'"+this.DATE_FORMAT_DB+"') LAST_MAINTENANCE_DATE"+
               " ,to_char(a.NEXT_MAINTENENCE_DATE,'"+this.DATE_FORMAT_DB+"') NEXT_MAINTENENCE_DATE"+
               " ,a.MAINTENANCE_PLAN_ID"+
               " ,a.WITH_DEPRECIATION"+
               " ,a.DEPREC_MONTHS"+
               " ,a.DEPREC_BASE_VALUE"+
               " ,a.DEPREC_MONTHS_REMAINED"+
               " ,a.BPARTNER_ID"+
               " ,a.INUSE_BPARTNER_ID"+
               " ,to_char(a.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,a.CREATEDBY"+
               " ,to_char(a.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,a.MODIFIEDBY"+
           " from ASSET a "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
    String sql = "insert into ASSET("+
               "  ASSETGRP_ID"+
               " ,BPARTNER_ID"+
               " ,CLIENT_ID"+
               " ,CLIORG_ID"+
               " ,DEPREC_BASE_VALUE"+
               " ,DEPREC_MONTHS"+
               " ,DEPREC_MONTHS_REMAINED"+
               " ,ID"+
               " ,INUSE_BPARTNER_ID"+
               " ,IS_ACTIVE"+
               " ,IS_DEPRECIATED"+
               " ,IS_DISPOSED"+
               " ,IS_INPOSESSION"+
               " ,IS_OWNED"+
               " ,LAST_MAINTENANCE_DATE"+
               " ,MAINTENANCE_PLAN_ID"+
               " ,NAME"+
               " ,NEXT_MAINTENENCE_DATE"+
               " ,NOTES"+
               " ,PRODUCT_ID"+
               " ,QUANTITY"+
               " ,SERIAL_NO"+
               " ,WITH_DEPRECIATION"+
           " ) values ( "+
               "  :ASSETGRP_ID"+
               " ,:BPARTNER_ID"+
               " ,:CLIENT_ID"+
               " ,:CLIORG_ID"+
               " ,:DEPREC_BASE_VALUE"+
               " ,:DEPREC_MONTHS"+
               " ,:DEPREC_MONTHS_REMAINED"+
               " ,:ID"+
               " ,:INUSE_BPARTNER_ID"+
               " ,:IS_ACTIVE"+
               " ,:IS_DEPRECIATED"+
               " ,:IS_DISPOSED"+
               " ,:IS_INPOSESSION"+
               " ,:IS_OWNED"+
               " ,:LAST_MAINTENANCE_DATE"+
               " ,:MAINTENANCE_PLAN_ID"+
               " ,:NAME"+
               " ,:NEXT_MAINTENENCE_DATE"+
               " ,:NOTES"+
               " ,:PRODUCT_ID"+
               " ,:QUANTITY"+
               " ,:SERIAL_NO"+
               " ,:WITH_DEPRECIATION"+
    ")";
    this.record.put("ID",   dbm.getSequenceNextValue("SEQ_ASSET_ID")  );
    dbm.executeStatement(sql, this.record);
    this.populateRecordPkFromRecord();
    this.findByPk();
    this.writeResultDoInsert();
}

public void doUpdate() throws Exception {
    this.populateRecordFromRequest();
    this.populateRecordWithClientSpecific();
    String sql = "update ASSET set "+
               "  ID=:ID"+
               " ,CLIENT_ID=:CLIENT_ID"+
               " ,CLIORG_ID=:CLIORG_ID"+
               " ,PRODUCT_ID=:PRODUCT_ID"+
               " ,ASSETGRP_ID=:ASSETGRP_ID"+
               " ,NAME=:NAME"+
               " ,NOTES=:NOTES"+
               " ,QUANTITY=:QUANTITY"+
               " ,SERIAL_NO=:SERIAL_NO"+
               " ,IS_ACTIVE=:IS_ACTIVE"+
               " ,IS_DEPRECIATED=:IS_DEPRECIATED"+
               " ,IS_DISPOSED=:IS_DISPOSED"+
               " ,IS_OWNED=:IS_OWNED"+
               " ,IS_INPOSESSION=:IS_INPOSESSION"+
               " ,LAST_MAINTENANCE_DATE=:LAST_MAINTENANCE_DATE"+
               " ,NEXT_MAINTENENCE_DATE=:NEXT_MAINTENENCE_DATE"+
               " ,MAINTENANCE_PLAN_ID=:MAINTENANCE_PLAN_ID"+
               " ,WITH_DEPRECIATION=:WITH_DEPRECIATION"+
               " ,DEPREC_MONTHS=:DEPREC_MONTHS"+
               " ,DEPREC_BASE_VALUE=:DEPREC_BASE_VALUE"+
               " ,DEPREC_MONTHS_REMAINED=:DEPREC_MONTHS_REMAINED"+
               " ,BPARTNER_ID=:BPARTNER_ID"+
               " ,INUSE_BPARTNER_ID=:INUSE_BPARTNER_ID"+
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
   String sql = "delete from ASSET where "+
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
               " a.ASSETGRP_ID"+
                ",(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME"+
               " ,a.BPARTNER_ID"+
                ",(select code from client where id = a.client_id) CLIENT_CODE"+
               " ,a.CLIENT_ID"+
               " ,a.CLIORG_ID"+
               " ,a.CREATEDBY"+
               " ,to_char(a.CREATEDON,'"+this.DATE_FORMAT_DB+"') CREATEDON"+
               " ,a.DEPREC_BASE_VALUE"+
               " ,a.DEPREC_MONTHS"+
               " ,a.DEPREC_MONTHS_REMAINED"+
               " ,a.ID"+
               " ,a.INUSE_BPARTNER_ID"+
               " ,a.IS_ACTIVE"+
               " ,a.IS_DEPRECIATED"+
               " ,a.IS_DISPOSED"+
               " ,a.IS_INPOSESSION"+
               " ,a.IS_OWNED"+
               " ,to_char(a.LAST_MAINTENANCE_DATE,'"+this.DATE_FORMAT_DB+"') LAST_MAINTENANCE_DATE"+
               " ,a.MAINTENANCE_PLAN_ID"+
               " ,a.MODIFIEDBY"+
               " ,to_char(a.MODIFIEDON,'"+this.DATE_FORMAT_DB+"') MODIFIEDON"+
               " ,a.NAME"+
               " ,to_char(a.NEXT_MAINTENENCE_DATE,'"+this.DATE_FORMAT_DB+"') NEXT_MAINTENENCE_DATE"+
               " ,a.NOTES"+
               " ,a.PRODUCT_ID"+
               " ,a.QUANTITY"+
               " ,a.SERIAL_NO"+
               " ,a.WITH_DEPRECIATION"+
           " from ASSET a"+
        " where "+
     "      a.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void callProcedure(String pName)  throws Exception {
    this.populateRecordFromRequest();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ASSETGRP_ID", new FieldDef("NUMBER"));
	  this.fields.put("ASSETGRP_NAME", new FieldDef("STRING"));
	  this.fields.put("BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("CLIORG_ID", new FieldDef("NUMBER"));
	  this.fields.put("CREATEDBY", new FieldDef("STRING"));
	  this.fields.put("CREATEDON", new FieldDef("DATE"));
	  this.fields.put("DEPREC_BASE_VALUE", new FieldDef("NUMBER"));
	  this.fields.put("DEPREC_MONTHS", new FieldDef("NUMBER"));
	  this.fields.put("DEPREC_MONTHS_REMAINED", new FieldDef("NUMBER"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("INUSE_BPARTNER_ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_ACTIVE", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_DEPRECIATED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_DISPOSED", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_INPOSESSION", new FieldDef("BOOLEAN"));
	  this.fields.put("IS_OWNED", new FieldDef("BOOLEAN"));
	  this.fields.put("LAST_MAINTENANCE_DATE", new FieldDef("DATE"));
	  this.fields.put("MAINTENANCE_PLAN_ID", new FieldDef("NUMBER"));
	  this.fields.put("MODIFIEDBY", new FieldDef("STRING"));
	  this.fields.put("MODIFIEDON", new FieldDef("DATE"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("NEXT_MAINTENENCE_DATE", new FieldDef("DATE"));
	  this.fields.put("NOTES", new FieldDef("STRING"));
	  this.fields.put("PRODUCT_ID", new FieldDef("NUMBER"));
	  this.fields.put("QUANTITY", new FieldDef("NUMBER"));
	  this.fields.put("SERIAL_NO", new FieldDef("STRING"));
	  this.fields.put("WITH_DEPRECIATION", new FieldDef("BOOLEAN"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
