<?php ob_start();
session_start();
error_reporting (E_ALL ^ E_NOTICE);

if( $_POST['name']!='' && $_POST['email']!='' && $_POST['contact']!='' && $_POST['location']!=''){
    $name=addslashes($_POST['name']);
    $email=addslashes($_POST['email']);
    $contact=addslashes($_POST['contact']);
    $location=addslashes($_POST['location']);
		
	$_SESSION["name"] = $name;

	/****send mail**/
	$msg =  "<table border='0' align='center' width='600' cellpadding='0' cellspacing='0' style='color:#666666;font-family:verdana;font-family:verdana;font-size:12;'>";
	$msg .= "<tr><td height='20'></td></tr>";
	$msg .= "<tr><td width='35%' align='left' valign='top' style='padding-left:10px;'><font face=verdana size=2>Name</font></td><td width='65%' align='left'><font face=verdana size=2>:&nbsp;&nbsp;$name </font></td></tr><tr><td height='5'></td></tr>";
	$msg .= "<tr><td width='35%' align='left' valign='top' style='padding-left:10px;'><font face=verdana size=2>Contact</font></td><td width='65%' align='left'><font face=verdana size=2>:&nbsp;&nbsp;$contact</font></td></tr><tr><td height='5'></td></tr>";
	$msg .= "<tr><td width='35%' align='left' valign='top' style='padding-left:10px;'><font face=verdana size=2>Email Id</font></td><td width='65%' align='left'><font face=verdana size=2>:&nbsp;&nbsp;<a href='mailto:$email' title=$email>$email</a></font></td></tr><tr><td height='5'></td></tr>";
	$msg .= "<tr><td width='35%' align='left' valign='top' style='padding-left:10px;'><font face=verdana size=2>Location</font></td><td width='65%' align='left'><font face=verdana size=2>:&nbsp;&nbsp;$location</font></td></tr><tr><td height='5'></td></tr>";
	$msg .= "<tr><td height='5'></td></tr>";
	$msg .= "</table>";

	$mailheaders = "MIME-Version: 1.0" . "\r\n";
	$mailheaders .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	// More headers
	$mailheaders .= "From: $name<noreply@qnox.in>" . "\r\n";
	$mailheaders .= "" . "\r\n";
	//$mailheaders .= "Cc: " . "\r\n";
	$newto1 ="clinicsroyaldental@gmail.com, yash@qnox.in";
	
	$subject="New Lead from Chirag chamira website";
	
	mail($newto1,$subject, $msg, $mailheaders);

	$msg1 = "<table cellpadding='0' cellspacing='2' width='450' style='font-family:Verdana; font-size:16px; margin:0 auto; font-weight:500; color:#000; line-height:22px;' border='0'><tr><td colspan='2' height='20'></td></tr><tr><td colspan='2'>Hi $name,</td></tr><tr><td colspan='2' height='20'></td></tr><tr><td colspan='2'>Thank You for writing to us!<br/>Your inquiry has been recorded. We will get in touch with you shortly.</td></tr><tr><td colspan='2' height='20'></td></tr><tr><td colspan='2' style='font-weight:bold;'>Thanks & Regards,<br/>Team Chirag chamira</td></tr><tr><td colspan='2'</td></tr></table>";
	
	$mailheaders1 = "MIME-Version: 1.0" . "\r\n";
	$mailheaders1 .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $mailheaders1 .="From: Chirag chamira<noreply@qnox.in>" . "\r\n";
	
	$tsubject="Thank You for your enquiry with Chirag chamira";
    
    mail($email, $tsubject, $msg1, $mailheaders1);

	//header("location:https://royalimplant.com/");
	header("location:thankyou.php");
	
}else{
	echo "Something went wrong please try again";
}

?>