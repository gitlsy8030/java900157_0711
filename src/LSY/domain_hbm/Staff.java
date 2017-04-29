package LSY.domain_hbm;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

//@Entity
//@Table(name="Staff")
public class Staff implements Serializable{
	//@Id
	//@GenericGenerator(name = "keyGenerotorType", strategy = "assigned")
	//@GeneratedValue(generator="keyGenerotorType")
	//@Column(name="staff_Nbr")
	private Integer staff_Nbr;
	
	//@Column(name="staff_Code")
	private String staff_Code;
	
	//@Column(name="staff_Name")
	private String staff_Name;
	
	//@Column(name="psn_Id")
	private String psn_Id;
	
	public Integer getStaff_Nbr() {
		return staff_Nbr;
	}
	public void setStaff_Nbr(Integer staff_Nbr) {
		this.staff_Nbr = staff_Nbr;
	}
	public String getStaff_Code() {
		return staff_Code;
	}
	public void setStaff_Code(String staff_Code) {
		this.staff_Code = staff_Code;
	}
	public String getStaff_Name() {
		return staff_Name;
	}
	public void setStaff_Name(String staff_Name) {
		this.staff_Name = staff_Name;
	}
	public String getPsn_Id() {
		return psn_Id;
	}
	public void setPsn_Id(String psn_Id) {
		this.psn_Id = psn_Id;
	}
	@Override
	public String toString() {
		return "Staff [staff_Nbr=" + staff_Nbr + ", staff_Code=" + staff_Code + ", staff_Name=" + staff_Name
				+ ", psn_Id=" + psn_Id + "]";
	}
	
//	private String addr;
//	private String zipCODE;
//	private String phone;
}
