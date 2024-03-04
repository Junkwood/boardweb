package co.yedam;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.reply.Reply;
import co.yedam.reply.mapper.ReplyMapper;

public class MapperTest {
	public static void main(String[] args) {
		SqlSession session = DataSource.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		Reply rep = new Reply();
//		rep.setBoardNo(89);
//		rep.setReply("89번댓글임");
//		rep.setReplyer("newbie");
//		mapper.insertReply(rep);
		
//		System.out.println(rep);
		SearchVO search = new SearchVO();
		search.setBno(90);
		search.setRpage(1);
		
		mapper.selectList(search)//List<Reply>
		.forEach(reply -> System.out.println(reply.toString()));
	}
}
