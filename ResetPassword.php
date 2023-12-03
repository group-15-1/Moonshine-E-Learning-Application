<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($con,"moonshin");
    
    //Encoding data get the react native user input values to the json format
    $EncodeData=file_get_contents('php://input');
    //convert json format data to the normal data
    $DecodeData=json_decode($EncodeData,true);


    // create variables to store the user enterd data from the react native app
    $userEmail=$DecodeData['findEmail'];
    $userPassword = $DecodeData['password'];

     // Reset students Password
     $search="UPDATE kids SET password='$userPassword' WHERE Email='$userEmail'";
     $result1=mysqli_query($con,$search);

     // Reset Teachers Password
     $search="UPDATE teacher SET Password='$userPassword' WHERE Email='$userEmail'";
     $result1=mysqli_query($con,$search);
     
     // If the password is updated
    if($result1)
    {
        $Message="Student's Password Updated";
    }
    else{
        $Message="Please try again";
    }

    echo json_encode($Message);
?>