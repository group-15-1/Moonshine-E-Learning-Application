<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($con,"moonshine");
    
    //Encoding data get the react native user input values to the json format
    $EncodeData=file_get_contents('php://input');
    //convert json format data to the normal data
    $DecodeData=json_decode($EncodeData,true);

 
    // create variables to store the user enterd data from the react native app
    $userEmail=$DecodeData['findEmail'];
    $finalQuiz = $DecodeData['finalQuiz'];
    
    // update Quiz Marks
    $InsertData="UPDATE finalgrade SET Mark='$finalQuiz' WHERE Email='$userEmail'";
    $result=mysqli_query($con,$InsertData);
    
    // If the marks updated
    if($result){
        $Message="Quiz Marks Added";
    }
    
    else{
        $Message="Please try again";
    }

    echo json_encode($Message);
?>