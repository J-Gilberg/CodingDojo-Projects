<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Book</title>
</head>
<body>
    
   <form:form action="/books/save" method="post" modelAttribute="newBook">
   	<form:errors path="title" class="text-danger" />
       <form:errors path="author" class="text-danger" />
       <form:errors path="thoughts" class="text-danger" />
       <div class="form-group">
           <label>Title:</label>
           <form:input path="title" class="form-control" />
       </div>
       <div class="form-group">
           <label>Author:</label>
           <form:input path="author" class="form-control" />
       </div>
       <div class="form-group">
           <label>Thoughts:</label>
           <form:textarea path="thoughts" class="form-control" />
       </div><br />
       	<form:hidden path="user" value="${user_id}" class="form-control" />
       <input type="submit" value="Add Book" class="btn btn-primary" />
   </form:form><br />
   <a href="/books">Back to your shelf!</a>
</body>
</html>