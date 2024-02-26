package co.yedam.board.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;
import co.yedam.common.Control;

public class RemoveBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String bno = req.getParameter("bno");
		//mapper=>in deleteBoard(int)
		//service=>boolean removeBoard(int)
		//정상 삭제되면 목록이동, 아니면error
		BoardService svc = new BoardServiceImpl();
		if(svc.removeBoard(Integer.parseInt(bno))) {
			resp.sendRedirect("boardList.do");//해당페이저로 이동하라고 함.
		}else {
			req.setAttribute("message", "수정 중 에러가 발생헀습니다.");
			String path = "WEB-INF/view/error.jsp";
			req.getRequestDispatcher(path).forward(req, resp);
		}
	}

}
