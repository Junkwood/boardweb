package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.control.AddBoard;
import co.yedam.board.control.AddForm;
import co.yedam.board.control.BoardControl;
import co.yedam.board.control.BoardListControl;
import co.yedam.board.control.ModifyBoard;
import co.yedam.board.control.RemoveBoard;
import co.yedam.board.control.RemoveForm;
import co.yedam.board.control.UpdateForm;
import co.yedam.member.control.LoginControl;
import co.yedam.member.control.LoginForm;

//init -> service -> destroy.
public class FrontController extends HttpServlet {
	
	//Map타입으로 url과 실행할 클래스.
	Map<String, Control> controls;
	public FrontController(){
		controls = new HashMap<>();
	}
	
	//init.
	@Override
	public void init(ServletConfig config) throws ServletException {
		controls.put("/resume.do", new ResumeForm());
		controls.put("/main.do", new MainControl());
		//게시글 이동 컨트롤
		controls.put("/boardList.do", new BoardListControl());
		//단건조회
		controls.put("/board.do", new BoardControl());
		//수정
		controls.put("/updateForm.do", new UpdateForm());
		
		controls.put("/modifyBoard.do", new ModifyBoard());//수정처리후목록
		controls.put("/removeForm.do", new RemoveForm());//삭제화면으로 이동.
		controls.put("/removeBoard.do", new RemoveBoard());//삭제화면으로 이동.
		controls.put("/addForm.do", new AddForm());
		controls.put("/addBoard.do", new AddBoard());
		//회원관련
		controls.put("/loginForm.do", new LoginForm());
		controls.put("/login.do", new LoginControl());
		
	}
	
	//service.
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String uri= req.getRequestURI();//현재페이지 url
//		System.out.println("uri : "+uri);
		String context = req.getContextPath();//어플리케이션
//		System.out.println("context : "+context);
		String path = uri.substring(context.length());//경로
		System.out.println("path : "+path);
		
		Control control = controls.get(path);
		System.out.println(control);
		control.exec(req, resp);//요청url과 따른 실행컨트롤을 호출.
		
	}
}
