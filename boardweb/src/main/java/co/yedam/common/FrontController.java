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
import co.yedam.board.control.AddBookControl;
import co.yedam.board.control.AddForm;
import co.yedam.board.control.BoardControl;
import co.yedam.board.control.BoardListControl;
import co.yedam.board.control.BookListControl;
import co.yedam.board.control.CartListContol;
import co.yedam.board.control.ModifyBoard;
import co.yedam.board.control.ProductListContol;
import co.yedam.board.control.RemoveBoard;
import co.yedam.board.control.RemoveBookControl;
import co.yedam.board.control.RemoveForm;
import co.yedam.board.control.UpdateForm;
import co.yedam.member.control.AddMemberControl;
import co.yedam.member.control.AddMemberForm;
import co.yedam.member.control.LoginControl;
import co.yedam.member.control.LoginForm;
import co.yedam.member.control.LogoutControl;
import co.yedam.member.control.MemberListControl;
import co.yedam.reply.control.AddReplyControl;
import co.yedam.reply.control.RemoveReplyControl;
import co.yedam.reply.control.ReplyListControl;
import co.yedam.reply.control.ReplyTotalCount;

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
		controls.put("/logout.do", new LogoutControl());
		//회원등록
		controls.put("/addMember.do", new AddMemberControl());
		controls.put("/addMemberForm.do", new AddMemberForm());
		controls.put("/memberList.do", new MemberListControl());
		//기타
		controls.put("/productList.do",new ProductListContol());
		
		controls.put("/cartList.do",new CartListContol());
		//자바스크립트 연습
		controls.put("/userList.do",new UserListContol());
		//Ajax 연습
		controls.put("/bookList.do", new BookListControl());
		controls.put("/addBook.do", new AddBookControl());
		controls.put("/removeBook.do", new RemoveBookControl());
		//댓글관련.
		controls.put("/replyList.do", new ReplyListControl());
		controls.put("/removeReply.do", new RemoveReplyControl());
		controls.put("/addReply.do", new AddReplyControl());
		controls.put("/getTotal.do", new ReplyTotalCount());
		//
		controls.put("/registerCenter.do", new RegisterCenter());
		controls.put("/getSidoInfo.do", new SidoInfoControl());
		//
		controls.put("/dataTable.do", new DataTableControl());
	}
	
	//service.
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
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
