package net.nan21.ebs.dc;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import javax.servlet.http.HttpServletResponse;

import net.nan21.ebs.lib.AbstractDataControl;
import net.nan21.ebs.lib.DbManager;
import net.nan21.ebs.lib.HttpRequest;
import net.nan21.ebs.lib.HttpSession;
import net.nan21.ebs.lib.IDataControl;
import net.nan21.ebs.lib.SessionUser;

public class DC_MAIN extends AbstractDataControl implements IDataControl {

	public void init(HttpRequest request, HttpServletResponse response,
			HttpSession session, DbManager dbm) throws Exception {
		//this._initFields();
		super.init(request, response, session, dbm);
	}

	public void doCustomAction(String customAction) throws SQLException,
			IOException {
		if (customAction.equals("loadMenu")) {
			this.loadMenu(this.request.getParam("node"));
		}
		if (customAction.equals("changeLanguage")) {
			this.changeLanguage();
		}
		if (customAction.equals("logout")) {
			this.doLogout();
		}
		if (customAction.equals("lockSession")) {
			this.doLockSession();
		}

	}

	private void loadMenu(String node) throws SQLException, IOException {
		SessionUser user = (SessionUser) this.session
				.getAttribute(HttpSession.MAP_KEY_AUTH_USER);

		String module = null;
		String sql = null;
		if (this.request.getParam("module") == null) {
			module = "MAIN";
		} else {
			module = this.request.getParam("module");
		}
		if (node.equals("root")) {
			sql = "select m.*, mt.translation menu_title "
					+ "  from menuitem m , menuitem_trl mt"
					+ " where m.id = mt.menuitem_id"
					+ "   and m.menubar_code = '"
					+ module
					+ "'"
					+ "   and m.menuitem_id is null"
					+ "   and m.active = 'Y'"
					+ "   and mt.lang = '"
					+ user.getLanguage()
					+ "'"
					+ "   and not exists ("
					+ "     select 1"
					+ "       from menuitem_role mr"
					+ "      where mr. menuitem_id = m.id"
					+ "        and mr.role_name not in (select ur.role_name"
					+ "                                   from sys_user_role ur"
					+ "                                  where ur.user_id = (select u.id from sys_user u where u.login_code ='"
					+ user.getUserName() + "')  )" + "   )"
					+ " order by m.position";
		} else {
			sql = "select m.*, mt.translation menu_title"
					+ "  from menuitem m , menuitem_trl mt"
					+ " where m.id = mt.menuitem_id"
					+ "   and m.menubar_code = '"
					+ module
					+ "'"
					+ "   and m.active = 'Y'"
					+ "   and m.menuitem_id = '"
					+ node
					+ "'"
					+ "   and mt.lang = '"
					+ user.getLanguage()
					+ "'"
					+ "   and not exists ("
					+ "     select 1 "
					+ "       from menuitem_role mr"
					+ "      where mr. menuitem_id = m.id"
					+ "        and mr.role_name not in (select ur.role_name"
					+ "                                   from sys_user_role ur"
					+ "                                  where ur.user_id = (select u.id from sys_user u where u.login_code ='"
					+ user.getUserName() + "')  )" + "   )"
					+ " order by m.position";
		}
		List<Properties> res = dbm.executeQuery(sql, null);
		StringBuffer out = new StringBuffer("");
		int x = 0;
		Iterator<Properties> it = res.iterator();
		while (it.hasNext()) {
			Properties row = it.next();
			String leaf = "";
			out.append((x > 0) ? "," : "");
			if (row.get("LINK") != null
					&& !row.get("LINK").equals("")) {
				leaf = ", \"leaf\":\"true\"";
			}
			out.append("{\"text\":\"" + row.get("MENU_TITLE")
					+ "\",\"id\":\"" + row.get("ID")
					+ "\",\"cls\":\"folder\"" + leaf + ",\"guiID\":\""
					+ row.get("LINK") + "\"}");
			x++;
		}
		write("["+out.toString()+"]");
	}

	private void changeLanguage() throws IOException {
		String nl = this.request.getParam("_p_lang");
		if (nl != null && (nl.equals("ro") || nl.equals("en"))) {
			this.session.setLanguage(nl);
			write("{ success: true, newLanguage:\"" + nl
					+ "\" , message: \"OK\"}");
		}
	}

	private void doLogout() throws IOException {
		this.session.setAttribute(HttpSession.MAP_KEY_AUTH_USER, null);
		write("{ success: true, message: \"OK\"}");
	}

	private void doLockSession() throws IOException {
		this.session.setAttribute(HttpSession.MAP_KEY_AUTH_USER, null);
		write("{ success: true, message: \"OK\"}");
	}

		
	public void doQuery()  throws Exception {}
	public void doInsert()  throws Exception {}
	public void doUpdate() throws Exception {}
	public void doDelete()  throws Exception {}
	public void fetchRecord() throws Exception {}
	public void doExport()  throws Exception {}
	public void initNewRecord()  throws Exception {}
	public void callProcedure(String proc) throws Exception {}
	
	
}