<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>First JSP</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/app.js"></script>
</head>
<body>
	<h1>All The Fruit!</h1>
	<form action="/sendData" method="post">
		<label for="number">Pick any number from 5 to 25</label><br />
		<input type="number" name="number"/><br />
		<label for="city">Enter the name of any city.</label><br />
		<input type="text"name="city"/><br />
		<label for="person">Enter the name of any real person.</label><br />
		<input type="text" name="person"/><br />
		<label for="hobby">Enter professional endeavor or hobby.</label><br />
		<input type="text" name="hobby"/><br />
		<label for="thing">Enter any type of living thing.</label><br />
		<input type="text" name="thing"/><br />
		<label for="quote">Say something nice to someone.</label><br />
		<textarea name="quote" cols="30" rows="10"></textarea><br />
		<p>Send and Show a friend</p><br />
		<input type="submit" value="Send"/>
	</form>
</body>
</head>