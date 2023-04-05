<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Erasmus MC",
            "location" => "Rotterdam",
        ],

    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "distance" => "1.8km",
            "location" => ['Molenwaterplein 40', '3015 GD Rotterdam'],
            "phone" => '0107040704',
            "website" => 'www.erasmusmc.nl'
        ],

    ];

    return $tags[$id];
}