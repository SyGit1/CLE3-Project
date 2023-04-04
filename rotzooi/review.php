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
<form action="review-processing.php">
    <label for="rating">Beoordeling</label>
    <input type="number" id="rating" name="rating">

    <label for="review">Review</label>
    <input type="text" id="review" name="review" placeholder="Laat hier een review achter">

<button type="submit">Verzenden</button>
</form>
</body>
</html>


