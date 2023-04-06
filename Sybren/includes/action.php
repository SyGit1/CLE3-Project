<?php
/**
 * @return array
 */
function getLocations()
{
    return [
        [
            "id" => 1,
            "name" => "Erasmus MC",
            "location" => "Rotterdam",
        ],
        [
            "id" => 2,
            "name" => "haha MC",
            "location" => "Rotterdam",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getLocationDetails($id)
{
    $tags = [
        1 => [
            "distance" => "1.8km",
            "location" => ['Molenwaterplein 40', '3015 GD Rotterdam'],
            "phone" => '0107040704',
            "website" => 'www.erasmusmc.nl'
        ],
        2 => [
            "distance" => "1.8km",
            "location" => ['Molenwaterplein 40', '3015 GD Rotterdam'],
            "phone" => '0107040704',
            "website" => 'www.erasmusmc.nl'
        ],
    ];

    return $tags[$id];
}

$data = [
    'locations' => getLocations(),
    'details' => getLocationDetails(1)
];

header('Content-Type: application/json');
echo json_encode($data);