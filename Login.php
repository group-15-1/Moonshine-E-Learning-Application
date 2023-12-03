
<?php
$conn = mysqli_connect('localhost', 'root', '');
$database = mysqli_select_db($conn, 'moonshine');

$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);

$UserEmail = $decodedData['email'];
$UserPW = ($decodedData['password']);

// Check Student Email and Password
$SQL = "SELECT * FROM kids WHERE Email = '$UserEmail' AND password = '$UserPW'";
$result = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($result);

// Check Teachers Email and Password
$SQLTeacher = "SELECT * FROM teacher WHERE Email = '$UserEmail' AND password = '$UserPW'";
$resultTeacher = mysqli_query($conn, $SQLTeacher);
$checkEmailTeacher =  mysqli_num_rows($resultTeacher);

if ($checkEmail != 0 AND $UserPW !=0) {
       if($result-> num_rows==0){
        $Message = "Wrong details";
       }
       else{
        $Message = "ok";
       }
    }
 
else if ($checkEmailTeacher != 0 AND $UserPW !=0) {
   if($resultTeacher-> num_rows==0){
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