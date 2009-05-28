/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * REP0003 Report Controller: Fisa expeditie
 */

package net.nan21.ebs.rep;


import javax.servlet.http.HttpServletResponse;
import net.nan21.lib.*;
import net.nan21.lib.dc.*;

public class REP0003 extends AbstractReport  {

  public void init (HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    this._init();
    super.init(request, response, session, dbm);
  }

  private void _init() {

    this.paramDef.put("P_AGENT", new FieldDef("STRING"));
    this.paramDef.put("P_AGENT_ID", new FieldDef("NUMBER"));
    this.queries.put("PARCEL", new ReportQuery("PARCEL"));

    String sqlPARCEL = "select p.* "+      "  from tr_parcel p "+      "where p.CUSTODY_ORG_ID = :P_AGENT_ID "+      "order by dest_name";
    this.queries.get("PARCEL").setSql(sqlPARCEL);
    this.queries.get("PARCEL").setChildQueryNames(new String[] {});

    this.queryExecOrder = new String[] {"PARCEL"};

  }
}
