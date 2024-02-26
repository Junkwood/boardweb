<%@page import="co.yedam.board.Board"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    Board board = (Board) request.getAttribute("board");
  %>
  <h3>글삭제</h3>
<form action = "removeBoard.do">
<input type="hidden" value="<%=board.getBoardNo() %>" name ="bno">
  <table class="table">
    <tr>
      <th>글번호</th>
      <td><%=board.getBoardNo() %></td>
    </tr>
    <tr>
      <th>제목</th>
      <td><%=board.getTitle() %></td>
    </tr>
    <tr>
      <td colspan="2"align="center">
        <button type="submit"class="btn btn-danger">삭제</button>
        <button type="reset"class="btn btn-secondary" onclick="cancelFunc()">취소</button>
      </td>
    </tr>
  </table>
</form>

<script>
  function cancelFunc(){
	let form = document.querySelector('form');
	form.action = 'board.do';
	form.submit();
  }
</script>