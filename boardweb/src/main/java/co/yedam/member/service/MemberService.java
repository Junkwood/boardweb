package co.yedam.member.service;

import java.util.List;

import co.yedam.common.SearchVO;
import co.yedam.member.Member;

public interface MemberService {
	Member loginCheck(Member member);
	boolean addMember(Member member);
	List<Member> memberList(SearchVO search);
	int memberTotalCnt(SearchVO search);
	
}
