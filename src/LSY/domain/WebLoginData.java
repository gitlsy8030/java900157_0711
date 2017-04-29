package LSY.domain;

import java.util.HashMap;
import java.util.Map;

public class WebLoginData {
	private static Map<LoginKey,LoginInfo> AllUsers=new HashMap<LoginKey,LoginInfo>();

	public static Map<LoginKey, LoginInfo> getAllUsers() {
		return AllUsers;
	}

	public static void setAllUsers(Map<LoginKey, LoginInfo> allUsers) {
		AllUsers = allUsers;
	} 
}
