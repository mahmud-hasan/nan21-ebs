/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0029: UI DC fields
 */
package net.nan21.ebs.dc;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import java.util.HashMap;
public class LOV0029 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");

  this.queryParams.setProperty("p_uidc_code", ""); 
  if(this.request.getParam("p_uidc_code") != null ) {
    this.queryParams.setProperty("p_uidc_code", this.request.getParam("p_uidc_code")); 
  }

  if (p_query_column != null) {
      if (p_query_column.equals("FIELD_NAME") ) {
        this.queryWhere.append(" tsql.FIELD_NAME like :p_query_value");
      }
      if (p_query_column.equals("UIDC_CODE") ) {
        this.queryWhere.append(" tsql.UIDC_CODE like :p_query_value");
      }
    this.queryParams.put("p_query_value",  p_query_value);
  }
}
  public void doQuery() throws Exception {
      this.prepareQueryContext();
      this.preQuery();
      this.queryWhere.insert(0, (this.queryWhere.length() > 0) ? " where ":"");
      String sql = "select tsql.* from (select uidc_code, field_name"+"  from ui_dc_field "+" where (:p_uidc_code is null or uidc_code like :p_uidc_code)) tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("FIELD_NAME", new FieldDef("STRING"));
	  this.fields.put("UIDC_CODE", new FieldDef("STRING"));
	  this.queryResultSize = -1;
  }
}
