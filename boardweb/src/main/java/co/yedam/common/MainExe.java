package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.board.Board;
import co.yedam.board.mapper.BoardMapper;

public class MainExe {
	public static void main(String[] args) {
		SqlSessionFactory factory = DataSource.getInstance();
		SqlSession session = factory.openSession();
		
		BoardMapper mapper = session.getMapper(BoardMapper.class);
		List<Board> list = mapper.boardList();
//		List<Board> list=session.selectList("co.yedam.board.mapper.BoardMapper.boardList");
		for(Board board : list) {
			System.out.println(board.toString());
		}
	}
}
