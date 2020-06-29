package com.highradius.controller;
import java.io.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Form extends HttpServlet
{  
	@Override
	public  void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException 
	{
		 String fname = req.getParameter("firstname");
	     String lname = req.getParameter("lastname");
	     String gen = req.getParameter("gender");
	     String branch = req.getParameter("branch");
	     String number = req.getParameter("number");
	     String email = req.getParameter("email");
	     String pass = req.getParameter("password");
	     String add = req.getParameter("address");
	     String pass2= pass.charAt(pass.length()-1)+ pass.substring(0, pass.length()-1);
	     
	Connection dbCon = null;
	PreparedStatement pstmt = null;
	Statement stmt = null; 
	ResultSet rs = null;
	String url = "jdbc:mysql://localhost:3306/1605241?useSSL=false";
	String username = "root";
	String password =  "RootUser@123";
	String query = "Insert into form values (null,?,?,?,?,?,?,?,?)";
	
		
	
    try
    {
    	Class.forName("com.mysql.jdbc.Driver");
        dbCon = DriverManager.getConnection(url, username, password);
        pstmt = dbCon.prepareStatement(query);
        
        pstmt.setString(1,fname);
        pstmt.setString(2,lname);
        pstmt.setString(3,gen);
        pstmt.setString(4,branch);
        pstmt.setString(5,number);
        pstmt.setString(6,email);
        pstmt.setString(7,pass2);
        pstmt.setString(8,add);
        pstmt.executeUpdate();
        System.out.print(rs);
    }
  
    catch(Exception e)
    {
    	e.printStackTrace();
    	System.out.println(e.getMessage());
    }
    finally
    {
    	if(rs!=null)
        	try
        	{
        		rs.close();
        	}
        	catch (Exception e)
        	{
        		e.printStackTrace();
        	}
    	
    	if(stmt!=null)
        	try
        	{
        		stmt.close();
        	}
        	catch (Exception e)
        	{
        		e.printStackTrace();
        	}  
    	if(pstmt!=null)
        	try
        	{
        		pstmt.close();
        	}
        	catch (Exception e)
        	{
        		e.printStackTrace();
        	}
    	if(dbCon!=null)
        	try
        	{
        		dbCon.close();
        	}
        	catch (Exception e)
        	{
        		e.printStackTrace();
        	}
    	   
      }
	}
}
