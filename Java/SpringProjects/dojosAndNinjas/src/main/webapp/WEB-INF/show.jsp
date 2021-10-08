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
		<h1>Title: <c:out value="${expense.title}"/></h1>
		<p>Vendor: <c:out value="${expense.vendor}"/></p>
		<p>Description: <c:out value="${expense.description}"/></p>
		<p>Amount: <c:out value="${expense.amount}"/></p>
		<a href="http://localhost:8080/expenses/edit/${expense.id}">Edit</a>
		<a href="http://localhost:8080/expenses/delete/${expense.id}">Delete</a>
	</div><br />
	<a href="http://localhost:8080/expenses">Home</a>
</body>
</head>s