package LSY.dao_interface;

import java.io.IOException;

import LSY.domain.UserInfo;

public interface IUserInfoDao {

	// 以反射操作bean=>userInfo
	void Add(UserInfo userInfo,boolean isBatchAdd) throws IOException;

	//以 Introspector操作javeBean
	UserInfo Find(String userId, String password);

	boolean Find(UserInfo userInfo);
	
	void Update(UserInfo userInfo,String [] params);

}