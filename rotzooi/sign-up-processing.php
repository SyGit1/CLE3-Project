<!-- This file stores the form data from the sign-up form in the database as well as giving errors-->
<?php
// Require database & fetch $db variable
require 'includes/database.php';
/** @var $db */

// mysqli_real_escape_string makes the sending of information to the database more secure
$firstName = mysqli_real_escape_string ($db, $_POST['firstName']);
$lastName = mysqli_real_escape_string ($db, $_POST['lastName']);

$email = mysqli_real_escape_string ($db, $_POST['email']);
$password = mysqli_real_escape_string ($db, $_POST['password']);

// Server-side validation
$errors = [];
if($name == '') {
    $errors['name'] = 'Please fill in your name.';
}
if($email == '') {
    $errors['email'] = 'Please fill in your email.';
}
if($password == '') {
    $errors['password'] = 'Please fill in your password.';
}

// If data valid
if(empty($errors)) {
    // Create a secure password, with the PHP function password_hash()
    $password = password_hash($password, PASSWORD_DEFAULT);

    // Store the new user in the database.
    $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

    $result = mysqli_query($db, $query);

    if ($result) {
        header('Location: login.php');
        exit;
    }
}
?>