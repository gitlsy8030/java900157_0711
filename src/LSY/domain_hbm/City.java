package LSY.domain_hbm;

import java.io.Serializable;
import java.util.Date;

public class City {
	private String city_Code;
	private String city_Cname;
	private String city_Ename;	
	private Integer region_Nbr;
	private Integer city_Nbr;
	//private Integer cty_Nbr;
	private String createUser;
	private Date createStamp;
	private String modifyUser;
	private Date modifyStamp;
	private Country country;
	public String getCity_Code() {
		return city_Code;
	}
	public void setCity_Code(String city_Code) {
		this.city_Code = city_Code;
	}
	public String getCity_Cname() {
		return city_Cname;
	}
	public void setCity_Cname(String city_Cname) {
		this.city_Cname = city_Cname;
	}
	public String getCity_Ename() {
		return city_Ename;
	}
	public void setCity_Ename(String city_Ename) {
		this.city_Ename = city_Ename;
	}
	public Integer getRegion_Nbr() {
		return region_Nbr;
	}
	public void setRegion_Nbr(Integer region_Nbr) {
		this.region_Nbr = region_Nbr;
	}
	public Integer getCity_Nbr() {
		return city_Nbr;
	}
	public void setCity_Nbr(Integer city_Nbr) {
		this.city_Nbr = city_Nbr;
	}
//	public Integer getCty_Nbr() {
//		return cty_Nbr;
//	}
//	public void setCty_Nbr(Integer cty_Nbr) {
//		this.cty_Nbr = cty_Nbr;
//	}
	public String getCreateUser() {
		return createUser;
	}
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
	public Date getCreateStamp() {
		return createStamp;
	}
	public void setCreateStamp(Date createStamp) {
		this.createStamp = createStamp;
	}
	public String getModifyUser() {
		return modifyUser;
	}
	public void setModifyUser(String modifyUser) {
		this.modifyUser = modifyUser;
	}
	public Date getModifyStamp() {
		return modifyStamp;
	}
	public void setModifyStamp(Date modifyStamp) {
		this.modifyStamp = modifyStamp;
	}
	public Country getCountry() {
		return country;
	}
	public void setCountry(Country country) {
		this.country = country;
	}	
	
}
