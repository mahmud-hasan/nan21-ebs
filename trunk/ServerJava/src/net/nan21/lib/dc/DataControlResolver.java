package net.nan21.lib.dc;

public class DataControlResolver {

	public static final String DC_TECHNOLOGY_JAVA = "java";
	public static final String DC_TECHNOLOGY_RUBY = "jruby";
	
	private String name;
	private String technology;
	private String namespace;
	private String srcPath;
		
	
	public DataControlResolver(String name, String technology, String namespace, String srcPath) {
		this.name = name;
		this.technology = technology;
		this.namespace = namespace;
		this.srcPath = srcPath;
	}

	public DataControlResolver(String name) {
		this.name = name;
		this.technology = DC_TECHNOLOGY_JAVA;
	}

 
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public String getNamespace() {
		return namespace;
	}

	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}

	public String getSrcPath() {
		return srcPath;
	}

	public void setSrcPath(String srcPath) {
		this.srcPath = srcPath;
	}
	
	public String toString() {
		return this.namespace+","+this.name+","+this.technology+","+this.srcPath;
	}
}
