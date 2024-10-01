var xmlHttp;

///////////////----------OnKeyPress Event code to restrinct Kayboard input starts----------//////////

var KEY_NULL = null;
var KEY_NONE = 0;
var KEY_BCKSPC = 8;
var KEY_TAB = 9;
var KEY_ENTER = 13;
var KEY_ESC = 27;

function validData(e,field) {
	var key;
	var keychar;
	if (window.event) {
		key = window.event.keyCode;
	}
	else if (e) {
		key = e.which;
	}
	else {
		return true;
	}
	keychar = String.fromCharCode(key);
 //characters which are allowed 

	switch(field)
	{
		case "name":
			chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'. "
			break;	
		case "city":
			chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
			break;	
		case "num":
			chars = "0123456789";
			break;
		case "dob":
			chars = "0123456789/";
			break;	
		case "nameSpl":
			chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'. "
			break;	

		case "phone":
			chars = "1234567890 -+"
			break;	
	}
	// Control keys (no @#$% "magic numbers")

	if ((key == KEY_NULL) || (key == KEY_NONE) || (key == KEY_BCKSPC) || (key == KEY_TAB) || (key == KEY_ENTER) || (key == KEY_ESC) || ((chars).indexOf(keychar) > -1) ) 
     {
		return true;
	}
	/*else if (e1 == 'dec') 
    { // Decimal point allowed
		if (keychar == '.') 
        {
			if (this.value.indexOf('.') == -1)
            { // Can only have a single decimal point
				return true;
			}
		}
	} */
	return false;
}
//////////////----------OnKeyPress Event code to restrinct Kayboard input ends----------//////////
function emailvalid(sText)
{
	var IsNumber=true;
	var pattern1=/[._]$/;
	var pattern2=/\._|_\./;
    if(sText.indexOf("__")!==-1)
    {
		IsNumber = "false";  
	}else if(sText.indexOf("..")!==-1)
	{
		IsNumber = "false";  
    }else if(sText.match(pattern1)!==null)
    {
	    IsNumber = "false";  
    }else if(sText.match(pattern2)!==null)
    {
    	IsNumber = "false";  
    }else if(sText.indexOf("--")!==-1)
    {
	    IsNumber = "false";  
    }
    return IsNumber;
}
//==========TRIM=================
function trim(str)
{
   return str.replace(/^\s+|\s+$/g,'');
}
function CheckTrim(str)
{  
	while(str.charAt(0) == (" ") )
	{  str = str.substring(1);
	}
	while(str.charAt(str.length-1) == " " )
	{  str = str.substring(0,str.length-1);
	}
	return str;
}
//==========TRIM=================
function CheckZero(sText)
{
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
	{ 
		Char = sText.charAt(i); 
		if(i==0)
		{
			if(Char==0)
			{
			    IsNumber = "false";
			}
		}
	}
	return IsNumber;   
}//number validation
function CheckStartNo(sText)
{
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
	{ 
		Char = sText.charAt(i); 
		if(i==0)
		{
			if(Char==0 || Char==1 || Char==2 || Char==3 || Char==4 || Char==5 || Char==6 || Char==7 || Char==8 || Char==9)
			{
			    IsNumber = "false";
			}
		}
	}
	return IsNumber;   
}
function limitText(limitField, limitCount, limitNum) 
{
            	//alert(limitField.value);
			if (limitField.value.length > limitNum) 
            {
                limitField.value = limitField.value.substring(0, limitNum);
            }
            else 
            {
                limitCount.value = limitNum - limitField.value.length;
            }
}
function isValidEmail(email)
{ 
    var RegExp = /^((([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/ 
    if(RegExp.test(email))
	{ 
        return true; 
    }
	else
	{ 
        return false; 
    } 
}
function checkField(){ 
    var offer = document.offer, error = ""; 
    if(!isValidEmail(offer.email.value)){ 
        error += 'Please Enter a valid E-mail ID\n'; 
    } 
    if(error != ""){ 
      alert(error); 
        return false; 
    }else{ 
        return true; 
    } 
} 
function IsNumeric(sText)
{
	var ValidChars = "0123456789#&@*_-+/|!$%:.;`^<>[]{}=?)(,~\\\"";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
			IsNumber = "false";
		}
	}
	return IsNumber;   
}//character validation
function IsNumericAddress(sText)
{
	var ValidChars = "%^?";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
			IsNumber = "false";
			//alert ("Please Enter characters only.");						
		}
	}
	return IsNumber;   
}
function IsNumericdesg(sText)
{
	var ValidChars = "0123456789#&@*_-+/|!$%:;`^<>[]{}=?~'\\\"";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
		IsNumber = "false";
		}
	}
	return IsNumber;   
}//character validation
function IsSpecial(sText)
{
	var ValidChars = "#&@*_\\/|!$%:;`-+.,^<>[]{}=?)(~'\\\"";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
		IsNumber = "false";
		//alert ("Please Enter characters only.");
		}
	}
	return IsNumber;
}//character validation
function IsSpecialenq(sText)
{ 
	var ValidChars = "#@*_\\/|!$%:;`-+^<>[]{}=~'\\\"";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
			IsNumber = "false";
		//alert ("Please Enter characters only.");						
		}
	}
return IsNumber;   
}
function IsSpecialextra(sText)
{
	var ValidChars = "#&@*_\\/|!$%:;`-+^<>[]{}=?~'\\\"";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
		IsNumber = "false";
		//alert ("Please Enter characters only.");						
		}
	}
	return IsNumber;   
}//enquiry validation
function IsSpecialeCompany(sText)
{
	var ValidChars = "1234567890#&@*_\\/|!$%:;`-+^<>[]{}=?~'\\\"";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) 
		{ 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) != -1) 
		{
		IsNumber = "false";
		//alert ("Please Enter characters only.");						
		}
	}
	return IsNumber;   
}//character validation
function IsChar(sText)
{
	var ValidChars = "0123456789";
	var IsNumber=true;
	var Char;
	var tnt= [];
	for (i = 0; i < sText.length && IsNumber == true; i++) 
	{ 
		Char = sText.charAt(i); 
		tnt[i]=sText.charAt(i);
		if (ValidChars.indexOf(Char) == -1) 
		{
			IsNumber = "false";
			//alert ("please Enter numeric only.");						
		}
		/*if(i==0){
			if(Char=='0' || Char=='1' || Char=='2' || Char=='3' || Char=='4' || Char=='5')
			{
				IsNumber = "falsen";
			}
		}*/
	}
	return IsNumber;   
}//number validation
function Isalpha(sText)
{
	var ValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'. ";
	var IsNumber=true;
	var Char;
	var tnt= [];
	for (i = 0; i < sText.length && IsNumber == true; i++) 
	{ 
		Char = sText.charAt(i); 
		tnt[i]=sText.charAt(i);
		if (ValidChars.indexOf(Char) == -1) 
		{
			IsNumber = "false";				
		}
	}
	return IsNumber;   
}
function counter(sText,charTest)
{
	var aposcnt;
	var cnt=0;
	var ch1;
	aposcnt="true";
	ch1=sText.charAt(0);
	if(ch1==charTest)
	{
		aposcnt="false";
	}
	for(i=0;i<sText.length;i++)
	{
		ch1=sText.charAt(i);
		if(ch1==charTest)
		{
			cnt ++;
		}
	}
	if(cnt>2)
	{
		aposcnt="false";
	}
	return aposcnt;
}//apostrophe and hypen validation for text and contact field
function reset1()
{
	window.location.reload(true);
}
function alt_null()
{
	document.getElementById("alt_error").innerHTML="";	
	document.getElementById("alt_error").style.display="none";
}
function validate_enquiry()
{
	if (document.EnquireForm.name.value=="Your Name*" || document.EnquireForm.name.value=="")
	{
		alt_null();	
		document.getElementById("alt_error").style.display="block";
        document.getElementById("alt_error").innerHTML="Please Enter Your Name";
		document.EnquireForm.name.focus();
		return false;
	}
	else if(document.EnquireForm.name.value!="")
	{
		var mytext=trim(document.EnquireForm.name.value);
		pop=document.EnquireForm.name.value;
		//validation for space
		var ValidChars = " ";
		Char = pop.charAt(0);
		if (ValidChars.indexOf(Char) != -1) 
			{

				alt_null();
				document.getElementById("alt_error").style.display="block";
				document.getElementById("alt_error").innerHTML="Please Enter Valid Your Name";					
				document.EnquireForm.name.focus();
				document.EnquireForm.name.select();
				return false;
			}//validchars.indexof
		var alphacheck=Isalpha(mytext);
		if (alphacheck=="false")
		{
    		alt_null();
			document.getElementById("alt_error").style.display="block";
			document.getElementById("alt_error").innerHTML="Please Enter Valid Your Name";					
			document.EnquireForm.name.focus();
			document.EnquireForm.name.select();
			return false;
		}	
		//validation for space
		var char1=counter(mytext,"'");
		if (char1=="false")
		{
			alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Enter Valid Your Name";
		    document.EnquireForm.name.focus();
			document.EnquireForm.name.select();
	        return false;
		}
         var char1=counter(mytext,".");
		if (char1=="false")
		{
			alt_null();			
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Enter valid Your Name";
		    document.EnquireForm.name.focus();
			document.EnquireForm.name.select();
	        return false;
		}
		var mytext=trim(document.EnquireForm.name.value);
		if(mytext=="")
    	{
    		alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Please Enter Your Your Name";
    		document.EnquireForm.name.focus();
    		return false;
    	}
        var strcnt2=mytext.length;
        if(strcnt2<2 || strcnt2>50)
    	{
            alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Your Name Accept 2-50 Characters Only";
			document.EnquireForm.name.focus();
			document.EnquireForm.name.select();
	        return false;
       }
	} //Your Name validation

	//------EMAIL-------------
	if(document.EnquireForm.email.value=="Your Email*" || document.EnquireForm.email.value=="")
	{
		alt_null();
		document.getElementById("alt_error").style.display="block";
        document.getElementById("alt_error").innerHTML="Please Enter Your Email Id";
		document.EnquireForm.email.select();
		document.EnquireForm.email.focus();
		return false;
	}
	if(document.EnquireForm.email.value!="")
	{
		var str =/\w+[-a-zA-Z0-9_\.]+@\w+[-a-zA-Z0-9]+\.\w+[-a-zA-Z\.]+/;
		var eflag = document.EnquireForm.email.value.match(str);
		//alert (eflag);
		if(eflag!=document.EnquireForm.email.value)
		{
			alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Please Enter a Valid Email Id";
			document.EnquireForm.email.select();
			document.EnquireForm.email.focus();
			return false;
		}
        var string1=document.EnquireForm.email.value;
        if(string1!="")
        {
            var number=emailvalid(string1);
            if (number=="false")
            {
                alt_null();
				document.getElementById("alt_error").style.display="block";
                document.getElementById("alt_error").innerHTML="Please Enter a valid Email Id";
	            document.EnquireForm.email.select();
	            document.EnquireForm.email.focus();
	            return false;
            }
        }
        var mytext = trim(document.EnquireForm.email.value);
        if(mytext=="")
        {
            alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Please Enter Email Id";
	        document.EnquireForm.email.focus();
			document.EnquireForm.email.select();
	        return false;
        } 
	}//email validation
	//---Mobile No---
	if (document.EnquireForm.contact.value=="Phone Number*" || document.EnquireForm.contact.value=="")
	{
		alt_null();
		document.getElementById("alt_error").style.display="block";
		document.getElementById("alt_error").innerHTML="Please Enter Phone Number";
		document.EnquireForm.contact.focus();
		return false;
	}
	if (document.EnquireForm.contact.value!="")
	{
		var mytext=trim(document.EnquireForm.contact.value);
		var number=IsChar(mytext);
		if (number=="false")
		{
	    	alt_null();
			document.getElementById("alt_error").style.display="block";
	        document.getElementById("alt_error").innerHTML="Mobile No. Accept Digits Only";
			document.EnquireForm.contact.focus();
			document.EnquireForm.contact.select();
			document.EnquireForm.contact.value="";
			return false;
		}
		if (mytext=="")
		{
			alt_null();
			document.getElementById("alt_error").style.display="block";
			document.getElementById("alt_error").innerHTML="Please Enter Phone Number";
			document.EnquireForm.contact.focus();
			return false;
	    }
		var strcnt2=mytext.length;
		if(strcnt2!=10)
		{
			alt_null();
			document.getElementById("alt_error").style.display="block";
			document.getElementById("alt_error").innerHTML="Enter 10 Digit Mobile No.";
			document.EnquireForm.contact.focus();
			document.EnquireForm.contact.select();
			return false;
		}
		var sting="^([0-9])\\1*$";
		var eflag = document.EnquireForm.contact.value.match(sting);
	}

	if (document.EnquireForm.location.value=="Your Location*" || document.EnquireForm.location.value=="")
	{
		alt_null();	
		document.getElementById("alt_error").style.display="block";
        document.getElementById("alt_error").innerHTML="Please Enter Your Location";
		document.EnquireForm.location.focus();
		return false;
	}
	else if(document.EnquireForm.location.value!="")
	{
		var mytext=trim(document.EnquireForm.location.value);
		pop=document.EnquireForm.location.value;
		//validation for space
		var ValidChars = " ";
		Char = pop.charAt(0);
		if (ValidChars.indexOf(Char) != -1) 
			{

				alt_null();
				document.getElementById("alt_error").style.display="block";
				document.getElementById("alt_error").innerHTML="Please Enter Valid Your Location";					
				document.EnquireForm.location.focus();
				document.EnquireForm.location.select();
				return false;
			}//validchars.indexof
		var alphacheck=Isalpha(mytext);
		if (alphacheck=="false")
		{
    		alt_null();
			document.getElementById("alt_error").style.display="block";
			document.getElementById("alt_error").innerHTML="Please Enter Valid Your Location";					
			document.EnquireForm.location.focus();
			document.EnquireForm.location.select();
			return false;
		}	
		//validation for space
		var char1=counter(mytext,"'");
		if (char1=="false")
		{
			alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Enter Valid Your Location";
		    document.EnquireForm.location.focus();
			document.EnquireForm.location.select();
	        return false;
		}
         var char1=counter(mytext,".");
		if (char1=="false")
		{
			alt_null();			
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Enter valid Your Location";
		    document.EnquireForm.location.focus();
			document.EnquireForm.location.select();
	        return false;
		}
		var mytext=trim(document.EnquireForm.location.value);
		if(mytext=="")
    	{
    		alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Please Enter Your Your Location";
    		document.EnquireForm.location.focus();
    		return false;
    	}
        var strcnt2=mytext.length;
        if(strcnt2<2 || strcnt2>50)
    	{
            alt_null();
			document.getElementById("alt_error").style.display="block";
            document.getElementById("alt_error").innerHTML="Your Location Accept 2-50 Characters Only";
			document.EnquireForm.location.focus();
			document.EnquireForm.location.select();
	        return false;
       }
	} //Your Location validation
	
	EnquireForm.submitenquiry.disabled = true;
    EnquireForm.submitenquiry.value = "Please wait...";
	document.EnquireForm.action = "submit_enquiry.php";
	document.EnquireForm.submit();
}