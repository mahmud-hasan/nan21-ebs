package net.nan21.ebs.lib;

public class SessionUser {

	private String userName;
	private String language;
	
	
	
	public SessionUser(String userName, String language) {
		super();
		this.userName = userName;
		this.language = language;
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
	 
}
