/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0107 DC Controller: Documents serial no
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

public class DC0107 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_CLIENT_CODE") != null && !this.request.getParam("QRY_CLIENT_CODE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_CODE like :CLIENT_CODE");
      this.queryParams.put("CLIENT_CODE",(String)this.request.getParam("QRY_CLIENT_CODE"));
    }
    if (this.request.getParam("QRY_CLIENT_ID") != null && !this.request.getParam("QRY_CLIENT_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.CLIENT_ID like :CLIENT_ID");
      this.queryParams.put("CLIENT_ID",(String)this.request.getParam("QRY_CLIENT_ID"));
    }
    if (this.request.getParam("QRY_DOCUMENT_TYPE") != null && !this.request.getParam("QRY_DOCUMENT_TYPE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.DOCUMENT_TYPE like :DOCUMENT_TYPE");
      this.queryParams.put("DOCUMENT_TYPE",(String)this.request.getParam("QRY_DOCUMENT_TYPE"));
    }
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IS_ALLOCATED") != null && !this.request.getParam("QRY_IS_ALLOCATED").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.IS_ALLOCATED like :IS_ALLOCATED");
      this.queryParams.put("IS_ALLOCATED",(String)this.request.getParam("QRY_IS_ALLOCATED"));
    }
    if (this.request.getParam("QRY_SERIAL") != null && !this.request.getParam("QRY_SERIAL").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.SERIAL like :SERIAL");
      this.queryParams.put("SERIAL",(String)this.request.getParam("QRY_SERIAL"));
    }
    if (this.request.getParam("QRY_VALUE") != null && !this.request.getParam("QRY_VALUE").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("t.VALUE like :VALUE");
      this.queryParams.put("VALUE",(String)this.request.getParam("QRY_VALUE"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.DOCUMENT_TYPE"+
               " ,t.ID"+
               " ,t.IS_ALLOCATED"+
               " ,MINVAL || '-' ||MAXVAL RANGE"+
               " ,t.SERIAL"+
               " ,t.VALUE"+
           " from V_DOC_SERIAL_NO t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " t.ID"+
               " ,t.CLIENT_ID"+
               " ,t.CLIENT_CODE"+
               " ,t.DOCUMENT_TYPE"+
               " ,t.SERIAL"+
               ",MINVAL || '-' ||MAXVAL RANGE"+
               " ,t.VALUE"+
               " ,t.IS_ALLOCATED"+
           " from V_DOC_SERIAL_NO t "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoExport(sql);
}

 	public void fetchRecord()  throws Exception  {
     this.populateRecordPkFromRequest();
     this.findByPk();
       this.writeResultFetchRecord();	 
   }

public void doInsert() throws Exception  {}
public void doUpdate() throws Exception  {}
public void doDelete() throws Exception {}
public void initNewRecord() throws Exception {}
private void findByPk()  throws Exception {
    String sql = "select "+ 
               " t.CLIENT_CODE"+
               " ,t.CLIENT_ID"+
               " ,t.DOCUMENT_TYPE"+
               " ,t.ID"+
               " ,t.IS_ALLOCATED"+
                ",MINVAL || '-' ||MAXVAL RANGE"+
               " ,t.SERIAL"+
               " ,t.VALUE"+
           " from V_DOC_SERIAL_NO t"+
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
	  this.fields.put("CLIENT_CODE", new FieldDef("STRING"));
	  this.fields.put("CLIENT_ID", new FieldDef("NUMBER"));
	  this.fields.put("DOCUMENT_TYPE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IS_ALLOCATED", new FieldDef("BOOLEAN"));
	  this.fields.put("RANGE", new FieldDef("STRING"));
	  this.fields.put("SERIAL", new FieldDef("STRING"));
	  this.fields.put("VALUE", new FieldDef("NUMBER"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	}

public void doCustomAction(String action) {}
}
