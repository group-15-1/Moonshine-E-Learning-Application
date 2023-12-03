<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($con,"moonshine");
    
    //Encoding data get the react native user input values to the json format
    $EncodeData=file_get_contents('php://input');
    //convert json format data to the normal data
    $DecodeData=json_decode($EncodeData,true);


    // create variables to store the user enterd data from the react native app
    $userName = $DecodeData['Name'];
    $userEmail=$DecodeData['Email'];
    $userPassword=$DecodeData['Password'];
    
    $InsertData="INSERT INTO teacher(Name,Email,password)
    VALUES('$userName','$userEmail','$userPassword')";

    $result=mysqli_query($con,$InsertData);

    if($result)
    {
        $Message="Teacher has been registered sucsessfuly";
    }
   
    else{
        $Message="Please try again";
    }

    echo json_encode($Message);
?>
