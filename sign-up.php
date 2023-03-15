<?php

include_once 'includes/database.php';

?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aanmelden</title>
</head>
<body>
<form action="sign-up-processing.php">
    <div>
    <label for="firstName">Voornaam</label>
    <input type="text" id="firstName" name="firstName" placeholder="naam">
    </div>

    <label for="lastName">Achternaam</label>
    <input type="text" id="lastName" name="lastName" placeholder="achternaam">

    <label for="username">Gebruikersnaam</label>
    <input type="text" id="username" name="username" placeholder="gebruikersnaam">

    <label for="email">E-mail</label>
    <input type="text" id="email" name="email" placeholder="example@mail.com">

    <label for="password">Wachtwoord</label>
    <input type="password" id="password" name="password" placeholder="wachtwoord">

    <label for="disability">Uw beperking</label>
    <input type="text" id="disability" name="disability" placeholder="beperking">

<button type="submit">Verzenden</button>
</form>
</body>
</html>


