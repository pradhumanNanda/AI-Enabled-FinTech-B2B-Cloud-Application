package com.highradius.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.highradius.model.AcctDocHeader;

//jdjd
@WebServlet("/DataLoadservlet")
public class InvoiceData extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LogManager.getLogger(UserDataServlet.class);
       
    
    public InvoiceData()
    {
        super();
    }
    @Override
    	public void service(HttpServletRequest request,HttpServletResponse response ) throws IOException{
    		String customer=null,fiscalYear=null;
    		Date dueDate1=null;
    		Double sum=(double) 0.0;
    		Double amount=null;
    		Connection dbCon = null;
    		PreparedStatement pstmt = null;
    		String url = "jdbc:mysql://10.1.136.151:3306/1605241"; 
    		String userName = "1605241_user";
    		String password = "vi41prlZxu";
    		String start=request.getParameter("start");   
    		customer=request.getParameter("customerName");   
    		fiscalYear=request.getParameter("fiscalYear");   
    		String limit=request.getParameter("limit"); 
    		String due=request.getParameter("dueDate");
    		String type=request.getParameter("type");
    		System.out.println("type "+type);
    		String dueDate="";
    			int i=0;
    		if(due!=null&&!due.isEmpty()) {
    		while(due.charAt(i)!='T'&&i<due.length())
    		{
    			dueDate+=due.charAt(i);
    			i++;
    		}}
    		else
    			due=null;
    
    		
    	try {
			 dueDate1=Date.valueOf(dueDate);
    		}
    		catch(Exception e)
    		{
    			dueDate1=null;
    		}

    		try {
			 amount=Double.parseDouble(request.getParameter("amount"));
    		}
    		catch(Exception e)
    		{
    			amount=null;
    		}
    		
    	System.out.println("amount "+amount);
    	System.out.println("due date "+dueDate1);
    
    	
   
    		System.out.println("customer"+customer+""+"fiscal year "+fiscalYear);
    
            
    			
    				try {
    					ResultSet rs1=null;
						Class.forName("com.mysql.jdbc.Driver");
				 i=1;
    			dbCon = DriverManager.getConnection(url,userName,password);
    			pstmt = dbCon.prepareStatement("select sum(actual_open_amount) from acct_doc_header where isOpen=1");
    		 rs1 = pstmt.executeQuery();
				
				while(rs1.next())
					{sum=rs1.getDouble(1);
					}
					
    				pstmt = dbCon.prepareStatement(generateQueryForCount(request,customer,fiscalYear,amount,dueDate1));
    				if(customer!=null&&(!customer.equals(""))&&!customer.isEmpty())    				{
    					pstmt.setString(i,customer);
    					i++;
    					
    				}
    				 if(fiscalYear!=null&&!fiscalYear.equals(""))
    				{
    					pstmt.setString(i,fiscalYear);
    					i++;
    				}
    				 if(amount!=null	)
    				{
    					pstmt.setDouble(i,amount);
    					i++;
    				}
    				if(dueDate1!=null)
    				{
    					pstmt.setDate(i,dueDate1);
    				}
    					System.out.println("query"+pstmt.toString());
    				 rs1 = pstmt.executeQuery();
    				int total = 0;
    				while(rs1.next())
    					{total=rs1.getInt(1);
    					}
    				pstmt = dbCon.prepareStatement( generateQueryForData(request,start,limit,customer,fiscalYear,amount,dueDate1));
    				i=1;
    				if(customer!=null&&(!customer.equals(""))&&!customer.isEmpty())   
    				{
    					pstmt.setString(i,customer);
    					i++;
    				}
    			if(fiscalYear!=null&&!fiscalYear.equals(""))
    				{
    					pstmt.setString(i,fiscalYear);
    					i++;
    				}
    				 if(amount!=null)
    				{
    					pstmt.setDouble(i,amount);
    					i++;
    				}
    				if(dueDate1!=null)
    				{
    					pstmt.setDate(i,dueDate1);
    					i++;
    				}
    			
    				System.out.println("query"+pstmt.toString());
    				
    				 rs1 = pstmt.executeQuery();
    				 
    				
    				
    				String pass=null;
    				int hey;
    				ArrayList<AcctDocHeader > invoices=new ArrayList<AcctDocHeader >();
    				while (rs1.next()) {
    					AcctDocHeader obj=new AcctDocHeader();
    					obj.setId(rs1.getInt(1));
    					obj.setAccountId(rs1.getInt(2));
    					obj.setDocumentNumberNorm(rs1.getString(3));
    					obj.setCompanyCode(rs1.getString(4));
    					obj.setFiscalYear(rs1.getString(5));
    					obj.setBranch(rs1.getString(6));
    					obj.setCustomerNumberNorm(rs1.getString(7));
    					obj.setCustomerMapId(rs1.getInt(8));
    					obj.setDocumentDateNorm(rs1.getDate(9));
    					obj.setBaselineDateNorm(rs1.getDate(10));  
    					obj.setDueDateNorm(rs1.getDate(11));
    					obj.setInvoiceNumberNorm(rs1.getString(12));
    					obj.setOpenAmountNorm(rs1.getDouble(13));
    					obj.setPaymentTerms(rs1.getString(14));
    					obj.setClearingDateNorm(rs1.getDate(15));
    					obj.setIsOpen(rs1.getInt(16));
    					obj.setOrderType(rs1.getString(17));
    					obj.setOrderDate(rs1.getDate(18));
    					obj.setBusinessArea(rs1.getString(19));
    					obj.setShipDate(rs1.getDate(20));
    					obj.setJobId(rs1.getInt(21));
    					obj.setTaxAmt(rs1.getDouble(22));
    					obj.setCurrentDisputeAmount(rs1.getDouble(23));
    					obj.setShipTo(rs1.getString(24)); 
    					obj.setDocumentId(rs1.getInt(25));
    					obj.setDocumentDate(rs1.getDate(26));
    					obj.setActualOpenAmount(rs1.getDouble(27));
    					obj.setDueDate(rs1.getDate(28));
    					obj.setInvoiceAge(rs1.getInt(29));
    					obj.setIsvalidDispute(rs1.getInt(30));
    					obj.setRetainageAmount(rs1.getDouble(31));
    					obj.setPostingKey(rs1.getString(32));
    					obj.setStrategyId(rs1.getInt(33));
    					obj.setCurrency(rs1.getString(34));
    					obj.setDebitCreditIndicator(rs1.getString(35));
    					obj.setValidOpenAmount(rs1.getDouble(36));
    					obj.setCustomerName(rs1.getString(37));
    					
    					
    					
    				invoices.add(obj);
    				
    					
    				}
    				Map<String,Object> data=new HashMap<>();
    				  data.put("rows",invoices);
    				  data.put("results",total);
    				  data.put("sum",sum);
    		
    				  String jsonString=getJSONStringFromObject(data);
    			      PrintWriter pw=response.getWriter();
    				  response.setContentType("application/json");
    				  pw.write(jsonString);
    			  }
    				catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
    				  catch(Exception e)
    				  {
    					  e.printStackTrace();
    				  }
    				  
    			  
    				
    				
    				
    				
    				
    		
    				
    	}
    	
private static String generateQueryForData(HttpServletRequest request,String start,String limit,String customer,String fiscalYear,Double amount,Date dueDate)
{
	String baseQuery="select * from acct_doc_header where 1=1";
	StringBuilder builder=new StringBuilder(baseQuery);
	if(customer!=null&&(!customer.equals("")))
	{
		builder.append(" and customer_name = ?");}
	if(fiscalYear!=null&&!fiscalYear.equals(""))
	{
		builder.append(" and fiscal_year = ?");}
	 if(amount!=null)
	{
		builder.append(" and open_amount_norm = ?");}
	if(dueDate!=null)
	{
		builder.append(" and due_date = ?");}
	
	
	if(request.getParameter("type")!=null) {
		if(request.getParameter("type").equals("1")) {
			builder.append(" and isOpen = 1");}
			else
				builder.append(" and isOpen = 0");
		}
	builder.append(" LIMIT "+start+","+limit);
	return builder.toString();
	}
private static String generateQueryForCount(HttpServletRequest request,String customer,String fiscalYear,Double amount,Date dueDate)
{
	String baseQuery="select count(*) from acct_doc_header where 1=1";
	StringBuilder builder=new StringBuilder(baseQuery);
	if(customer!=null&&(!customer.equals("")))
	{
		builder.append(" and customer_name = ?");}
	 if(fiscalYear!=null&&!fiscalYear.equals(""))
	{
		builder.append(" and fiscal_year = ?");}
	 if(amount!=null)
	{
		builder.append(" and open_amount_norm = ?");}
	if(dueDate!=null)
	{
		builder.append(" and due_date = ?");}
	
	
	if(request.getParameter("type")!=null) {
		if(request.getParameter("type").equals("1")) {
			builder.append(" and isOpen = 1");}
			else
				builder.append(" and isOpen = 0");
		}
	
	
	return builder.toString();
	}


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    	private String getJSONStringFromObject(Object object) {
    		
    		ObjectMapper mapper = new ObjectMapper();                             
    		String jsonString = null;
    		DateFormat format=new SimpleDateFormat();
    		mapper.setDateFormat(format);
    		try {
    			jsonString =  mapper.writeValueAsString(object);
    		} catch (Exception e) {
    			LOG.error("Error while parasing object to json" , e);
    		}
    		return jsonString;
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