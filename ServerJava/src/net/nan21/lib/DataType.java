package net.nan21.lib;

public class DataType {

	public static final String NUMBER = "number";
	public static final String STRING = "string";
	public static final String DATE = "date";
	public static final String TIME = "time";
	public static final String DATETIME = "datetime";
	public static final String BOOLEAN = "boolean";
	
	public static int toSqlType(String dataType) {
		
		if (dataType.equals(STRING)) {
			return java.sql.Types.VARCHAR;			
		}else if (dataType.equals(NUMBER)) {
			return java.sql.Types.NUMERIC;			
		}else if (dataType.equals(DATE)) {
			return java.sql.Types.DATE;			
		}else { 
			return java.sql.Types.VARCHAR;			
		}
		
	}
	
}
