package co.yedam.board.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Book;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;
import co.yedam.common.Control;

public class AddBookControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.setContentType("text/json;charset=utf-8");

		String bcode = req.getParameter("bcode");
		String bname = req.getParameter("bname");
		String author = req.getParameter("bauth");
		String press = req.getParameter("bpress");
		String price = req.getParameter("bprice");
		Book book = new Book();
		book.setBookCode(bcode);
		book.setBookName(bname);
		book.setAuthor(author);
		book.setPress(press);
		book.setPrice(Integer.parseInt(price));

		BoardService svc = new BoardServiceImpl();
		try {
			if (svc.addBook(book)) {
				// {"retCod":"OK"}
				resp.getWriter().print("{\"retCode\":\"OK\"}");
			}
		} catch (Exception e) {
			// {"retCod":"NG"}
			e.printStackTrace();
			resp.getWriter().print("{\"retCode\":\"NG\"}");

		}
	}

}
