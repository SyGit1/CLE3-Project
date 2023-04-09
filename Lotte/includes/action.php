<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Dwarslaesie",
            "type" => "Disability",
        ],
        [
            "id" => 2,
            "name" => "Reuma",
            "type" => "Disability",
        ],
        [
            "id" => 3,
            "name" => "Spasticiteit",
            "type" => "Disability",
        ]
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
            "name" => "Dwarslaesie",
            "recipe" => "Put it in the oven and go!",
            "img" => "CLSlay/Lotte/img/dwarslaesie.webp",
        ],
        2 => [
            "name" => "Reuma",
            "recipe" => "You can make this delicious Dutch meal by ...",
            "img" => "CLSlay/Lotte/img/reuma.png",
        ],
        3 => [
            "name" => "Spasticiteit",
            "recipe" => "Very nice when your grandma prepares this meal",
            "img" => "CLSlay/Lotte/img/spasticiteit.jpg",
        ]
    ];

    return $tags[$id];
}