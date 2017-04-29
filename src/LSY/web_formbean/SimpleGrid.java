package LSY.web_formbean;

import java.util.List;
import java.util.Map;
import java.util.AbstractMap.SimpleEntry;

import org.apache.commons.codec.binary.Base64;

import com.solidfire.gson.Gson;

public class SimpleGrid<T> {
	private int totalCount;
	private int rowStart;
	private int rowEnd;
	private int totalPage;
	private int pageSize;
	private int currentPage;
	private int pageNum;	
	private List<T> pageList;
	private String className;
	private String url;
	private Boolean isIncludeJs;
	
	private Map<String,List<SimpleEntry<String,String>>> attachData;
	
	private String searchCondition;
	
	
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	
	public int getRowStart() {
		return rowStart;
	}
	public void setRowStart(int rowStart) {
		this.rowStart = rowStart;
	}
	public int getRowEnd() {
		return rowEnd;
	}
	public void setRowEnd(int rowEnd) {
		this.rowEnd = rowEnd;
	}
	
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public List<T> getPageList() {
		return pageList;
	}
	public void setPageList(List<T> pageList) {
		this.pageList = pageList;
	}
	public String getSearchCondition() {
		return searchCondition;
	}
	public void setSearchCondition(String searchCondition) {
		this.searchCondition=searchCondition;
	}	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}	
	public String getClassName() {
		return className;
	}
	public void setCalssName(String className) {
		this.className = className;
	}
	public Map<String, List<SimpleEntry<String, String>>> getAttachData() {
		return attachData;
	}
	public void setAttachData(Map<String, List<SimpleEntry<String, String>>> attachData) {
		this.attachData = attachData;
	}
	public Boolean getIsIncludeJs() {
		return isIncludeJs;
	}
	public void setIsIncludeJs(Boolean isIncludeJs) {
		this.isIncludeJs = isIncludeJs;
	}
	
}
