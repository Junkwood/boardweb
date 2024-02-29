package co.yedam.board.mapper;

import java.util.List;

import co.yedam.board.Board;
import co.yedam.board.Book;
import co.yedam.common.SearchVO;

public interface BoardMapper {
	List<Board> boardList(SearchVO search);
	int getTotalCnt(SearchVO search);
	
	//상세화면에 사용될 데이터.
	Board selectBoard(int bno);
	
	//조회수 증가--int타입으로 반환이 필요함(처리건수가 반환되기때문)
	int updateCount(int bno);
	
	//글수정
	int updateBoard(Board board);
	//글삭제
	int deleteBoard(int bno);
	//글등록
	int insertBoard(Board board);
	//도서목록.
	List<Book> bookList();
	int insertBook(Book book);
	int deleteBook(String bcode);
}
