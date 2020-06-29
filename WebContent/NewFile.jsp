<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
     String n1=request.getParameter("number1");
     String n2=request.getParameter("number2"); 
     
     int no1=Integer.parseInt(n1);
     int no2=Integer.parseInt(n2);
      int sum=no1+no2;
%>
<%=sum %>
</body>
</html>