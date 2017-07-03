<?php include_once 'database.php'; ?>

<?php

$name = $POST['username'];
$phone = $POST['userphno'];
$email = $POST['useremail'];
$password = $POST['userpass'];
$confirmpassword = $POST['userconfirmpass'];

echo $name;


mysqli_query($connect, "INSERT INTO user_table(name, phone, email, password, confirmpass) VALUES ('".$name."','".$phone."','".$email."','".$password."','".$confirmpassword."')");

	//echo mysqli_affected_rows($connect);
if(mysqli_affected_rows($connect) > 0){
	echo "<span style='display: block; padding: 10px 15px; color: #2E6A00; border: 2px solid #2E6A00;'>Appointment Added</span>";
}else{
	echo "<span style='display: block; padding: 10px 15px; color: #D32F00; border: 2px solid #D32F00;'>Appointment NOT Added</span>";
	echo mysqli_error($connect);
}



?>