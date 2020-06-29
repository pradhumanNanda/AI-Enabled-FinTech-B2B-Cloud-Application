package com.highradius.controller;
import java.io.*;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import com.highradius.model.AcctDocHeader;

public class MyDataLoading extends AcctDocHeader
{

	public static void main(String[] args)
	{
		Connection dbCon = null;
		PreparedStatement pstmt = null;
		Statement stmt = null; 
		ResultSet rs = null; 
    	String url = "jdbc:mysql://localhost:3306/1605241?useSSL=false";
		String username = "root";
		String password =  "RootUser@123";
		String query = "Insert into acct_doc_header values (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		ArrayList<AcctDocHeader> arlist = new ArrayList<AcctDocHeader>();
		
		Reader rdr= null;
        BufferedReader bfrdr =null;
        
        try
        {
        	rdr = new FileReader("D:\\myworksapce\\HelloWorld\\src\\FileIO\\Sample Dataset.csv");
        	bfrdr = new BufferedReader(rdr);
        	
        	String line=null;
        	line=bfrdr.readLine();
        	int count=0;
    		System.out.println(line);	

        	while((line= bfrdr.readLine())!=null && count<50000)
        	{  
        		count++;
            	System.out.println(line);	
        		String arr[]= line.split(",");
    		    AcctDocHeader obj= new AcctDocHeader();
        	
    		  for(int i=0;i<arr.length;i++)
        	  {	
        		  if(arr[i]==null || arr[i].equals("\\N") || arr[i].isEmpty()) 
        	        continue;
        		  
        		if(i==0)
        		obj.setAccountId(Integer.parseInt(arr[0]));
        		
        		if(i==1)
        		{

        			obj.setDocumentNumberNorm(arr[1]);
        		}
        		if(i==2)
        	    obj.setCompanyCode(arr[2]);
        		if(i==3)
          	    obj.setFiscalYear(arr[3]);
        		if(i==4)
        		{
              	    obj.setBranch(arr[4]);
        		}
        		
        		if(i==5)
        		{
        			   obj.setCustomerNumberNorm(arr[5]);     		
        		}
        		
        		if(i==6)
          	    obj.setCustomerMapId(Integer.parseInt(arr[6]));
        		if(i==7)
        			obj.setDocumentDateNorm(Date.valueOf(arr[7]));
        	
        		if(i==8)
        		obj.setBaselineDateNorm(Date.valueOf(arr[8]));
        		if(i==9)
        		obj.setDueDateNorm(Date.valueOf(arr[9]));  
          	    if(i==10)
      		    {
          	    	 obj.setInvoiceNumberNorm(arr[10]);
      		    }
      		   
          	   if(i==11)
          	    obj.setOpenAmountNorm(Double.parseDouble(arr[11]));
          	   if(i==12)
          	   obj.setPaymentTerms(arr[12]);
          	   if(i==13)
          	   obj.setClearingDateNorm(Date.valueOf(arr[13]));
          	   if(i==14) 
          	   obj.setIsOpen(Integer.parseInt(arr[14]));
           	    if(i==15)
   		        {
           	         obj.setOrderType(arr[15]);
   		        }
   		       
   		          	    
              if(i==16)
       	     {
          	    	obj.setOrderDate(Date.valueOf(arr[16]));
       	     }
       	        
          	   if(i==17)
          	    obj.setBusinessArea("");       	  
        	  if(i==18)
       	        {
        	    	obj.setShipDate(Date.valueOf(arr[18]));
       	        }
       	        
        	    if(i==19)
        	    obj.setJobId(Integer.parseInt(arr[19]));
        	    if(i==20)
       	        {
        	    	obj.setTaxAmt(Double.parseDouble(arr[20]));
       	        }
       	        
        	    if(i==21)
        	    obj.setCurrentDisputeAmount(Double.parseDouble(arr[21]));
        	    if(i==22)
       	        {
        	    	obj.setShipTo(arr[22]);
       	        }
       	        
        	    if(i==23)
        	    obj.setDocumentId(Integer.parseInt(arr[23]));
        	    if(i==24)
               obj.setDocumentDate(Date.valueOf(arr[24]));
        	    if(i==25)
        	    obj.setActualOpenAmount(Double.parseDouble(arr[25]));
        	   if(i==26)
               obj.setDueDate(Date.valueOf(arr[26]));
        	    if(i==27)
      	        {
        	    	obj.setInvoiceAge(Integer.parseInt(arr[27]));
      	        }
      	       
        	    if(i==28)
     	        {
        	    	 obj.setIsvalidDispute(Integer.parseInt(arr[28]));
     	        }
     	        
        	    if(i==29)
        	    obj.setRetainageAmount(0.00);
        	    if(i==30)
        	    obj.setPostingKey(arr[30]);
        	    if(i==31)
     	        {
        	    	obj.setStrategyId(Integer.parseInt(arr[31]));
     	        }
     	        
        	    if(i==32)
        	    obj.setCurrency(arr[32]);
        	    if(i==33)
        	    obj.setDebitCreditIndicator(arr[33]);
        	    if(i==34)
    	        {
        	    	obj.setValidOpenAmount(Double.parseDouble(arr[34]));
    	        }
    	        
        	    if(i==35)
        	    obj.setCustomerName(arr[35]);
        	              
        	    
        	  }
        	  arlist.add(obj);    	  
        	}
        	
        	Class.forName("com.mysql.jdbc.Driver");
            dbCon = DriverManager.getConnection(url, username, password);
            pstmt = dbCon.prepareStatement(query);
            
            int j=0;
            while(j<arlist.size())
            {
            	pstmt.setInt(1,arlist.get(j).getAccountId());
            	pstmt.setString(2,arlist.get(j).getDocumentNumberNorm());
            	pstmt.setString(3, arlist.get(j).getCompanyCode());
            	pstmt.setString(4,arlist.get(j).getFiscalYear());
            	pstmt.setString(5,arlist.get(j).getBranch());
            	pstmt.setString(6,arlist.get(j).getCustomerNumberNorm());
            	pstmt.setInt(7,arlist.get(j).getCustomerMapId());
            	pstmt.setDate(8,arlist.get(j).getDocumentDateNorm());
            	pstmt.setDate(9,arlist.get(j).getBaselineDateNorm());
            	pstmt.setDate(10,arlist.get(j).getDueDate());
            	pstmt.setString(11,arlist.get(j).getInvoiceNumberNorm());
            	pstmt.setDouble(12,arlist.get(j).getOpenAmountNorm());
            	pstmt.setString(13,arlist.get(j).getPaymentTerms());
            	pstmt.setDate(14,arlist.get(j).getClearingDateNorm());
            	pstmt.setInt(15,arlist.get(j).getIsOpen());
            	pstmt.setString(16,arlist.get(j).getOrderType());
            	pstmt.setDate(17,arlist.get(j).getOrderDate());
            	pstmt.setString(18,arlist.get(j).getBusinessArea());
            	pstmt.setDate(19,arlist.get(j).getShipDate());
            	pstmt.setInt(20,arlist.get(j).getJobId());
            	pstmt.setDouble(21,arlist.get(j).getTaxAmt());
            	pstmt.setDouble(22,arlist.get(j).getCurrentDisputeAmount());
            	pstmt.setString(23,arlist.get(j).getShipTo());
            	pstmt.setInt(24,arlist.get(j).getDocumentId());
            	pstmt.setDate(25,arlist.get(j).getDocumentDate());
            	pstmt.setDouble(26,arlist.get(j).getActualOpenAmount());
            	pstmt.setDate(27,arlist.get(j).getDueDate());
            	pstmt.setInt(28,arlist.get(j).getInvoiceAge());
            	pstmt.setInt(29,arlist.get(j).getIsvalidDispute());
            	pstmt.setDouble(30,arlist.get(j).getRetainageAmount());
            	pstmt.setString(31,arlist.get(j).getPostingKey());
            	pstmt.setInt(32,arlist.get(j).getStrategyId());
            	pstmt.setString(33,arlist.get(j).getCurrency());
            	pstmt.setString(34,arlist.get(j).getDebitCreditIndicator());
            	pstmt.setDouble(35,arlist.get(j).getValidOpenAmount());
            	pstmt.setString(36,arlist.get(j).getCustomerName());
            	
            	j++;
            	pstmt.executeUpdate();
            }     	
        }
        
        catch(Exception e)
        {
        	e.printStackTrace();
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
        	 
        	    try
            	{
            		if(bfrdr!=null)
                       bfrdr.close();
            	}
            	catch (Exception e)
                {
                	System.out.println("Could not close BufferedReader "+e);
                }
        	    try
            	{
            		if(rdr!=null)
                       bfrdr.close();
            	}
            	catch (Exception e)
                {
                	System.out.println("Could not close Reader "+e);
                }
        }
	}

}
