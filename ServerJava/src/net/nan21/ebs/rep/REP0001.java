/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * REP0001 Report Controller: Print Invoice
 */

package net.nan21.ebs.rep;


import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class REP0001 extends AbstractReport  {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._init();
    super.init(request, response, session, dbm);
  }

  private void _init() {

    this.paramDef.put("P_INVOICE_ID", new FieldDef("STRING"));
    this.queries.put("INVOICE", new ReportQuery("INVOICE"));

    String sqlINVOICE = "select t.* "+
    this.queries.get("INVOICE").setSql(sqlINVOICE);
    this.queries.get("INVOICE").setChildQueryNames(new String[] {"INVITEM"});
    this.queries.put("INVITEM", new ReportQuery("INVITEM"));

    String sqlINVITEM = "select * from v_invoice_item where iinv_id = :INVOICE#ID";
    this.queries.get("INVITEM").setSql(sqlINVITEM);
    this.queries.get("INVITEM").setChildQueryNames(new String[] {});

    this.queryExecOrder = new String[] {"INVOICE"};

  }
}