<?php
//Load file contents in PHP var
$playlist = file_get_contents("playlist.json");
//print_r($playlist);
//exit;

//Decode JSON to PHP object
$playlistJson = json_decode($playlist);

//echo "<pre>";
//print_r($playlistJson);
//echo "</pre>";

//Echo properties directly
echo $playlistJson->collection_from . "<br/>";
echo $playlistJson->artists[0]->albums[0]->title . "<br/>";

//Loop through list of albums from all artist & print title
foreach ($playlistJson->artists as $artist) {
    foreach ($artist->albums as $album) {
        echo $album->title . "<br>";
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="js/maps.js" defer></script>
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-core.js"></script>
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-service.js"></script>
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"></script>
    <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"></script>
    <script type="text/javascript" src="../js/darkMode.js" defer></script>
    <script type="text/javascript" src='demo.js'></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css"/>
    <link rel="stylesheet" type="text/css" href="css/maps.css">
    <link rel="stylesheet" type="text/css" href="css/hospital.css">
</head>
<body id="geocode">
<header>
    <a href="../index.php">
        <img src="../img/hospital.png">
    </a>
    <div>
        <button id="mybtn" onclick="darkmode()">
            <i class="fa-solid fa-moon"></i>
        </button>
    </div>
</header>
<main>
    <div id="back">
        <a href="../index.php" class="fa fa-arrow-left"></a>
    </div>
    <div id="map"></div>
    <div id="panel"></div>
</main>
</body>
</html>