
<?php
$conn = mysqli_connect('localhost', 'root', '');
$database = mysqli_select_db($conn, 'moonshine');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

$UserEmail = $decodedData['email'];
$UserPW = ($decodedData['password']);

// Check Student Email and Password
$SQL = "SELECT * FROM kids WHERE Email = '$UserEmail' AND password = '$UserPW'";
$result = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($result);


if ($checkEmail != 0 AND $UserPW !=0) {
       if($result-> num_rows==0){
        $Message = "Wrong details";
       }
       else{
        $Message = "ok";
       }
    }
 
else {
$Message = "No account yet";
}

echo json_encode($Message);

?>