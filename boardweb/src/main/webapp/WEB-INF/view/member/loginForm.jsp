<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${!empty message }">
<p color="red">${message }</p>
</c:if>

<form action="login.do" method="get">
	<table class="table">
		<tr>
			<th>아이디</th>
			<td><input type="text" class="form-control" name="id"></td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input type="password" class="form-control" name="pw"></td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<button type="submit" class="btn btn-primary">로그인	</button>
				<button type="button" class="btn btn-light" onclick="regiFunc()">회원가입	</button>
			</td>
		</tr>
	</table>
</form>

<script>
function regiFunc(){
	let form = document.querySelector('form');
	form.action = 'addMemberForm.do';
	form.submit();
  }
</script>