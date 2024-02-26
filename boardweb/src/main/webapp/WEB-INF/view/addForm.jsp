<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<h3>등록화면</h3>
<form action="addBoard.do"	method="post">
	<table class="table">
		<tr>
			<th>제목</th>
			<td><input type="text" class="form-control" name="title" required></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><textarea class="form-control" name="content" required></textarea></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><input type="text" class="form-control" name="writer" value="${logid}" readonly required></td>
		</tr>
		<tr>
			<td align="center" colspan="2" >
				<button type="submit" class="btn btn-primary">등록</button>
				<button type="reset" class="btn btn-secondary" onclick="cancelFunc()">취소</button>
			</td>
		</tr>
	</table>
</form>
<script>
  function cancelFunc(){
	let form = document.querySelector('form');
	form.action = 'boardList.do';
	form.submit();
  }
</script>