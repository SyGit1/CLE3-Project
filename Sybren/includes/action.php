<?php
/**
 * @return array
 */
function getLocations()
{
    return [
        [
            "id" => 1,
            "name" => "Tandartspraktijk de Bruijn",
            "location" => "Rotterdam",
        ],
        [
            "id" => 2,
            "name" => "Tandartsenpraktijk Willemsplein",
            "location" => "Rotterdam",
        ],
        [
            "id" => 3,
            "name" => "Apollo Tandheelkunde",
            "location" => "Rotterdam",
        ],
    ];
}

function getLocationDetails($id)
{
    $tags = [
        1 => [
            "distance" => "5km",
            "location" => ['Westersingel 96', ' 3015 LC Rotterdam'],
            "phone" => '010-4360654',
            "website" => 'www.tandartspraktijkdebruijn.nl',
            "description" => "Telefonisch zijn wij bereikbaar van ma t/m do van 8 tot 15 uur en op vrijdag van 8 tot 12 uur"
        ],
        2 => [
            "distance" => "4km",
            "location" => ['Hoge Erasmus', '3016 DR Rotterdam'],
            "phone" => '010-4137911',
            "website" => 'www.tandartswillemsplein.nl',
            "description" => "Een goede tandarts is niet alleen goed met tanden, maar ook met mensen. Wij nemen graag de tijd om je goed uit te leggen wat we gaan doen en waarom. Dat doen we in een prettige en rustige omgeving."
        ],
        3 => [
            "distance" => "17km",
            "location" => ['Nieuwe Binnenweg 155', '3014 GK Rotterdam'],
            "phone" => '010-3416385',
            "website" => 'www.apollotandheelkunde.nl',
            "description" => "Onze nieuwe moderne tandartspraktijk is gelegen in het centrum van Rotterdam en uitgerust met de allerbeste apparatuur. Zo waarborgen onze tandartsen uitmuntende kwaliteit met bijzondere aandacht voor u."
        ],
    ];

    return $tags[$id];
}

$id = $_GET['id'] ?? 1;
$data = [
    'locations' => getLocations(),
    'details' => getLocationDetails($id)
];

header('Content-Type: application/json');
echo json_encode($data);
