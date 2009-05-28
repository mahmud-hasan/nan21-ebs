/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0072 DC Controller: User authentication log
 */

package net.nan21.ebs.dc;


import java.util.*;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class DC0072 extends AbstractDataControl implements IDataControl {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }

private void preQuery() {
    if (this.request.getParam("QRY_ID") != null && !this.request.getParam("QRY_ID").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ul.ID like :ID");
      this.queryParams.put("ID",(String)this.request.getParam("QRY_ID"));
    }
    if (this.request.getParam("QRY_IP_ADRESS") != null && !this.request.getParam("QRY_IP_ADRESS").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ul.IP_ADRESS like :IP_ADRESS");
      this.queryParams.put("IP_ADRESS",(String)this.request.getParam("QRY_IP_ADRESS"));
    }
    if (this.request.getParam("QRY_LOGIN") != null && !this.request.getParam("QRY_LOGIN").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ul.LOGIN like :LOGIN");
      this.queryParams.put("LOGIN",(String)this.request.getParam("QRY_LOGIN"));
    }
    if (this.request.getParam("QRY_USERNAME") != null && !this.request.getParam("QRY_USERNAME").equals("")) {
      this.queryWhere.append(( this.queryWhere.length() > 0 )?" and ":"");
      this.queryWhere.append("ul.USERNAME like :USERNAME");
      this.queryParams.put("USERNAME",(String)this.request.getParam("QRY_USERNAME"));
    }
}

public void doQuery() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ul.ID"+
               " ,ul.IP_ADRESS"+
               " ,ul.LOGIN"+
               " ,ul.LOGOUT"+
               " ,ul.USERNAME"+
           " from USR_LOGIN ul "+this.queryWhere.toString()+" "+this.queryOrderBy;
    this.writeResultDoQuery(sql);
} 


public void doExport() throws Exception {
    this.prepareQueryContext();
    this.preQuery();
    this.queryWhere.insert(0, (this.queryWhere.length()>0)?" where ":"");
    String sql = "select "+ 
               " ul.ID"+
               " ,ul.USERNAME"+
               " ,ul.LOGIN"+
               " ,ul.LOGOUT"+
               " ,ul.IP_ADRESS"+
           " from USR_LOGIN ul "+this.queryWhere.toString()+" "+this.queryOrderBy;
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
               " ul.ID"+
               " ,ul.IP_ADRESS"+
               " ,ul.LOGIN"+
               " ,ul.LOGOUT"+
               " ,ul.USERNAME"+
           " from USR_LOGIN ul"+
        " where "+
     "      ul.ID= :ID"+ 
          "";
    this.record = dbm.executeQuery(sql, this.recordPk).get(0); 
} 


public void doCustomAction(String pName)  throws Exception {
    this.populateRecordFromRequest();
    this.sendRecord();
}


	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("IP_ADRESS", new FieldDef("STRING"));
	  this.fields.put("LOGIN", new FieldDef("DATE"));
	  this.fields.put("LOGOUT", new FieldDef("DATE"));
	  this.fields.put("USERNAME", new FieldDef("STRING"));
	  String[] _pkFields = {"ID"};
	  this.pkFields = _pkFields;
	  String[] _summaryFields = {};
	  this.summaryFields = _summaryFields;
	  this.queryResultSize = 20;
	}

}
