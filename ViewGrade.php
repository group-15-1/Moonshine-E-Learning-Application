<?php
  $con = mysqli_connect("localhost","root","");
  $database = mysqli_select_db($con, "moonshine");

  $encodedData = file_get_contents('php://input');

  $decodeData = json_decode($encodedData, true);
 
                     // email come from the react native app
  $findEmail = $decodeData["findEmail"];

  $search = "SELECT * FROM kids WHERE Email= '$findEmail'";
  $tableData1 = mysqli_query($con, $search);

  $searchMoreDetails = "SELECT * FROM finalgrade WHERE Email= '$findEmail'";
  $tableData2 = mysqli_query($con,$searchMoreDetails);

  $seachQuizAnswers = "SELECT * FROM finalquiz WHERE Email='$findEmail'";
  $tableData3 = mysqli_query($con,$seachQuizAnswers);

  // check the tabledata variable contain any data rows
  if(mysqli_num_rows($tableData1 )>0 ){

    // the data row come from the database will store in to data variable
        $data = mysqli_fetch_assoc($tableData1);
        $studentEmail = $data["Email"];
        $studentName = $data["Name"];
  }
  
  else{
    $studentEmail = "";
    $studentName = "";
  }

  if(mysqli_num_rows($tableData2 )>0 ){

    // the data row come from the database will store in to data variable
    $data = mysqli_fetch_assoc($tableData2);
        
    $finalQuiz = $data["Mark"];
  }
  
  else{
    $finalQuiz="";
  }

  if(mysqli_num_rows($tableData3) > 0){
     // the data row come from the database will store in to data variable
    $data = mysqli_fetch_assoc($tableData3);
    $Answer1 = $data["Answer1"];
    $Answer2 = $data["Answer2"];
    $Answer3 = $data["Answer3"];
    $Answer4 = $data["Answer4"];
    
  }
  else{
    $Answer1 = "";
    $Answer2 = "";
    $Answer3 = "";
    $Answer4 = "";
  
  }

  $response[] = array("Email" => $studentEmail, "Name"=> $studentName, " finalQuiz"=> $finalQuiz,
                       "Answer1"=>$Answer1, "Answer2"=>$Answer2, "Answer3"=>$Answer3,
                      "Answer4"=>$Answer4);

  // convert the Response array in to the json format
  echo json_encode($response);

?>
