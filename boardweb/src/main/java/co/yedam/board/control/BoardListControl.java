package co.yedam.board.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;
import co.yedam.common.Control;
import co.yedam.common.PageDTO;
import co.yedam.common.SearchVO;

public class BoardListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		
		String searchCond = req.getParameter("searchCondition");
		String keyword = req.getParameter("keyword");
		
		//검색조건
		SearchVO search = new SearchVO();
		search.setPage(Integer.parseInt(page));
		search.setSearchCondition(searchCond);
		search.setKeyword(keyword);
		
		BoardService svc = new BoardServiceImpl();
		List<Board> list = svc.boardList(search);
		
		PageDTO pageDTO = new PageDTO(Integer.parseInt(page),svc.boardTotalCnt(search));
		//boardList.do 페이지에서 boardList.jsp로 데이터 전달.
		req.setAttribute("list", list);
		req.setAttribute("page", pageDTO);
		req.setAttribute("searchCondition", searchCond);
		req.setAttribute("keyword", keyword);
		
		String path = "board/boardList.tiles";
		RequestDispatcher dispatch = req.getRequestDispatcher(path);//getRequestDispatcher는 페이지를 재지정하는 객체.
				dispatch.forward(req, resp); //페이지 재지정
	}

}
