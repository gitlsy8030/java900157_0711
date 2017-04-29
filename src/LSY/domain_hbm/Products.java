package LSY.domain_hbm;

import java.util.Date;

public class Products {
	private String productId;
	private String productName;	
	private Double price;
	private String productDesc;
	private Date onlineDate;
	private String supplierId;
	private Categories categories;
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
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public Date getOnlineDate() {
		return onlineDate;
	}
	public void setOnlineDate(Date onlineDate) {
		this.onlineDate = onlineDate;
	}
	public String getSupplierId() {
		return supplierId;
	}
	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}
	public Categories getCategories() {
		return categories;
	}
	public void setCategories(Categories categories) {
		this.categories = categories;
	}
	@Override
	public String toString() {
		return "Products [productId=" + productId + ", productName=" + productName + ", price=" + price
				+ ", categoryId=" + categories.getCategoryId() + ", categoryName=" + categories.getCategoryName() + "]";
	}
	
	
}
