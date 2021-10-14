<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
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
	<div>
		<h1>New Book</h1>
			<form:form action="/books/new" method="post" modelAttribute="book">
			    <p>
			        <form:label path="title">Title</form:label>
			        <form:errors path="title"/>
			        <form:input path="title"/>
			    </p>
			    <p>
			        <form:label path="description">Description</form:label>
			        <form:errors path="description"/>
			        <form:textarea path="description"/>
			    </p>
			    <p>
			        <form:label path="language">Language</form:label>
			        <form:errors path="language"/>
			        <form:input path="language"/>
			    </p>
			    <p>
			        <form:label path="numberOfPages">Pages</form:label>
			        <form:errors path="numberOfPages"/>     
			        <form:input type="number" path="numberOfPages"/>
			    </p>    
    		<input type="submit" value="Submit"/>
		</form:form> 
	</div>
	
</body>
</head>