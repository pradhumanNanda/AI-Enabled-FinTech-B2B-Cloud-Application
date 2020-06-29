
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript">
        function validation()
        {   
        	var f=/^[A-Za-z]+$/;
			var Q=/^[Q q Z z]$/;
			var Y=/^[Y y]$/;
			var M=/^[+]$/;
        	if(form.firstname.value.trim()=="")
        	{
        		alert("firstname cant be left blank");
        		form.firstname.style.border = "solid 2px red";
        		document.getElementById("flabel").style.visibility="visible";
        		return false;
        	}	
        	  	
        	else if(form.firstname.value.trim().length > 5)
        	{
        		alert("cant be longer than 5 characters");
        		form.firstname.style.border = "solid 2px red";
        		document.getElementById("flabel").style.visibility="visible";
        		return false;
        	}
        	else if(!form.firstname.value.match(f))
        	{
        		alert("firstname must have alphabet characters only");
        		form.firstname.style.border = "solid 2px red";
        		document.getElementById("flabel").style.visibility="visible";
        		return false;	
        	}	
         else if(form.firstname.value.match(Q)) 
        	{
        		alert("firstname must not start with z and q");
        		form.firstname.style.border = "solid 2px red";
        		document.getElementById("flabel").style.visibility="visible";
        		return false;
        	}
        	
        	if(form.lastname.value.match(Y))
        	{
        	    alert("Error:firstcharacter cant be Y or y");
        	    form.lastname.style.border = "solid 2px red";
        	    form.lastname.focus();
                return false;
            }
        	
        	if(form.gender.value==""||form.gender.value==null)
        	{
        		alert("gender not selected");
        		return false;
        	}	
  
        	
        	if(form.opt.value=="")
        	{
        		alert("select branch");
        		return false;
        	}	
        	
        	if(form.number.value.match(M)||form.number.value.trim().length>8)
        	{
        		alert("Invalid Number ");
        		form.number.style.border = "solid 2px red";
        		document.getElementById("nlabel1").style.visibility="visible";
        		return false;
        	}
        	
        	if(form.password.value=="")
        	{
        		alert("Invalid password");
        		form.password.style.border = "solid 2px red";
        		return false;
        	}
           if(form.address.value.trim().length >80)
        	{
			    alert("Invalid Address");
        		document.getelementById("addlabel").style.visibility="visible";
        		return false;
        	}	
        				
        	
        	if(form.email.value.includes("@kiit.ac.in",2)==false && form.email.value.includes("@highradius",2)==false )
        	{
        		alert("Invalid Email");
        		form.email.style.border = "solid 2px red";
        		return false;
        	}   	
        }
</script>
     <style>
	    .wrap
		{
		   text-align:center;
		}
		.size
        {
		   margin-left:80px;
		   margin-top:5px;
		}
		.s
		{
		   padding-left:5px;
		}
		.h1
		{
		  text-align:center;
		  background-color:orange;
		  margin-left:700px;
		  margin-right:700px;	   
		}
		
	</style>
</head>
<body bgcolor=black>
    <form action="getName" method="get" name="form" onsubmit=" return validation();">
	<table height=500 width=500 bgcolor="#ccffcc" align=center style="padding:20px;">
	<tr > <td colspan=4><h1 style="background-color:orange;color:black;width:100px;margin-left:180px;"> <center>Week2 <center></h1></td></tr>
  <tr><td >First Name</td>
    <td><input type="text" name="firstname"  placeholder="first name" autofocus> </td>
	<td>
	 Last Name </td>
	<td><input type="text" name="lastname" placeholder="last name">
	</td></tr>
	<tr><td ><br>
	Gender </td>
<td colspan=2>	<br>
	<input type="radio" name="gender" value="Male"> Male
	<input type="radio" name="gender" value="Female"> Female
	</td></tr>
	<tr><td colspan=4>
	<p>Branch &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
	<Select name="opt">
	       <option>--select--</option>
	       <option>CSE</option>
		   <option>IT</option>
		   <option>CSSE</option>
		   <option>CSSCE</option>
	</select>
	</td></tr>
	<tr><td >
	<p style="width:80px;">
Mobile No. <p></td>
<td colspan=2>
	<input type="text" " name="number"  placeholder="enter your Mobile No."> 
	<label id="nlabel1" style="color: red; visibility: hidden;">country code not allowed</label>
   	<label id="nlabel2" style="color: red; visibility: hidden;">length exceeding 8</label>
	</td></tr>
	
<tr ><td colspan=1>Email ID   </td>
<td colspan=2>
	<input type="text" name="email"  placeholder="enter your emailID">
	
	</td>
</tr>
<tr><td colspan=1>

	Password  </td><td colspan=2><br>
	<input type="password" name="password" value="" placeholder="enter your password">
	<label id="addlabel" style="color: red; visibility: hidden;">length exceeding 80</label>
	</td></tr>
	<tr>
	<td>
	
	<legend>Address</legend></td>
	<td colspan=2>
	<textarea  name="address" rows="5" cols="30">
	
	</textarea> </td>
	</tr>
	<tr><td colspan=4>
   <center> <input type="submit" style="background-color:blue; color:white;" value="submit"> </center></td></tr>
</table>   	
   </form>
</div>
<%
     String fname = request.getParameter("firstname");
     String lname = request.getParameter("lastname");
     String gen = request.getParameter("gender");
     String branch = request.getParameter("branch");
     String number = request.getParameter("number");
     String email = request.getParameter("email");
     String pass = request.getParameter("password");
     String add = request.getParameter("address");
%>
</body>
</html>