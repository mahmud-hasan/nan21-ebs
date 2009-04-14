/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0039: Business partner with adress
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
public class LOV0039 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");


  if (p_query_column != null) {
      if (p_query_column.equals("CITY") ) {
        this.queryWhere.append(" tsql.CITY like :p_query_value");
      }
      if (p_query_column.equals("COUNTRY_CODE") ) {
        this.queryWhere.append(" tsql.COUNTRY_CODE like :p_query_value");
      }
      if (p_query_column.equals("NAME") ) {
        this.queryWhere.append(" tsql.NAME like :p_query_value");
      }
      if (p_query_column.equals("REGION_CODE") ) {
        this.queryWhere.append(" tsql.REGION_CODE like :p_query_value");
      }
    this.queryParams.put("p_query_value",  p_query_value);
  }
}
  public void doQuery() throws Exception {
      this.prepareQueryContext();
      this.preQuery();
      this.queryWhere.insert(0, (this.queryWhere.length() > 0) ? " where ":"");
      String sql = "select tsql.* from (select bp.name, bp.id, bpa.country_code,bpa.region_code, bpa.city, bpa.city_id, bpa.adress"+"  from bpartner bp, bp_adress bpa"+" where bp.id = bpa.bpartner_id(+)) tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ADRESS", new FieldDef("STRING"));
	  this.fields.put("CITY", new FieldDef("STRING"));
	  this.fields.put("CITY_ID", new FieldDef("NUMBER"));
	  this.fields.put("COUNTRY_CODE", new FieldDef("STRING"));
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("REGION_CODE", new FieldDef("STRING"));
  }
}
