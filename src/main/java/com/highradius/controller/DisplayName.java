package com.highradius.controller;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DisplayName extends HttpServlet
{
    @Override   
	public  void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException
	{
		
		String n1=req.getParameter("number1"); 
		String n2=req.getParameter("number2");
	
		int no1= Integer.parseInt(n1);
		int no2=Integer.parseInt(n2);
		
		System.out.println(no1+no2);
		 res.getWriter().print("<html>");
	     res.getWriter().print(no1+no2);
	     res.getWriter().print("<html>");
		
	}

}
