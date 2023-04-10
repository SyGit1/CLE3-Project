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
            "img" => "img/dwarslaesie.webp",
        ],
        [
            "id" => 2,
            "name" => "Reuma",
            "type" => "Disability",
            "img" => "img/reuma.png",
        ],
        [
            "id" => 3,
            "name" => "Spasticiteit",
            "type" => "Disability",
            "img" => "img/spasticiteit.jpg",
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
            "info" => "Een dwarslaesie is een onderbreking van de zenuwen in de rug...",
            "img" => "img/dwarslaesie.webp",
            "link" => "https://nl.wikipedia.org/wiki/Dwarslaesie",
        ],
        2 => [
            "name" => "Reuma",
            "info" => "Reuma, in de betekenis waarin huisartsen en specialisten...",
            "img" => "img/reuma.png",
            "link" => "https://nl.wikipedia.org/wiki/Reuma",
        ],
        3 => [
            "name" => "Spasticiteit",
            "info" => "Een spasme is een snelheidsafhankelijke overdreven weerstand...",
            "img" => "img/spasticiteit.jpg",
            "link" => "https://nl.wikipedia.org/wiki/Spasticiteit_en_spasme",
        ]
    ];

    return $tags[$id];
}