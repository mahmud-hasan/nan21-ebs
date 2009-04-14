/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0068: Org parcel warehouse
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
public class LOV0068 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");


  if (p_query_column != null) {
    this.queryParams.put("p_query_value",  p_query_value);
  }
}
  public void doQuery() throws Exception {
      this.prepareQueryContext();
      this.preQuery();
      this.queryWhere.insert(0, (this.queryWhere.length() > 0) ? " where ":"");
      String sql = "select tsql.* from (select t.id, t.name "+"  from organization t "+" where t.id in (select tt.org_id from org_attr_val tt where tt.orgattr_id = pbo_org.get_orgattr_id_by_name('IS_PARCEL_WAREHOUSE')"+" and tt.attr_val = 'Y')"+") tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
  }
}
