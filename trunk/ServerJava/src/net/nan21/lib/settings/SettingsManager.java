package net.nan21.lib.settings;

import java.io.File;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.apache.log4j.Logger;

public class SettingsManager {
	
	private static boolean settingsReady;
	private static Logger logger = Logger.getLogger(SettingsManager.class); 		
	
	public static boolean isSettingsReady() {
		return settingsReady;
	}
	
	public static synchronized void loadSetting(String rootPath, String cfgFilePath) throws Exception {
		if (!settingsReady) {
			logger.info("Looking for configuration files in: "+cfgFilePath);
			logger.info("Loading settings from applicationConfig.xml ... ");
			SettingsManager.loadConfig(rootPath, cfgFilePath+"/applicationConfig.xml");
			logger.info("Loading settings from customDataControls.xml ... ");
			SettingsManager.loadCustomDc(rootPath, cfgFilePath+"/customDataControls.xml");
			Settings.getInstance().validate();		
			settingsReady = true;
		}			 		
	}
	
	
	private static void loadConfig(String rootPath, String sourceFile ) { 
		SAXParserFactory factory = SAXParserFactory.newInstance();
        try {
            SAXParser saxParser = factory.newSAXParser();
            saxParser.parse( new File(sourceFile), new SettingsReader(rootPath) );
        } catch (Throwable t) {
            t.printStackTrace ();
        }
	}
	
	private static void loadCustomDc(String rootPath, String sourceFile ) { 
		SAXParserFactory factory = SAXParserFactory.newInstance();
        try {
            SAXParser saxParser = factory.newSAXParser();
            saxParser.parse( new File(sourceFile), new CustomDcReader(rootPath) );
        } catch (Throwable t) {
            t.printStackTrace ();
        }
	}
	
}
