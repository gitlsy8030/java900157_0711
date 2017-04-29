package LSY.domain_hbm;

import java.util.Set;

public class Categories {
	private String categoryId;
	private String categoryName;
	private Set<Products> productList;
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public Set<Products> getProductList() {
		return productList;
	}
	public void setProductList(Set<Products> productList) {
		this.productList = productList;
	}
	@Override
	public String toString() {
		return "Categories [categoryId=" + categoryId + ", categoryName=" + categoryName + 
				", productList count=" + productList.size() + 
				", productList hashCode=" + productList.hashCode() +
				"]";
	}

}
