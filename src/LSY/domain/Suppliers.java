package LSY.domain;


import java.util.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

public class Suppliers {
	@Size(min=5,max=8,message="{size.supplierId}")
	private String supplierId;
	@NotNull(message="{notNull}")
	@NotEmpty(message="{notEmpty}")
	private String supplierName;
	@Size(min=2,max=10,message="{size.name}")
	private String contactName;
	@Size(min=6,max=20,message="{size.range}")
	private String contactTel;	
	private String contactAddr;	
	@NotNull(message="{notNull}")	
	@Past(message="{past}")
	//@DateTimeFormat(pattern="yyyy/MM/dd")
	private Date contractDate;
	@NotNull(message="{notNull}")
	private String uniformNo;
	@NotNull(message="{notNull}")
	@Range(min=100,max=3000,message="{range}")
	private Integer creditLine;
	public String getSupplierId() {
		return supplierId;
	}
	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}
	public String getSupplierName() {
		return supplierName;
	}
	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	public String getContactTel() {
		return contactTel;
	}
	public void setContactTel(String contactTel) {
		this.contactTel = contactTel;
	}
	public String getContactAddr() {
		return contactAddr;
	}
	public void setContactAddr(String contactAddr) {
		this.contactAddr = contactAddr;
	}
	public Date getContractDate() {
		return contractDate;
	}
	public void setContractDate(Date contractDate) {
		this.contractDate = contractDate;
	}
	public String getUniformNo() {
		return uniformNo;
	}
	public void setUniformNo(String uniformNo) {
		this.uniformNo = uniformNo;
	}
	public Integer getCreditLine() {
		return creditLine;
	}
	public void setCreditLine(Integer creditLine) {
		this.creditLine = creditLine;
	}
	
}
