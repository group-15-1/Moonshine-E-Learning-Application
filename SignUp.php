<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($con,"moonshin");
    
    //Encoding data get the react native user input values to the json format
    $EncodeData=file_get_contents('php://input');
    //convert json format data to the normal data
    $DecodeData=json_decode($EncodeData,true);

    // create variables to store the user enterd data from the react native app
    $userName = $DecodeData['Name'];
    $userEmail=$DecodeData['Email'];
    $userPassword=$DecodeData['Password'];
    

    $InsertData="INSERT INTO kids(Name,Email,password)
    VALUES('$userName','$userEmail','$userPassword')";

    $InsertEmailToGrades = "INSERT INTO grade(Email) 
    VALUES('$userEmail')";

   
    $result=mysqli_query($con,$InsertData);
    $gradeEmail = mysqli_query($con,$InsertEmailToGrades);
    

    $search = "SELECT * FROM `kids` WHERE `kids`.`Email`= '$userEmail'";
    $searchEmailResult = mysqli_query($con,$search);

    if($result && $gradeEmail)
    {
        $Message="Student has been registered sucsessfuly";
    }
    else if($searchEmailResult){
        $Message = "Email already Exists";
    }
    else{
        $Message="Please try again";
    }

    echo json_encode($Message);
?>