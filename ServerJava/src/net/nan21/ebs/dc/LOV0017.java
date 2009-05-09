/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0017: Product master data
 */
package net.nan21.ebs.dc;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import java.util.HashMap;
public class LOV0017 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");


  if (p_query_column != null) {
      if (p_query_column.equals("CODE") ) {
        this.queryWhere.append(" tsql.CODE like :p_query_value");
      }
      if (p_query_column.equals("NAME") ) {
        this.queryWhere.append(" tsql.NAME like :p_query_value");
      }
    this.queryParams.put("p_query_value",  p_query_value);
  }
}
  public void doQuery() throws Exception {
      this.prepareQueryContext();
      this.preQuery();
      this.queryWhere.insert(0, (this.queryWhere.length() > 0) ? " where ":"");
      String sql = "select tsql.* from (select id, code, name, uom_code"+" from mm_product ) tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("CODE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("UOM_CODE", new FieldDef("STRING"));
	  this.queryResultSize = 40;
  }
}
