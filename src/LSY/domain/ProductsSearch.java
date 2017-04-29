package LSY.domain;

import java.util.Date;

public class ProductsSearch {
	private String productId;
	private String productName;
	private String categoryId;
	private String supplierId;
	private Double priceMin;
	private Double priceMax;
	private Date onlineDateStart;
	private Date onlineDateEnd;
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
	public Double getPriceMin() {
		return priceMin;
	}
	public void setPriceMin(Double priceMin) {
		this.priceMin = priceMin;
	}
	public Double getPriceMax() {
		return priceMax;
	}
	public void setPriceMax(Double priceMax) {
		this.priceMax = priceMax;
	}
	public Date getOnlineDateStart() {
		return onlineDateStart;
	}
	public void setOnlineDateStart(Date onlineDateStart) {
		this.onlineDateStart = onlineDateStart;
	}
	public Date getOnlineDateEnd() {
		return onlineDateEnd;
	}
	public void setOnlineDateEnd(Date onlineDateEnd) {
		this.onlineDateEnd = onlineDateEnd;
	}
	
}
