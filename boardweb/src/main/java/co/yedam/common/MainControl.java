package co.yedam.common;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//java파일:src/main/java
		//web파일:src/main/webapp
		String path = "WEB-INF/view/main.jsp";
		RequestDispatcher dispatch = req.getRequestDispatcher(path);//getRequestDispatcher는 페이지를 재지정하는 객체.
				dispatch.forward(req, resp); //페이지 재지정

	}

}
