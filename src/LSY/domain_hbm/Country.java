package LSY.domain_hbm;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

public class Country implements Serializable{
	private Integer region_Nbr;
	private Integer currency_Nbr;
	private String cty_Ename;
	private String cty_Cname;
	private Integer cty_Nbr;	
	private String cty_Code;	
	private String telId;
	private Integer route_Nbr;
	private String createUser;
	private Date createStamp;
	private String modifyUser;
	private Date modifyStamp;
	private Set<City> cityList;
	
	public Integer getRegion_Nbr() {
		return region_Nbr;
	}
	public void setRegion_Nbr(Integer region_Nbr) {
		this.region_Nbr = region_Nbr;
	}
	public Integer getCurrency_Nbr() {
		return currency_Nbr;
	}
	public void setCurrency_Nbr(Integer currency_Nbr) {
		this.currency_Nbr = currency_Nbr;
	}
	public String getCty_Ename() {
		return cty_Ename;
	}
	public void setCty_Ename(String cty_Ename) {
		this.cty_Ename = cty_Ename;
	}
	public String getCty_Cname() {
		return cty_Cname;
	}
	public void setCty_Cname(String cty_Cname) {
		this.cty_Cname = cty_Cname;
	}
	public Integer getCty_Nbr() {
		return cty_Nbr;
	}
	public void setCty_Nbr(Integer cty_Nbr) {
		this.cty_Nbr = cty_Nbr;
	}
	
	public String getCty_Code() {
		return cty_Code;
	}
	public void setCty_Code(String cty_Code) {
		this.cty_Code = cty_Code;
	}
	public String getTelId() {
		return telId;
	}
	public void setTelId(String telId) {
		this.telId = telId;
	}
	public Integer getRoute_Nbr() {
		return route_Nbr;
	}
	public void setRoute_Nbr(Integer route_Nbr) {
		this.route_Nbr = route_Nbr;
	}
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
	public Set<City> getCityList() {
		return cityList;
	}
	public void setCityList(Set<City> cityList) {
		this.cityList = cityList;
	}
	
	
}
