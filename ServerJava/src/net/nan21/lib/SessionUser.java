package net.nan21.lib;

import java.io.Serializable;

public class SessionUser implements Serializable{

	private String userName;
	private String language;
	private String dateFormat;
	
	static final long serialVersionUID = -1;
	
	public SessionUser(String userName, String language) {
		super();
		this.userName = userName;
		this.language = language;
		this.dateFormat = "DD.MM.YYYY";
	}
		
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}

	public String getDateFormat() {
		return dateFormat;
	}



	public void setDateFormat(String dateFormat) {		
		this.dateFormat = dateFormat;
	}
	
	
	public String getJDateFormat() {
		return dateFormat.toLowerCase().replace("mm", "MM");
	}



	public void setJDateFormat(String jDateFormat) {		
		this.dateFormat = dateFormat.toUpperCase();
	}	 
}
