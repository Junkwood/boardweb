<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
  <h3>상세조회</h3>
  <form action = "updateForm.do">
  <input type="hidden" value="${board.boardNo }" name ="bno">
    <table class ="table">
      <tr>
        <th>글번호</th>
        <td>${board.boardNo }</td>
        <th>조회수</th>
        <td>${board.viewCnt }</td>
      </tr>
      <tr>
        <th colspan="2">글제목</th>
        <td colspan="2">${board.title }</td>
      </tr>
      <tr>
       <td colspan="4">${board.content}</td>
      </tr>
      <tr>
        <th>작성자</th><td>${board.writer}</td>
        <th>작성일시</th><td>${board.createDate}</td>
      </tr>
      <tr>
        <td colspan="4" align="center">
        <c:choose>
          <c:when test="${board.writer eq logid}">
          <button type="submit" class="btn btn-primary">수정</button>
          <button type="button" class="btn btn-danger" onclick="removeFunc()">삭제</button>
          </c:when>
          <c:otherwise>
          <button type="submit" class="btn btn-primary" disabled>수정</button>
          <button type="button" class="btn btn-danger" disabled onclick="removeFunc()">삭제</button>
          </c:otherwise>
        </c:choose>
        </td>
      </tr>
    </table>
  </form>


<script>
  function removeFunc(){
	let form = document.querySelector('form');
	form.action = 'removeForm.do';
	form.submit();
	form.action = 'updateForm.do';
  }
  
</script>