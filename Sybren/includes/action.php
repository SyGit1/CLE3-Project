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
            "name" => "haha MC",
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
            "phone" => '0104360654',
            "website" => 'www.tandartspraktijkdebruijn.nl',
            "description" => "Voor al uw tandheelkunde!"
        ],
        2 => [
            "distance" => "5.87km",
            "location" => ['Molenwaterplein 40', '3015 GD Rotterdam'],
            "phone" => '0107040704',
            "website" => 'www.erasmusmc.nl',
            "description" => "wooooooo"
        ],
    ];

    return $tags[$id];
}

$id = $_GET['id'] ?? 1; // get the id from the query string or default to 1
$data = [
    'locations' => getLocations(),
    'details' => getLocationDetails($id)
];

header('Content-Type: application/json');
echo json_encode($data);
