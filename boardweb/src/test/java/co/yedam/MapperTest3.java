package co.yedam;

import co.yedam.common.Center;
import co.yedam.common.DataSource;
import co.yedam.reply.mapper.ReplyMapper;

public class MapperTest3 {
	public static void main(String[] args) {
		Center c1 = new Center();
		c1.setId(1);
		c1.setCenterName("center1");
		c1.setSido("sido1");
		c1.setPhoneNumber("010-111");
		c1.setAddress("address1");
		Center c2 = new Center();
		c2.setId(2);
		c2.setCenterName("center2");
		c2.setSido("sido2");
		c2.setPhoneNumber("010-1112");
		c2.setAddress("address2");
		Center[] list = {c1,c2};
		ReplyMapper mapper = DataSource.getInstance().openSession(true).getMapper(ReplyMapper.class);
		System.out.println(mapper.deleteCenter(list));
		
	}
}
