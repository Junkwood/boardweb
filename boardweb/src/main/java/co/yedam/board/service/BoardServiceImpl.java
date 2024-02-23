package co.yedam.board.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.Board;
import co.yedam.board.mapper.BoardMapper;
import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;

//업무로직을 담고있는 프로세스
//데이터 처리는 mapper기능.
public class BoardServiceImpl implements BoardService{
	
	SqlSession session = DataSource.getInstance().openSession(true);//openSession() 에 true 값넣으면 자동커밋됨.기본값은 false로 DML문 커밋되지 않음. 
	BoardMapper mapper = session.getMapper(BoardMapper.class);
	
	@Override
	public List<Board> boardList(SearchVO search){
		return mapper.boardList(search);
	}
	
	@Override
	public int boardTotalCnt(SearchVO search) {
		return mapper.getTotalCnt(search);
	}
	@Override
	public Board getBoard(int bno) {
		mapper.updateCount(bno);
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean modifyBoard(Board board) {
		return mapper.updateBoard(board)==1;
	}

	@Override
	public boolean removeBoard(int bno) {
		return mapper.deleteBoard(bno)==1;
	}

	@Override
	public boolean addBoard(Board board) {
		return mapper.insertBoard(board)==1;
	}
	

}
