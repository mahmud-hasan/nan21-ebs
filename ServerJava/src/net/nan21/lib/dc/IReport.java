package net.nan21.lib.dc;

import javax.servlet.http.HttpServletResponse;

import net.nan21.lib.DbManager;
import net.nan21.lib.HttpRequest;
import net.nan21.lib.HttpSession;

public interface IReport {

	
	public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception;
	public void run() throws Exception;


}
