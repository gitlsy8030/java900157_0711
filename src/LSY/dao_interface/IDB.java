package LSY.dao_interface;

import java.io.IOException;
import java.sql.Connection;

public interface IDB {
	Connection GetConncetion() throws IOException, Exception;
}
