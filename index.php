<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./css/style.css">
    <title>Home</title>
</head>

<body>

<script src="./js/darkMode.js"></script>

<header>
    <a href="index.php">
        <img src="./img/logo.png">
    </a>
    <div>
        <a href="./Lotte/index.html"><i class="fa-solid fa-question"></i></a>
        <a href="Sybren/favourite-test.php">
            <i class="fa-solid fa-star"></i>
        </a>
        <button id="mybtn" onclick="darkmode()">
            <i class="fa-solid fa-moon"></i>
        </button>
    </div>
</header>

<main>
    <div id="about">
        <h2>Onze missie</h2>
        <p>
            Zorg voor motorisch beperkten toegankelijker maken.
        </p>
        <p>
            Door middel van deze applicatie wordt zorg in de buurt geinventariseerd en beoordeeld.
            Zo weet u waar u aan toe bent per zorginstelling en kunt u hier van tevoren rekening mee houden,
            zodat u achteraf ook uw eigen mening achter kunt laten over uw bezoek.
        </p>
    </div>

    <section id="categories">
        <a href="hospital.php">
            <div class="card">
                <img src="./img/card1.jpeg">
                <div class="container">
                <h2><b>Ziekenhuizen</b></h2>
                </div>
            </div>
        </a>
        <a href="firstaid.php">
            <div class="card">
                <img src="./img/card2.jpeg">
                <div class="container">
                    <h2><b>Huisartsen</b></h2>
                </div>
            </div>
        </a>
        <a href="dentist.php">
            <div class="card">
                <img src="./img/card3.jpeg">
                <div class="container">
                    <h2><b>Tandartsen</b></h2>
                </div>
            </div>
        </a>
        <a href="physio.php">
            <div class="card">
                <img src="./img/card4.jpeg">
                <div class="container">
                    <h2><b>Fysiotherapeuten</b></h2>
                </div>
            </div>
        </a>
        <a href="Sybren/pharmacy.php">
            <div class="card">
                <img src="./img/card5.jpeg">
                <div class="container">
                    <h2><b>Apotheken</b></h2>
                </div>
            </div>
        </a>
    </section>
</main>
</body>

</html>