package LSY.domain;

import java.util.List;
import java.util.Map;

public class TreeMenuNode {
	private int id;
	private String text;
	private String iconCls;
	private String state;
	private Boolean checked;
	private List<TreeMenuNode> children;
	private Map<String,Object> attributes;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Boolean getChecked() {
		return checked;
	}
	public void setChecked(Boolean checked) {
		this.checked = checked;
	}
	public List<TreeMenuNode> getChildren() {
		return children;
	}
	public void setChildren(List<TreeMenuNode> children) {
		this.children = children;
	}
	public Map<String,Object> getAttributes() {
		return attributes;
	}
	public void setAttributes(Map<String,Object> attributes) {
		this.attributes = attributes;
	}
}
