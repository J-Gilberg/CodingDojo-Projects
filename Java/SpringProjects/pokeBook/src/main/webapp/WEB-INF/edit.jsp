<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
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
		<h1>Edit Expense</h1>
			<form:form action="/expenses/update/${expense.id}" method="post" modelAttribute="expense">
				<form:errors path="title"/>
				<form:errors path="vendor"/>
				<form:errors path="amount"/>
				<form:errors path="description"/>
				<form:input path="id" type="hidden" value="${expense.id}"/>
				<input type="hidden" name="_method" value="put">
			    <p>
			        <form:label path="title">Expense</form:label>			        
			        <form:input path="title" value="${expense.title}"/>
			    </p>
			    <p>
			        <form:label path="vendor">Vendor</form:label>			        /
			        <form:input path="vendor" value="${expense.vendor}"/>
			    </p>
			    <p>
			        <form:label path="amount">Amount</form:label>			            
			        <form:input type="number" step="0.001" path="amount" value="${expense.amount}"/>
			    </p>   
			   	<p>
			        <form:label path="description">Description</form:label>
			        <form:textarea path="description" value="${expense.description}"/>
			    </p> 
    		<input type="submit" value="Submit"/>
		</form:form> 
	</div><br />
	<a href="http://localhost:8080/expenses">Home</a>
</body>
</head>s