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
		<h1>New Ninja</h1>
			<form:form action="/dojos/ninjas/save" method="post" modelAttribute="ninja">
				<form:errors path="first_name"/>
				<form:errors path="last_name"/>
				<form:errors path="age"/>
				
			    <p>
			        <form:label path="first_name">First Name</form:label>			        
			        <form:input path="first_name"/>
			    </p>
			    <p>
			        <form:label path="last_name">Last Name</form:label>			        
			        <form:input path="last_name"/>
			    </p>
			    <p>
			        <form:label path="age">Age</form:label>			            
			        <form:input type="number" path="age"/>
			    </p>   
			    <p>
			        <form:label path="dojo">Dojo</form:label>			            
			        <form:select path="dojo">  
			        	<c:forEach var="dojo" items="${dojos}">
			        		<form:option value="${dojo.id}">
			        			<c:out value="${dojo.name}"/>
			        		</form:option>
			        	</c:forEach>
			        </form:select>
			    </p>  
    		<input type="submit" value="Submit"/>
		</form:form> 
	</div>
	<a href="http://localhost:8080/dojos">Home</a>
	
</body>
</head>