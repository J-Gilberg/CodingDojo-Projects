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
		<h1>New Dojo</h1>
			<form:form action="/dojos/save" method="post" modelAttribute="dojo">
				<form:errors path="name"/>
			    <p>
			        <form:label path="name">Dojo Name</form:label>			        
			        <form:input path="name"/>
			    </p>
    		<input type="submit" value="Create"/>
		</form:form> 
	</div>
	<a href="http://localhost:8080/dojos">Home</a>
</body>
</head>