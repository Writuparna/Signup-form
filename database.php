<?php 

	$connect = mysqli_connect('localhost','root','','signup_form');

	if(!$connect)
		echo 'connection failure';
	else
		echo 'connection success';

?>