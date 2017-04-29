package LSY.struts2_controller;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.util.ValueStack;

public class S2Mapping1 extends ActionSupport {
	private String name;
	private int myId;
	private String user;
	public String getName(){
		return name;
	}
	public int getMyId(){
		return myId;
	}
	public String getUser(){
		return user;
	}
	@Override
	public String execute() throws Exception {
		ActionContext context=ActionContext.getContext();
		ValueStack stack1=context.getValueStack();
		ValueStack stack2=context.getValueStack();
		Boolean isSameStack=(stack1 == stack2)? true:false;
		System.out.println("isSameStack="+isSameStack);
		//3.值栈賦值方式三：設定class內的private member並給予 getter
		//資料將被置於值栈預設栈頂元素(此處即為LSY.struts2_controller.S2Mapping1)之屬性內 
		//此種方式為常用
		name="alex";
		user="user 1201";
		myId=12345;
		//==============================================
		//1.值栈賦值方式一 ：.set賦值，此時將會由一java.lang.HashMap成為栈頂元素
		stack2.set("userName", "fred");
		//1.值栈賦值方式一 ：.push賦值，此時將會由一java.lang.String(或其他型別)成為栈頂元素
		stack1.push("abcd");
		stack1.push(isSameStack);
		return "S2Mapping1";
	}

}
