package co.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.BoardDAO;

//서블릿 실행:http://localhost:8080/boardweb/welcome.do
//프로젝트의 환경파일 web.xml에 등록.
//서블릿 컨테이너 : 서블릿의 생명주기(init -> service -> destroy) 관리.
//init() : 최초 요청때 한번 실행.
//service() : 요청이 있을때 마다 실행.
//destroy() : 서비스 종료.

public class WelcomeServlet extends HttpServlet {
	public WelcomeServlet() {
		System.out.println("WelcomeServlet실행");
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init 실행.");
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=utf-8");// 웹브라우저에 전송되는 컨텐츠 타입을 알려줌.
		System.out.println("service 실행.");

		String html = "<h3>여기는 servlet</h3>";
		html += "<a href='index.html'>인덱스로 이동</a>";
		// 글목록 출력 추가.
		BoardDAO dao = new BoardDAO();
		List<Board> list = dao.boardList();

		html += "<table border='1'>";
		html += "<thead><tr><th>글번호</th><th>제목</th><th>작성자</th><th>작성날짜</th></tr><thead>";
		html += "<tbody>";
		for (Board board : list) {
			html += "<tr><td>" + board.getBoardNo() + "</td><td>" + board.getTitle() + "</td><td>" + board.getWriter() +"</td><td>" +board.getCreateDate()
					+ "</td></tr>";
		}
		html += "</tbody></table>";
		PrintWriter out = resp.getWriter();// 클라이언트쪽으로 출력 스트림을 하나 만들어줌.
		out.print(html);// 웹브라우저에 보임.
	}

	@Override
	public void destroy() {
		System.out.println("destroy 실행.");
	}
}
