<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<h3>UserList page</h3>
<script src="static/js/userAjax.js"></script>

<input type="text" id="name" >
<select id = "genderList" class="form-control">
	<option value="All">전체</option>
	<option value="Male">남성</option>
	<option value="Female">여성</option>
</select>
<table class ="table">
	<tr>
		<th>도서코드</th>
		<td><input type="text" id="bcode"value="B005"></td>
	</tr>
	<tr>
		<th>도서명</th>
		<td><input type="text" id="bname" value="파워자바"></td>
	</tr>
	<tr>
		<th>저자</th>
		<td><input type="text" id="bauth"value="홍길동"></td>
	</tr>
	<tr>
		<th>출판사</th>
		<td><input type="text" id="bpress"value="행복출판사"></td>
	</tr>
	<tr>
		<th>가격</th>
		<td><input type="number" id="bprice"value="20000"></td>
	</tr>
	<tr>
		<td colspan="2" align="center">
			<button id="addBtn" class="btn btn-primary">등록</button>
		</td>
	</tr>
</table>
<div id="show">
	<table border="1" id="tableList" class="table">
		<thead>
		
		</thead>
		<tbody>

		</tbody>
	</table>
</div>