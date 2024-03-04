package co.yedam.reply.mapper;

import java.util.List;

import co.yedam.common.SearchVO;
import co.yedam.reply.Reply;

public interface ReplyMapper {
	//목록,등록,삭제
	List<Reply> selectList(SearchVO search);
	int insertReply(Reply reply);
	int deleteReply(int rno);
	
	int selectCount(int bno);
	
}
