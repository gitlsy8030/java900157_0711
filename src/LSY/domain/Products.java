package LSY.domain;

import java.util.Date;

public class Products {
	private String productId;
	private String productName;
	private String productDesc;
	private Double price;
	private String categoryId;
	private String supplierId;
	private Date onlineDate;
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
	public String getSupplierId() {
		return supplierId;
	}
	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}
	public Date getOnlineDate() {
		return onlineDate;
	}
	public void setOnlineDate(Date onlineDate) {
		this.onlineDate = onlineDate;
	}	
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
}
