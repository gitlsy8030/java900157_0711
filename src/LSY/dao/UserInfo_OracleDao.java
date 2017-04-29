package LSY.dao;

import java.io.IOException;

import LSY.dao_interface.IUserInfoDao;
import LSY.domain.UserInfo;

public class UserInfo_OracleDao implements IUserInfoDao{

	@Override
	public void Add(UserInfo userInfo,boolean isBatchAdd) throws IOException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public UserInfo Find(String userId, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean Find(UserInfo userInfo) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public void Update(UserInfo userInfo,String [] params) {
		// TODO Auto-generated method stub
		
	}

}
