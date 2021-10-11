<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Book Club</title>
</head>
<body>
    <h1>Welcome! ${userName}</h1>
    <p>Books from everyone's shelves</p>
    <a href="/logout">logout</a>
    <a href="/books/new">Add to my shelf!</a>
    <div>
    	<table>
    		<tr>
    			<td>ID</td>
    			<td>Title</td>
    			<td>Author Name</td>
    			<td>Posted By</td>
    		</tr>
   			<c:forEach var="book" items="${books}">
   			<tr>
    			<td><c:out value="${book.id}"/></td>
    			<td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
    			<td><c:out value="${book.author}"/></td>
    			<td><c:out value="${book.user.getUserName()}"/></td>
    		</tr>
   			</c:forEach>
    	</table>
    </div>
</body>
</html>