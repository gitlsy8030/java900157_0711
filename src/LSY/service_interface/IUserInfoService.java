package LSY.service_interface;

import java.io.IOException;
import java.util.List;

import LSY.annotation.AuthEnum;
import LSY.domain.LoginInfo;
import LSY.domain.ResultInfo;
import LSY.domain.UserAuthentication;
import LSY.domain.UserInfo;
import LSY.exception.MailFailedException;
import LSY.exception.UserExistException;

public interface IUserInfoService {
	void Register(UserInfo userInfo) throws IOException, UserExistException;
	LoginInfo Login(UserInfo usrInfo);
	LoginInfo Login(UserInfo usrInfo,String sessionId);
	void ChangePassword(UserInfo userInfo,String newPassword);
	void LostPassword(UserInfo userInfo) throws MailFailedException;
	ResultInfo ResetPassword(String userId,String registerMail);
	ResultInfo AdvancedValidate(String userId, String password);
	ResultInfo UserIdValidate(String userId);
	boolean IsLogin();
	void Logout();
	UserInfo GetUserInfo(String userId);
	Boolean IsUserAuthFun(String userId,String functionId,AuthEnum type) throws Exception;
	void UpdateFunAuthById(String userId,List<UserAuthentication> authFuns);
}