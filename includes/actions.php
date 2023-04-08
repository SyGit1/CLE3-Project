<?php
/**
 * @return array
 */
function getLocations()
{
    return [
        [
            "id" => 1,
            "name" => "Ijsselland Ziekenhuis",
            "location" => "Rotterdam",
        ],
        [
            "id" => 2,
            "name" => "Ikazia Ziekenhuis",
            "location" => "Rotterdam",
        ],
        [
            "id" => 3,
            "name" => "Maasstad Ziekenhuis",
            "location" => "Rotterdam",
        ],
        [
            "id" => 4,
            "name" => "Ijsselland Ziekenhuis",
            "location" => "Capelle aan den Ijssel",
        ],
    ];
}

function getLocationDetails($id)
{
    $tags = [
        1 => [
            "distance" => "1.0km",
            "location" => ['Willemsplein 495, 3016 DR Rotterdam'],
            "phone" => ' 0108930000',
            "website" => 'www.franciscus.nl',
        ],
        2 => [
            "distance" => "4.2km",
            "location" => ['Montessoriweg 1, 3083 AN Rotterdam'],
            "phone" => ' 010 297 5000',
            "website" => 'www.ikazia.nl',
        ],
        3 => [
            "distance" => "6.1km",
            "location" => ['Maasstadweg 21, 3079 DZ Rotterdam'],
            "phone" => '0102911911',
            "website" => 'https://www.maasstadziekenhuis.nl/',
        ],
        4 => [
            "distance" => "6.8km",
            "location" => ['Prins Constantijnweg 2, 2906 ZC Capelle aan den IJssel'],
            "phone" => '0102585000',
            "website" => 'http://www.ysl.nl/',
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
