<?php
  $con = mysqli_connect("localhost","root","");
  $database = mysqli_select_db($con, "moonshine");

  $encodedData = file_get_contents('php://input');

  $decodeData = json_decode($encodedData, true);

  $findEmail = $decodeData["findEmail"];
  
  // Find students by Email
  $search1 = "SELECT Email FROM kids WHERE Email= '$findEmail'";
  $searchEmailResult1 = mysqli_query($con,$search1);
  $rows1 = mysqli_num_rows($searchEmailResult1);

  // Find teachers by Email
  $search2 = "SELECT Email FROM teacher WHERE Email= '$findEmail'";
  $searchEmailResult2 = mysqli_query($con,$search2);
  $rows2 = mysqli_num_rows($searchEmailResult2);

  if($rows1 != 0 || $rows2 != 0){
    $Message = "ok";
  }
  else if($searchEmailResult1 != $findEmail || $searchEmailResult2 != $findEmail){
    $Message = "No matching Email";
  }
  else{
    $Message = "Try Again";
  }
  echo json_encode($Message);
?>