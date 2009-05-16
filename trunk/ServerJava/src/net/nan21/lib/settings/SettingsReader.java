package net.nan21.lib.settings;
 
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class SettingsReader extends DefaultHandler {
	
	private Settings settings;
	
	public SettingsReader() {
		super();
		this.settings = Settings.getInstance();
	}
	
	
	public void startDocument () throws SAXException {
        //showData ("<?xml version='1.0' encoding='UTF-8'?>");
    }

    public void endDocument()  throws SAXException {
        
    }
    
    public void startElement (String uri, String name, String qName, Attributes atts) throws SAXException {
        if (qName.equals(Settings.TAG_DB_INSTANCE)) {
        	this.settings.getDbInstances().put(atts.getValue("name"), new SettingsDbInstance(atts.getValue("name"),atts.getValue(Settings.TAG_DB_INSTANCE_JNDINAME)));
        }
    	if (qName.equals(Settings.TAG_TECHNOLOGY_STACK)) {
    		this.settings.setDefaultDcImpl(atts.getValue(Settings.TAG_DEFAULT_TECHNOLOGY));
    		this.settings.setDefaultDcNamespace(atts.getValue(Settings.TAG_DEFAULT_NAMESPACE));
    	}
    	if (qName.equals(Settings.TAG_SECURITY_MANAGER)) {
    		this.settings.setSecurityManagerClassName(atts.getValue("className"));
    	}
    	
    	if (qName.equals(Settings.TAG_PATH)) {
    		this.settings.getPaths().put(atts.getValue("name"), atts.getValue("value") );
    	}
    	 
    	
    }

    public void endElement(String name) throws SAXException {
        showData ("</"+name+">");
    }
    
    
    private void showData (String s) throws SAXException {       
    	System.out.println(s);      
    }
    
    
    
    
}
