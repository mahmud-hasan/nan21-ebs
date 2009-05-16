/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0022: Menu items
 */
package net.nan21.ebs.dc;
import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import java.util.HashMap;
public class LOV0022 extends AbstractDataControl implements IDataControlLov {
public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._initFields();
    super.init(request, response, session, dbm);
  }
private void preQuery() {

  String p_query_column = this.request.getParam("_p_query_column");
  String p_query_value = this.request.getParam("_p_query_value");

  this.queryParams.put("p_parent", ""); 
  if(this.request.getParam("p_parent") != null ) {
    this.queryParams.put("p_parent", this.request.getParam("p_parent")); 
  }
  this.queryParams.put("p_menubar", "%"); 
  if(this.request.getParam("p_menubar") != null ) {
    this.queryParams.put("p_menubar", this.request.getParam("p_menubar")); 
  }

  if (p_query_column != null) {
      if (p_query_column.equals("MENUBAR_CODE") ) {
        this.queryWhere.append(" tsql.MENUBAR_CODE like :p_query_value");
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
      String sql = "select tsql.* from (select m.id, m.menubar_code, m.position,m.name, m.menuitem_id , (select t.name from menuitem t where t.id = m.menuitem_id) parent_name from menuitem m where m.menubar_code like :p_menubar) tsql " + this.queryWhere.toString() + " " + this.queryOrderBy;
      this.writeResultDoQuery(sql); 
  }

	private void  _initFields() {
	  this.fields = new HashMap<String, FieldDef>();
	  this.fields.put("ID", new FieldDef("NUMBER"));
	  this.fields.put("MENUBAR_CODE", new FieldDef("STRING"));
	  this.fields.put("MENUITEM_ID", new FieldDef("NUMBER"));
	  this.fields.put("NAME", new FieldDef("STRING"));
	  this.fields.put("PARENT_NAME", new FieldDef("STRING"));
	  this.fields.put("POSITION", new FieldDef("NUMBER"));
	  this.queryResultSize = 40;
  }
}
