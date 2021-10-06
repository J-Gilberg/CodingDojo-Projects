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
	<table>
	<tr>
		<th>Id</th>
		<th>Expense</th>
		<th>Vendor</th>
		<th>Amount</th>
	</tr>
	<c:forEach var="expense" items="${expenses}">
		<tr>
			<td><c:out value="${expense.id}"/></td>
			<td> <a href="/expenses/${expense.id}"> <c:out value="${expense.title}"/></a></td>
			<td><c:out value="${expense.vendor}"/></td>
			<td><c:out value="${expense.amount}"/></td>
			<td>
				<a href="http://localhost:8080/expenses/edit/${expense.id}">Edit</a>
				|<a href="http://localhost:8080/expenses/delete/${expense.id}">Delete</a>
			</td>
		</tr>
	</c:forEach>
	</table>
	<div>
		<h1>Track Expense</h1>
			<form:form action="/expenses/new" method="post" modelAttribute="expense">
				<form:errors path="title"/>
				<form:errors path="vendor"/>
				<form:errors path="amount"/>
				<form:errors path="description"/>
			    <p>
			        <form:label path="title">Expense</form:label>			        
			        <form:input path="title"/>
			    </p>
			    <p>
			        <form:label path="vendor">Vendor</form:label>			        
			        <form:input path="vendor"/>
			    </p>
			    <p>
			        <form:label path="amount">Amount</form:label>			            
			        <form:input type="number" step="0.001" path="amount"/>
			    </p>   
			   	<p>
			        <form:label path="description">Description</form:label>
			        <form:textarea path="description"/>
			    </p> 
    		<input type="submit" value="Submit"/>
		</form:form> 
	</div>
	
</body>
</head>