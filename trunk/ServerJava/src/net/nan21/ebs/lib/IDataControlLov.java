package net.nan21.ebs.lib;

import javax.servlet.http.HttpServletResponse;

public interface IDataControlLov {
	public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception;
	public void doQuery()  throws Exception ;
}
