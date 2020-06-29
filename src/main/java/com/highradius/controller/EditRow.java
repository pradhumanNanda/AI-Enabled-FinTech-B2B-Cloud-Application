package com.highradius.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class EditRow extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	
    public EditRow()
    {
        super();
        // TODO Auto-generated constructor stub
    }  @Override
    	public void service(HttpServletRequest request,HttpServletResponse response ) throws IOException{
    	int jobid=Integer.parseInt(request.getParameter("jobid"));
    	String shipto=request.getParameter("shipto");
    	int id=Integer.parseInt(request.getParameter("id"));
    		System.out.println(jobid+" value \n"+shipto+" id : "+id);
    		Connection dbCon = null;
    		PreparedStatement pstmt = null;
    		String url = "jdbc:mysql://10.1.136.151:3306/1605241"; 
    		String userName = "1605241_user";
    		String password = "vi41prlZxu";
    		String Query = "update acct_doc_header set job_id = ?,ship_to=? where id= ?;";
    		
            
    			
    				
						try {
							Class.forName("com.mysql.jdbc.Driver");
							dbCon = DriverManager.getConnection(url,userName,password);
		    				pstmt = dbCon.prepareStatement(Query);
		    				pstmt.setInt(1, jobid);
		    				pstmt.setString(2, shipto);
		    				pstmt.setInt(3, id);
		    		        pstmt.execute();
						} catch (ClassNotFoundException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (SQLException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
			//njmlkm		
 	
    	}

	    @Override
    	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

		@Override
		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			doGet(request, response);
	}

}