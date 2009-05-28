package net.nan21.lib.dc;

import net.nan21.lib.DataType;

public class ProcParamDef {

	
	private String paramName;
	private String dataType = DataType.STRING;
	private String binding;
	private String value;
	private int length=-1;
	private boolean inParam = true;
	private boolean outParam = false;
		
	
	public ProcParamDef(String paramName, String binding) {
		super();
		this.paramName = paramName;
		this.binding = binding;
	}
			
	
	public ProcParamDef(String paramName, String binding, String dataType) {
		super();
		this.paramName = paramName;
		this.dataType = dataType;
		this.binding = binding;
	}


	public ProcParamDef(String paramName, String binding, String dataType,
			boolean inParam, boolean outParam) {
		super();
		this.paramName = paramName;
		this.dataType = dataType;
		this.binding = binding;
		this.inParam = inParam;
		this.outParam = outParam;
	}




	public String getParamName() {
		return paramName;
	}
	public void setParamName(String paramName) {
		this.paramName = paramName;
	}
	public String getDataType() {
		return dataType;
	}
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}
	public String getBinding() {
		return binding;
	}
	public void setBinding(String binding) {
		this.binding = binding;
	}
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}
	public boolean isInParam() {
		return inParam;
	}
	public void setInParam(boolean inParam) {
		this.inParam = inParam;
	}
	public boolean isOutParam() {
		return outParam;
	}
	public void setOutParam(boolean outParam) {
		this.outParam = outParam;
	}


	public String getValue() {
		return value;
	}


	public void setValue(String value) {
		this.value = value;
	}
	
	
	
	
	
	
}
