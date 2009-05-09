package net.nan21.lib;

public class FieldDef {
	private String dataType;
	private String caseRestriction;
	private boolean inDS = true;
	
	public FieldDef(String dataType) {
		this.dataType = dataType;
	}

	public FieldDef(String dataType, String caseRestriction) {
		this.dataType = dataType;
		this.caseRestriction = caseRestriction;
	}

	
	public String getDataType() {
		return dataType;
	}

	public String getCaseRestriction() {
		return caseRestriction;
	}

	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	public void setCaseRestriction(String caseRestriction) {
		this.caseRestriction = caseRestriction;
	}

	public boolean isInDS() {
		return inDS;
	}

	public void setInDS(boolean inDS) {
		this.inDS = inDS;
	}

}
