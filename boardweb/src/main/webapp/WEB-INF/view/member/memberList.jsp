<%@page import="co.yedam.common.PageDTO"%>
<%@page import="co.yedam.member.Member"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<style>
a{
color : black;
text-decoration : none;
}
.center {
	text-align: center;
	width : 60%;
	margin: auto;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	transition: background-color .3s;
	/*border: 1px solid #ddd;
	margin: 0 4px;*/
}
.pagination a.active {
	background-color: #4CAF50;
	color: white;
	border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
}
</style>


  <div class="center">
  <c:if test = "${logauth ne 'admin' }">
  <c:redirect url = "/main.do" />
  </c:if>
	<form action="memberList.do" method="get">
	  <div class="row">
	    <div class="col-sm-4">
	      <select name = "searchCondition" class="form-control">
	        <option value="I">id</option>
	        <option value="N">name</option>
	        <option value="IN">id & name</option>
	      </select>
	    </div>
	    <div class="col-sm-6">
	      <input type = "text" name="keyword"  class="form-control">
	    </div>
	    <div class="col-sm-2">
	      <input type="submit" value="조회" class="btn btn-primary">
	    </div>
	  </div>
	</form>
  </div>
  <h3>가입자 목록</h3>
  <table class="table">
	<thead>
		<tr>
			<th>id</th>
			<th>password</th>
			<th>이름</th>
			<th>image</th>
		</tr>
	</thead>
	<tobdy> 
	<c:forEach var="member" items="${list}">
	<tr>
		<td><c:out value="${member.id }"/></td>
		<td>${member.pw}</td>
		<td>${member.name}</td>
		<td>${member.image }</td>
	</tr>
	</c:forEach>
	</tobdy>

  </table>
  <div class="center">
  <div class="pagination">
	<c:if test="${page.prev }">
	<a href="memberList.do?page=${page.startPage-1 }&searchCondition=${searchCondition }&keyword=${keyword }"> &laquo; </a>
	</c:if>
	<c:forEach begin="${page.startPage }" end="${page.endPage }" var="p">
	   <c:choose>
	     <c:when test="${p eq page.page }">
     	   <a href="memberList.do?page=${p }&searchCondition=${searchCondition }&keyword=${keyword }" class="active">${p }</a>
	     </c:when>
	   <c:otherwise>
	       <a href="memberList.do?page=${p }&searchCondition=${searchCondition }&keyword=${keyword }">${p }</a>
	   </c:otherwise>
	   </c:choose>
	</c:forEach>
	<c:if test="${page.next }">
	<a href="memberList.do?page=${page.endPage +1 }&searchCondition=${searchCondition }&keyword=${keyword }"> &raquo; </a>
	</c:if>
  </div>
  </div>

