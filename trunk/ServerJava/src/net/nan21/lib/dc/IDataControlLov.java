package net.nan21.lib.dc;

import javax.servlet.http.HttpServletResponse;

import net.nan21.lib.HttpRequest;

public interface IDataControlLov {
	public void init(HttpRequest request, HttpServletResponse response, net.nan21.lib.HttpSession session, net.nan21.lib.DbManager dbm) throws Exception;
	public void doQuery()  throws Exception ;
}
