package net.nan21.lib.settings;

import java.util.HashMap;
import java.util.Map;

import net.nan21.lib.dc.DataControlResolver;



/**
 * Singleton configured at application start-up with parameter values read from configuration files.
 * See the configuration files definition.
 * @author AMATHE
 *
 */
public class Settings {

	public static final String TAG_DB_INSTANCE = "dbInstance";
	public static final String TAG_DB_INSTANCES = "dbInstances";
	public static final String TAG_DB_INSTANCE_NAME = "name";
	public static final String TAG_DB_INSTANCE_JNDINAME = "jndiName";
	public static final String TAG_TECHNOLOGY_STACK = "technologyStack";
	public static final String TAG_DEFAULT_TECHNOLOGY = "defaultDcImpl";
	public static final String TAG_DEFAULT_NAMESPACE = "defaultNamespace";
	
	public static final String TAG_PATH = "path";
	public static final String TAG_SECURITY_MANAGER = "securityManager";
	
	public static final String PATH_DC_STD_RUBY = "StdDcImplRuby";
	public static final String PATH_DC_CUST_RUBY = "CustDcImplRuby";
	public static final String PATH_DC_STD_PYTHON = "StdDcImplPython";
	public static final String PATH_DC_CUST_PYTHON = "CustDcImplPython";
	public static final String PATH_DC_TRANSLATION = "DcTrl";	
	public static final String PATH_XSL = "XslPath";
		
	public static final String DC_IMPL_JAVA = "java";
	public static final String DC_IMPL_RUBY = "ruby";
	public static final String DC_IMPL_PYTHON = "python";
		
	public static final String TAG_CUSTOM_DC = "dc";
	
	/**
	 * Map with accessible database instances.   
	 */
	private Map<String, SettingsDbInstance> dbInstances = new HashMap<String, SettingsDbInstance>();
	
	private String defaultDcImpl = DC_IMPL_JAVA; 
	private String defaultDcNamespace;
	/**
	 * Provide your own security manager class.<br> 
	 * It must implement {@link <net.nan21.lib.IAccessManager> [IAccessManager]} interface and have a default empty constructor. 
	 */
	private String securityManagerClassName;	
	
	/**
	 * Map with file system paths used in application.
	 */
	private Map<String, String> paths = new HashMap<String, String>();
	
	/**
	 * Map with custom data-control implementation. 
	 */
	private Map<String, DataControlResolver> custDcs = new HashMap<String, DataControlResolver>();
	
	/**
     * false=>use connection pool, true=>each "thread" (view tab) holds its own state-full database connection
     * Default: false
	 */
	private boolean statefulDbConn;
	
	private static Settings instance = null; 
	
	
	private Settings() {}
	
	/**
	 * Get the singleton instance.
	 * @return
	 */
	public static Settings getInstance() {
		if (instance == null ) {
			synchronized (Settings.class) {
				if (instance == null ) {
					instance = new Settings();
				}
			}
		}
		return instance;
	}
	

	public SettingsDbInstance getDbInstance(String dbInstanceName) {
		if (dbInstances.containsKey(dbInstanceName)) {
			return dbInstances.get(dbInstanceName);
		} else {
			return dbInstances.values().toArray(new SettingsDbInstance[0])[0];
		}
	}
	
	public Map<String, SettingsDbInstance> getDbInstances() {
		return dbInstances;
	}

	public void setDbInstances(Map<String, SettingsDbInstance> dbInstances) {
		this.dbInstances = dbInstances;
	}

	public String getDefaultDcImpl() {
		return defaultDcImpl;
	}

	public void setDefaultDcImpl(String defaultDcImpl) {
		this.defaultDcImpl = defaultDcImpl;
	}

	public String getSecurityManagerClassName() {
		return securityManagerClassName;
	}

	public void setSecurityManagerClassName(String securityManagerClassName) {
		this.securityManagerClassName = securityManagerClassName;
	}

	public Map<String, String> getPaths() {
		return paths;
	}

	public Map<String, DataControlResolver> getCustDcs() {
		return custDcs;
	}

	public void setCustDcs(Map<String, DataControlResolver> custDcs) {
		this.custDcs = custDcs;
	}

  
	public void validate() throws Exception{
		//securityManagerClassName
		if (this.securityManagerClassName != null ) {			
			try {
				Class.forName(this.securityManagerClassName);
			} catch (ClassNotFoundException e) {
				throw new Exception("Invalid securityManager className provided in config file:"+this.securityManagerClassName,e);				
			}
		}
	}

	public String getDefaultDcNamespace() {
		return defaultDcNamespace;
	}

	public void setDefaultDcNamespace(String defaultDcNamespace) {
		this.defaultDcNamespace = defaultDcNamespace;
	}

	public boolean isStatefulDbConn() {
		return statefulDbConn;
	}

	public void setStatefulDbConn(boolean statefulDbConn) {
		this.statefulDbConn = statefulDbConn;
	}
	
	
	
	
}
