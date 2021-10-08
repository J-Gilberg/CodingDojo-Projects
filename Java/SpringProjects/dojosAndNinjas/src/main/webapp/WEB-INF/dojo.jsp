<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %> 
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>New Dojo</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/app.js"></script>
</head>
<body>
	<div>
		<h1>Dojo ${dojo.name}</h1>
		<table>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Age</th>
			</tr>
			<c:forEach var="ninja" items="${ninjas}">
				<tr>
					<td><c:out value="${ninja.first_name}"/></td>
					<td><c:out value="${ninja.last_name}"/></td>
					<td><c:out value="${ninja.age}"/></td>
				</tr>
			</c:forEach>
		</table>
	</div>
	<a href="http://localhost:8080/dojos">Home</a>
</body>
</head>