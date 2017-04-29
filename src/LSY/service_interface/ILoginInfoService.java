package LSY.service_interface;

import java.util.Date;
import java.util.Map;

import LSY.domain.LoginInfo;

public interface ILoginInfoService {
	int GetLoginCount();
	String GetLoginUserId();
	String GetLoginUnserName();
	Date GetLoginTime();
	String GetLoginTimeToString();
	int GetCount();
	Map<String,LoginInfo> GetAllLogins();	
}
