package net.nan21.lib.settings;

import java.io.File;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

public class SettingsManager {
	  
	public static void loadSettings(String sourceFile ) { 
		SAXParserFactory factory = SAXParserFactory.newInstance();
        try {
            SAXParser saxParser = factory.newSAXParser();
            saxParser.parse( new File(sourceFile), new SettingsReader() );
        } catch (Throwable t) {
            t.printStackTrace ();
        }
	}
	
	public static void loadCustomDc(String sourceFile ) { 
		SAXParserFactory factory = SAXParserFactory.newInstance();
        try {
            SAXParser saxParser = factory.newSAXParser();
            saxParser.parse( new File(sourceFile), new CustomDcReader() );
        } catch (Throwable t) {
            t.printStackTrace ();
        }
	}
	
}
