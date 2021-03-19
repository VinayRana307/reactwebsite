function validateform(){
		const firstname = document.getElementById("fname").value;
		const lastname = document.getElementById("lname").value;
		const useremail = document.getElementById("email").value;
		const newpassword = document.getElementById("pass").value;
		const confirmpassword = document.getElementById("cpass").value;
		
		
			if(firstname == "")
				{
					document.getElementById("first").innerHTML = "** Enter Your First Name";
					return false;
				}	
			else
				{
					if (!isNaN(firstname)){  
					  document.getElementById("first").innerHTML="Enter character only";  
					  return false;  
					}else{  
					  document.getElementById("first").innerHTML = "";  
					  }  
				}
				
		
			if(lastname == "")
				{
					document.getElementById("last").innerHTML = "** Enter Your Last Name";
					return false;
				}
			else
				{
					if (!isNaN(lastname)){  
					  document.getElementById("last").innerHTML="Enter character only";  
					  return false;  
					}else{  
					  document.getElementById("last").innerHTML = "";  
					  }
				}		
			if(useremail == "")
				{
					document.getElementById("email1").innerHTML = "** Enter Your Email";
					return false;
				}		
			else
				{
					const x=document.regform.email.value;  
						const atposition=x.indexOf("@");  
						const dotposition=x.lastIndexOf(".");  
						if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
						  document.getElementById("email1").innerHTML = "Enter Valid Email";  
						  return false;  
						  }
						else{  
					  document.getElementById("email1").innerHTML = "";	
					  }   
				}
		
			if(newpassword == "")
				{
					document.getElementById("password1").innerHTML = "** Enter Your Password";
					return false;
				}	
			else
				{
					if(!newpassword.length <= 2 && newpassword.length >= 20)
					{
						document.getElementById("password1").innerHTML = "Password character 2 to 20";
						return false;
					}
					else
					{
						document.getElementById("password1").innerHTML = "";
					}
				}
			if(confirmpassword == "")
				{
					document.getElementById("password2").innerHTML = "** Enter Confirm Password";
					return false;
				}	
			else
				{
					 if(newpassword !== confirmpassword)
					{
						document.getElementById("password2").innerHTML = "Password Not Match";
						return false;
					}
					else
					{
						document.getElementById("password2").innerHTML = "";
						
					}
				}
			
				if (!validateform == "")
					{
						document.getElementById("form1").submit();
						//formid[0].submit();

					}
				else
				{
					alert("false");
				}
		}	