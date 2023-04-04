<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Darkmode</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <button id="mybtn" onclick="darkmode()">Dark</button>
    <p>Hoi</p>

    <script src="js/darkMode.js"></script>

    <header>
        <a href="index.php">
            <img src="./img/logo.png">
        </a>
        <a href="review.php">Sign Up</a>
    </header>

    <main>
        <div id="about">
            <h2>Onze missie</h2>
            Zorg voor motorisch beperkten toegankelijker maken.
            <p>
                Door middel van deze applicatie wordt zorg in de buurt geinventariseerd en beoordeeld.
                Zo weet u waar u aan toe bent per zorginstelling en kunt u hier van tevoren rekening mee houden,
                zodat u achteraf ook uw eigen mening achter kunt laten over uw bezoek.
            </p>
        </div>

        <section id="categories">
            <div class="card">
                <a href="hospital.php">
                    <img src="./img/card1.jpg" alt="avatar">
                </a>
            </div>
            <div class="card">
                <a href="firstaid.php">
                    <img src="./img/card2.jpg" alt="avatar">
                </a>
            </div>
            <div class="card">
                <a href="dentist.php">
                    <img src="./img/card3.jpg" alt="avatar">
                </a>
            </div>
            <div class="card">
                <a href="physio.php">
                    <img src="./img/card4.jpg" alt="avatar">
                </a>
            </div>
            <div class="card">
                <a href="pharmacy.php">
                    <img src="./img/card5.jpg" alt="avatar">
                </a>
            </div>
        </section>
    </main>
</body>

</html>