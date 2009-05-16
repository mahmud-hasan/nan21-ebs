/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0027: Received invoice
 */
package net.nan21.ebs.dc;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import java.util.HashMap;
public class LOV0027 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");

  this.queryParams.put("p_client_id", ""); 
  if(this.request.getParam("p_client_id") != null ) {
    this.queryParams.put("p_client_id", this.request.getParam("p_client_id")); 
  }
  this.queryParams.put("p_issuer_id", ""); 
  if(this.request.getParam("p_issuer_id") != null ) {
    this.queryParams.put("p_issuer_id", this.request.getParam("p_issuer_id")); 
  }

  if (p_query_column != null) {
      if (p_query_column.equals("DOC_NO") ) {
        this.queryWhere.append(" tsql.DOC_NO like :p_query_value");
      }
    this.queryParams.put("p_query_value",  p_query_value);
  }
}
  public void doQuery() throws Exception {
      this.prepareQueryContext();
      this.preQuery();
      this.queryWhere.insert(0, (this.queryWhere.length() > 0) ? " where ":"");
      String sql = "select tsql.* from (select r.id, r.doc_date, r.doc_no, r.issuer_id , iss.name issuer_name, r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_no_date, r.client_id, r.total_amount, r.doc_currency "+"  from rinvoice  r, bpartner iss"+" where r.issuer_id = iss.id"+"   and (:p_issuer_id is null or r.issuer_id = :p_issuer_id)) tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("DOC_CURRENCY", new FieldDef("STRING"));
	  this.fields.put("DOC_DATE", new FieldDef("DATE"));
	  this.fields.put("DOC_NO", new FieldDef("STRING"));
	  this.fields.put("DOC_NO_DATE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("ISSUER_ID", new FieldDef("NUMBER"));
	  this.fields.put("ISSUER_NAME", new FieldDef("STRING"));
	  this.fields.put("TOTAL_AMOUNT", new FieldDef("NUMBER"));
	  this.queryResultSize = -1;
  }
}
