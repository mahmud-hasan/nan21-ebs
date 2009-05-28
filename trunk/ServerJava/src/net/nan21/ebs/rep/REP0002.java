/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * REP0002 Report Controller: Invoices
 */

package net.nan21.ebs.rep;


import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class REP0002 extends AbstractReport  {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._init();
    super.init(request, response, session, dbm);
  }

  private void _init() {

    this.paramDef.put("P_DOCDATE_FROM", new FieldDef("DATE"));
    this.paramDef.put("P_DOCDATE_TO", new FieldDef("DATE"));
    this.paramDef.put("P_CURRENCY", new FieldDef("STRING"));
    this.paramDef.put("P_DOCTYPE", new FieldDef("STRING"));
    this.paramDef.put("P_CLIENT_CODE", new FieldDef("STRING"));
    this.paramDef.put("P_RECEIVER_ID", new FieldDef("STRING"));
    this.paramDef.put("P_CLIENT_ID", new FieldDef("STRING"));
    this.paramDef.put("P_RECEIVER_NAME", new FieldDef("STRING"));
    this.queries.put("INVOICE", new ReportQuery("INVOICE"));

    String sqlINVOICE = "select t.* "+
    this.queries.get("INVOICE").setSql(sqlINVOICE);
    this.queries.get("INVOICE").setChildQueryNames(new String[] {});

    this.queryExecOrder = new String[] {"INVOICE"};

  }
}