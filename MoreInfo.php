<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($con,"moonshin");
    
    //Encoding data get the react native user input values to the json format
    $EncodeData=file_get_contents('php://input');
    //convert json format data to the normal data
    $DecodeData=json_decode($EncodeData,true);


    // create variables to store the user enterd data from the react native page
    
    $userEmail=$DecodeData['findEmail'];
    $userAge=$DecodeData['studentAge'];
    $userContactNumber=$DecodeData['studentContactNumber'];
    $userPassword = $DecodeData['studentPassword'];

     // update students Age
     $InsertData1="UPDATE kids SET Age='$userAge' WHERE Email='$userEmail'";
     $result1=mysqli_query($con,$InsertData1);
     
     // Update students Contact Number 
     $InsertData2="UPDATE kids SET ContactNumber='$userContactNumber' WHERE Email='$userEmail'";
     $result2=mysqli_query($con,$InsertData2);
     
     // update student's Password
     $InsertData3="UPDATE kids SET password='$userPassword' WHERE Email='$userEmail'";
     $result3=mysqli_query($con,$InsertData3);
    
    if($result1)
    {
        $Message="Student's Age Added";
    }
    else if($result2){
        $Message="Student's Contact Number Added";
    }
    else if($result3){
        $Message="Password Changed";
    }
    else{
        $Message="Please try again";
    }

    echo json_encode($Message);
?>