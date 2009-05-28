package net.nan21.lib.dc;





/**
 * <p>
 * <code>FieldDef</code> encapsulates the definition of the data-control fields.
 * </p>
 * 
 */

public class FieldDef {
	/**
	 * Field data type
	 */
	private String dataType;
	/**
	 * Case restriction for alphanumeric values
	 */
	private String caseRestriction;
	/**
	 * Specifies if field gets its value from the data-control data-source.
	 */
	private boolean inDS = true;
	
    /**
     * <p>
     * Constructor.
     * </p>
     */
	public FieldDef(String dataType) {
		this.dataType = dataType;
	}
    /**
     * <p>
     * Constructor.
     * </p>
     */
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
