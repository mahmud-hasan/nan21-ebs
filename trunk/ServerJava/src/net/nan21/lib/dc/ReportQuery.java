package net.nan21.lib.dc;

public class ReportQuery {
 
	private String name;
	private String sql;
	private String[] childQueryNames;
	
	public ReportQuery(String name) {
		super();
		this.name = name;
	}


	public ReportQuery(String name, String sql) {
		super();
		this.name = name;
		this.sql = sql;
	}
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSql() {
		return sql;
	}
	public void setSql(String sql) {
		this.sql = sql;
	}

	public String[] getChildQueryNames() {
		return childQueryNames;
	}

	public void setChildQueryNames(String[] childQueryNames) {
		this.childQueryNames = childQueryNames;
	}

	public boolean hasChildQueries() {
		return (this.childQueryNames!=null && this.childQueryNames.length>0)?true:false;
	}
}
