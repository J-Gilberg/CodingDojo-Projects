<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>First JSP</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/time.js"></script>
</head>
<body>
    <h1><c:out value="${time}"/></h1>
</body>
</head>