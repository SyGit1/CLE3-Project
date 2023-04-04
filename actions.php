<?php
/**
 * @return array
 */
function Ziekenhuizen()
{
    return [
        [
            "id" => 1,
            "name" => "Erasmus MC",
            "toegankelijkheid" => "zeer goed",
        ],
        [
            "id" => 2,
            "name" => "Sint franciscus Ziekenhuis",
            "toegankelijkheid" => "zeer goed",
        ],
        [
            "id" => 3,
            "name" => "Ijsselland ziekenhuis",
            "toegankelijkheid" => "zeer goed",
        ]
        [
        "id" => 4,
        "name" => "Fysiotherapie Wijnhaven",
        "toegankelijkheid" => " goed",
         ],
        [
            "id" => 5,
            "name" => "Sint franciscus Ziekenhuis",
            "toegankelijkheid" => "zeer goed",
        ],
        [
            "id" => 6,
            "name" => "Ijsselland ziekenhuis",
            "toegankelijkheid" => "zeer goed",
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
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}

