<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %> 
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
		<h1>Dojos</h1>
		<table>
		<c:forEach var="dojo" items="${dojos}">
			<tr>
				<td><a href="/dojos/${dojo.id}"> <c:out value="${dojo.name}"/></a></td>
			</tr>
		</c:forEach>
		</table>
	</div>
	<br />
	<a href="http://localhost:8080/dojos/ninjas/new">Add Ninja</a> | 
	<a href="http://localhost:8080/dojos/new">Add Dojo</a>
</body>
</head>