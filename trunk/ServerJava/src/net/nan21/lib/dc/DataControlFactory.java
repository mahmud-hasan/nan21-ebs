package net.nan21.lib.dc;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

import org.apache.log4j.Logger;

import net.nan21.lib.StopWatch;
import net.nan21.lib.settings.Settings;


/**
 * <p>
 * Data-control factory. 
 * Returns the data-control instance.
 * Source can be: java, ruby or python
 * </p> 
 * @param dcCode: Data-control code
 * @return 
 * @throws Exception
 */
public class DataControlFactory {
	
	public static final String SCRIPT_ENGINE_RUBY = "jruby";
	public static final String SCRIPT_ENGINE_PYTHON = "jython";
	
	/**
	 * Data control resolvers map. 
	 */
	private static Map<String, DataControlResolver> dcResolvers = new HashMap<String, DataControlResolver>();
	
	private static Logger logger = Logger.getLogger(DataControlFactory.class); 
	
	
	/**
	 * <p>
	 * Data-control factory. 
	 * Returns the data-control instance instantiated from the implementation specified in {@link <net.nan21.lib.settings.Settings> [application settings]}  
	 * </p> 
	 * @param dcCode: Data-control code
	 * @return 
	 * @throws Exception
	 */
	public static IDataControl getDataControl(String  dcCode) throws Exception {
		
		
		if (!dcResolvers.containsKey(dcCode)) {
			DataControlResolver dcr = null;
			// check if DC is registered with a custom implementation 
			if (Settings.getInstance().getCustDcs().containsKey(dcCode)) {				
				dcr = Settings.getInstance().getCustDcs().get(dcCode);
			} else {
				dcr = new DataControlResolver(dcCode);
				if (Settings.getInstance().getDefaultDcImpl().equals(Settings.DC_IMPL_RUBY)) {
					dcr.setTechnology(Settings.DC_IMPL_RUBY);
					dcr.setSrcPath(Settings.getInstance().getPaths().get(Settings.PATH_DC_STD_RUBY));					
				} else if (Settings.getInstance().getDefaultDcImpl().equals(Settings.DC_IMPL_RUBY)) {
					dcr.setTechnology(Settings.DC_IMPL_PYTHON);
					dcr.setSrcPath(Settings.getInstance().getPaths().get(Settings.DC_IMPL_PYTHON));
				} else {					 
					dcr.setTechnology(Settings.DC_IMPL_JAVA);
					dcr.setNamespace(Settings.getInstance().getDefaultDcNamespace()+".dc");
				}				 				 
			}
			dcResolvers.put(dcCode, dcr);
		}	 
		
		IDataControl dc = null;
		DataControlResolver dcres = dcResolvers.get(dcCode);
		if (dcres.getTechnology().equals(DataControlResolver.DC_TECHNOLOGY_JAVA)) {
			dc = (IDataControl) Class.forName(dcres.getNamespace()+"."+dcres.getName()).newInstance();
		} else {
			dc = getScriptedDc(dcres);
		}
		if (logger.isDebugEnabled()) {
			logger.debug("DC resolver: "+dcres.toString());	
			logger.debug("DC: "+dc.toString());	
		}
		return dc;
	}
	
	/**
	 * Create the data-control instance if the scripted implementation is to be used. 
	 * @param dcr
	 * @return
	 * @throws Exception
	 */
	private static IDataControl getScriptedDc(DataControlResolver dcr) throws Exception{
		StopWatch sw = new StopWatch();
		sw.start();
		ScriptEngineManager m = new ScriptEngineManager();
		ScriptEngine scriptEngine = null;
		String path = null;
		FileReader fr = null;
		if (dcr.getTechnology().equals(Settings.DC_IMPL_RUBY)) {
			scriptEngine = m.getEngineByName(SCRIPT_ENGINE_RUBY);
			path = (dcr.getSrcPath()!=null && !dcr.getSrcPath().equals(""))?dcr.getSrcPath():Settings.getInstance().getPaths().get(Settings.PATH_DC_CUST_RUBY);			
			fr = new FileReader(path+"/"+dcr.getName()+".jrb");
		} else if (dcr.getTechnology().equals(Settings.DC_IMPL_PYTHON)) {
			scriptEngine = m.getEngineByName(SCRIPT_ENGINE_PYTHON);
			path = (dcr.getSrcPath()!=null && !dcr.getSrcPath().equals(""))?dcr.getSrcPath():Settings.getInstance().getPaths().get(Settings.PATH_DC_CUST_PYTHON);
			fr = new FileReader(path+"/"+dcr.getName()+".jpy");
		}											
		BufferedReader br = new BufferedReader(fr);
		IDataControl dc =  null;
		try{						
			dc = (IDataControl)scriptEngine.eval(br); 
			if (logger.isDebugEnabled()) {
				logger.debug(" Data-control instance obtained in: "+sw.getTime()+" ms");
			}
		} catch (Exception e) {
		    e.printStackTrace();
		}finally{
			br.close();
		}
		return dc;
	}
	
	
	
	
	
}
