<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>First JSP</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/app.js"></script>
</head>
<body>
	<table>
	<tr>
		<th>Id</th>
		<th>Title</th>
		<th>Language</th>
		<th>Page Count</th>
	</tr>
	<c:forEach var="book" items="${books}">
		<tr>
			<td><c:out value="${book.id}"/></td>
			<td> <a href="/books/${book.id}"> <c:out value="${book.title}"/></a></td>
			<td><c:out value="${book.language}"/></td>
			<td><c:out value="${book.numberOfPages}"/></td>
		</tr>
	</c:forEach>
	</table>
</body>
</head>