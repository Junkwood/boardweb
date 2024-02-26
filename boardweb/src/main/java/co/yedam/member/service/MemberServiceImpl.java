package co.yedam.member.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.Board;
import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.member.Member;
import co.yedam.member.mapper.MemberMapper;

public class MemberServiceImpl implements MemberService {

	SqlSession session = DataSource.getInstance().openSession(true);//openSession() 에 true 값넣으면 자동커밋됨.기본값은 false로 DML문 커밋되지 않음. 
	MemberMapper mapper = session.getMapper(MemberMapper.class);
	
	@Override
	public Member loginCheck(Member member) {
		return mapper.selectMember(member);
	}

	@Override
	public boolean addMember(Member member) {
		return mapper.insertMember(member)==1;
	}
	@Override
	public List<Member> memberList(SearchVO search){
		return mapper.memberList(search);
	}
	@Override
	public int memberTotalCnt(SearchVO search) {
		return mapper.getTotalCnt(search);
	}


}
