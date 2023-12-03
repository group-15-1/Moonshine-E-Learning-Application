<?php
  $con = mysqli_connect("localhost","root","");
  $database = mysqli_select_db($con, "moonshin");

  $encodedData = file_get_contents('php://input');

  $decodeData = json_decode($encodedData, true);


  $findEmail = $decodeData["findEmail"];
  
  $search = "SELECT * FROM kids WHERE Email= '$findEmail'";
  $searchMoreDetails = "SELECT * FROM kids WHERE Email= '$findEmail'";

  $tableData1 = mysqli_query($con, $search);
  $tableData2 = mysqli_query($con,$searchMoreDetails);

  // check the tabledata variable contain any data rows
  if(mysqli_num_rows($tableData1 )>0 ){

    // the data row come from the database will store in to data variable
        $data = mysqli_fetch_assoc($tableData1);
        $studentEmail = $data["Email"];
        $studentName = $data["Name"];
        $studentPassword = $data["password"];
        $studentAge = $data["Age"];
        $studentContactNumber = $data["ContactNumber"];
  }
  
  else{
    $studentEmail = "";
    $studentName = "";
    $studentPassword = ""; 
    $studentAge = "";
    $studentContactNumber = "";
  }

  if(mysqli_num_rows($tableData2 )>0 ){

    // the data row come from the database will store in to data variable
        $data = mysqli_fetch_assoc($tableData2);
        
        $studentAge = $data["Age"];
        $studentContactNumber = $data["ContactNumber"];

  }
  else{
   
    $studentAge = "";
    $studentContactNumber = "";

  }

  $response[] = array("Email" => $studentEmail, "Name"=> $studentName, "password" => $studentPassword, "Age"=>$studentAge, "ContactNumber"=>$studentContactNumber);

  // convert the Response array in to the json format
  echo json_encode($response);

?>
