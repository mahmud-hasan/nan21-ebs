/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0056: Price lists - Effective
 */
package net.nan21.ebs.dc;
import javax.servlet.http.HttpServletResponse;
import net.nan21.ebs.lib.AbstractDataControl;
import net.nan21.ebs.lib.DbManager;
import net.nan21.ebs.lib.FieldDef;
import net.nan21.ebs.lib.HttpRequest;
import net.nan21.ebs.lib.HttpSession;
import net.nan21.ebs.lib.IDataControl;
import net.nan21.ebs.lib.IDataControlLov;
import java.util.HashMap;
public class LOV0056 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");

  this.queryParams.setProperty("p_currency", "-1"); 
  if(this.request.getParam("p_currency") != null ) {
    this.queryParams.setProperty("p_currency", this.request.getParam("p_currency")); 
  }
  this.queryParams.setProperty("p_client_id", "-1"); 
  if(this.request.getParam("p_client_id") != null ) {
    this.queryParams.setProperty("p_client_id", this.request.getParam("p_client_id")); 
  }

  if (p_query_column != null) {
    this.queryParams.put("p_query_value",  p_query_value);
  }
}
  public void doQuery() throws Exception {
      this.prepareQueryContext();
      this.preQuery();
      this.queryWhere.insert(0, (this.queryWhere.length() > 0) ? " where ":"");
      String sql = "select tsql.* from ( select a.id, a.name from mm_price_list a where a.client_id = :p_client_id and a.currency = :p_currency) tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
  }
}
