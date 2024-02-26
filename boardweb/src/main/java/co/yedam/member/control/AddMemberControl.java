package co.yedam.member.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.member.Member;
import co.yedam.member.service.MemberService;
import co.yedam.member.service.MemberServiceImpl;

public class AddMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//1)요청정보 2)저장경로 3)업로드 파일의 최대 파일크기 4)인코딩방식. 5)리네임 정책
		req.setCharacterEncoding("utf-8");
		String savePath = req.getServletContext().getRealPath("images");
		int maxSize = 1024*1024*5;
		String enc = "utf-8";
		DefaultFileRenamePolicy policy = new DefaultFileRenamePolicy();
		MultipartRequest multi = new MultipartRequest(req,savePath,maxSize,enc,policy);
		String id=multi.getParameter("id");
		String pw=multi.getParameter("pw");
		String name=multi.getParameter("name");
		String img = multi.getFilesystemName("image");//변경된 파일의 이름.
		System.out.println(img);
		//mapper:insertMember
		//service:addMember
		//게시글목록으로 이동/ 에러페이지.
		MemberService svc = new MemberServiceImpl();
		Member member = new Member();
		member.setId(id);
		member.setPw(pw);
		member.setName(name);
		member.setImage(img);
		
		if(svc.addMember(member)) {
			resp.sendRedirect("main.do");
		}else {
			req.setAttribute("message", "등록 중 에러가 발생헀습니다.");
			String path = "WEB-INF/view/error.jsp";
			req.getRequestDispatcher(path).forward(req, resp);
		}
		
	}

}
