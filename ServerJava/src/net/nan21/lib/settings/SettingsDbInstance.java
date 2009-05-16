package net.nan21.lib.settings;

public class SettingsDbInstance {

	
	private String name;
	private String jndiName;
	
	public SettingsDbInstance(String name) {
		super();
		this.name = name;
	}
	public SettingsDbInstance(String name, String jndiName) {
		super();
		this.name = name;
		this.jndiName = jndiName;
	}
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getJndiName() {
		return jndiName;
	}
	public void setJndiName(String jndiName) {
		this.jndiName = jndiName;
	}
	
	
}
