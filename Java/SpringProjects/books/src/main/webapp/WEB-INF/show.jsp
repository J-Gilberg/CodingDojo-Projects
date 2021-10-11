<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>First JSP</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/app.js"></script>
</head>
<body>
	<div>
		<h1>Title: <c:out value="${book.title}"/></h1>
		<p>Author: <c:out value="${book.author}"/></p>
		<h2>
			<c:if test = "${book.user.getId().equals(user_id)}"> 
				You read ${book.title} by ${book.author}
			</c:if>
			<c:if test = "!${book.user.getId().equals(user_id)}"> 
				${book.user.getUserName()} read ${book.title} by ${book.author}
			</c:if>
		</h2><br />
		<h2>Here are ${book.user.getUserName()}'s thoughts:</h2><br />
		<p><c:out value="${book.thoughts}"/></p>
		<c:if test="${book.user.getId() == id}">
			<a href="/books/edit/${book.id}">Edit</a>
		</c:if>
	</div><br />
	<a href="/books">Back to your shelf!</a>
</body>
</head>s