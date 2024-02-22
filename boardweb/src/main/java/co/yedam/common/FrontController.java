package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	}
	
	//service.
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String uri= req.getRequestURI();//현재페이지 url
		System.out.println("uri : "+uri);
		String context = req.getContextPath();//어플리케이션
		System.out.println("context : "+context);
		String path = uri.substring(context.length());//경로
		System.out.println("path : "+path);
		
		Control control = controls.get(path);
		control.exec(req, resp);//요청url과 따른 실행컨트롤을 호출.
		
	}
}
