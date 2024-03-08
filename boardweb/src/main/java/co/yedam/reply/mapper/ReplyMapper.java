package co.yedam.reply.mapper;

import java.util.List;
import java.util.Map;

import co.yedam.common.Center;
import co.yedam.common.SearchVO;
import co.yedam.reply.Reply;

public interface ReplyMapper {
	//목록,등록,삭제
	List<Reply> selectList(SearchVO search);
	List<Reply> selectList2(int bno);
	int insertReply(Reply reply);
	int deleteReply(int rno);
	
	int selectCount(int bno);
	//여러건 등록(센터)
	int insertCenter(Center[] array);
	int deleteCenter(Center[] array);
	
	//chart
	List<Map<String, Object>> countPerSido();
}
