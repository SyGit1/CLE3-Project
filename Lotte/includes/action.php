<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Reuma",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "kitchen" => "Dutch",
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "kitchen" => "Italian",
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
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven'],
            "img" => "img/dwarslaesie.webp"
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool'],
            "img" => "img/reuma.png"
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom'],
            "img" => "img/spasticiteit.jpg"
        ]
    ];

    return $tags[$id];
}