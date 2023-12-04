<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($con,"moonshine");
    
    //Encoding data get the react native user input values to the json format
    $EncodeData=file_get_contents('php://input');
    //convert json format data to the normal data
    $DecodeData=json_decode($EncodeData,true);

    // create variables to store the user enterd data from the react native app
    $userEmail=$DecodeData['Email'];
    $Answer1 = $DecodeData['Quiz1'];
    $Answer2 = $DecodeData['Quiz2'];
    $Answer3 = $DecodeData['Quiz3'];
    $Answer4 = $DecodeData['Quiz4'];

     // Add students answers
     $InsertData1="UPDATE finalquiz SET Answer1='$Answer1' WHERE Email='$userEmail'";
     $result1=mysqli_query($con,$InsertData1);
     
     $InsertData2="UPDATE finalquiz SET Answer2='$Answer2' WHERE Email='$userEmail'";
     $result2=mysqli_query($con,$InsertData2);

     $InsertData3="UPDATE finalquiz SET Answer3='$Answer3' WHERE Email='$userEmail'";
     $result3=mysqli_query($con,$InsertData3);

     $InsertData4="UPDATE finalquiz SET Answer4='$Answer4' WHERE Email='$userEmail'";
     $result4=mysqli_query($con,$InsertData4);


    if($result1 && $result2 && $result3 && $result4)
    {
        $Message="Completed sucsessfuly";
    }
    else{
        $Message="Please try again";
    }

    echo json_encode($Message);
?>