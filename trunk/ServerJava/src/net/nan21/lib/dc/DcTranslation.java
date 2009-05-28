package net.nan21.lib.dc;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import net.nan21.lib.settings.Settings;
 

public class DcTranslation {

	public static final String LANG_EN = "en";
	public static final String LANG_RO = "ro";
	
	
	private static Map<String, Map<String, Map<String, String >>> trls = new HashMap<String, Map<String, Map<String, String >>>();
	
	
	private DcTranslation() {
		
	}
	
	public static void add() {
		
	}
	
	
	
	public static Map<String, String> get(String dcCode, String language, boolean forceLoad) {	
		if (dcCode.startsWith("LOV")) {
			return null;
		}
		if (trls.containsKey(dcCode) && trls.get(dcCode).containsKey(language)) {	 
			return trls.get(dcCode).get(language);		 
		} else {
			if (forceLoad) {
				load(dcCode);	
			}			
		}
		if (trls.containsKey(dcCode) && trls.get(dcCode).containsKey(language)) {
			return trls.get(dcCode).get(language);
		} else {
			return null;	
		}		
	}
	
	
	public static void load(String dcCode) {
		String path = Settings.getInstance().getPaths().get(Settings.PATH_DC_TRANSLATION);
		
		SAXParserFactory factory = SAXParserFactory.newInstance();
        try {        	
            SAXParser saxParser = factory.newSAXParser();
            //Map<String, String> trl = new HashMap<String, String>();
            if (!trls.containsKey(dcCode)){
            	trls.put(dcCode, new HashMap<String, Map<String,String>>());
            }  
            
            trls.get(dcCode).put(LANG_EN, new HashMap<String, String>() );
            trls.get(dcCode).put(LANG_RO, new HashMap<String, String>() );
            
            saxParser.parse( new File(path+"/"+dcCode.toUpperCase()+"_"+LANG_EN)+".xml", new DcTranslReader(trls.get(dcCode).get(LANG_EN)) );
            saxParser.parse( new File(path+"/"+dcCode.toUpperCase()+"_"+LANG_RO)+".xml", new DcTranslReader(trls.get(dcCode).get(LANG_RO)) );
            
        } catch (Throwable t) {
            t.printStackTrace ();
        }
	}
	
	public static void refresh(String dcCode) {
		load(dcCode);
	}
	
	
	
	
	
	
	
	
	
	
	
}
