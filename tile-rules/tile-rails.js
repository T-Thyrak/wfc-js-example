const BLANK_ENDPOINT = 0;
const CENTER_VARIENT_LEFT = 1;
const CENTER_VARIENT_RIGHT = 2;
const SHIFTED_VARIENT_LEFT = 3;
const SHIFTED_VARIENT_RIGHT = 4;

const CONNECTION_EQUALITY_RULE = (conn1, conn2) => {
    if (conn1 == 0 && conn2 == 0) {
        return true;
    }

    if ((conn1 == 1 && conn2 == 2) || (conn1 == 2 && conn2 == 1)) {
        return true;
    }

    if ((conn1 == 3 && conn2 == 4) || (conn1 == 4 && conn2 == 3)) {
        return true;
    }

    return false;
}

const __TILESET = [
    new Tile(
        "tiles/rail/tile0.png",
        0,
        0,
        [
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
        ]
    ),

    new Tile(
        "tiles/rail/tile1.png",
        1,
        0,
        [
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
        ]
    ),

    new Tile(
        "tiles/rail/tile2.png",
        2,
        0,
        [
            [
                SHIFTED_VARIENT_RIGHT,
                BLANK_ENDPOINT,
            ],
            [
                BLANK_ENDPOINT,
                SHIFTED_VARIENT_LEFT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ]
        ]
    ),

    new Tile(
        "tiles/rail/tile3.png",
        3,
        0,
        [
            [
                SHIFTED_VARIENT_RIGHT,
                BLANK_ENDPOINT
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
            [
                BLANK_ENDPOINT,
                SHIFTED_VARIENT_LEFT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
        ]
    ),

    new Tile(
        "tiles/rail/tile4.png",
        4,
        0,
        [
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ],
        ]
    ),

    new Tile(
        "tiles/rail/tile5.png",
        5,
        0,
        [
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                BLANK_ENDPOINT,
                BLANK_ENDPOINT,
            ]
        ],
    ),

    new Tile(
        "tiles/rail/tile6.png",
        6,
        0,
        [
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ],
            [
                CENTER_VARIENT_RIGHT,
                CENTER_VARIENT_LEFT,
            ]
        ]
    )
];

console.log(__TILESET);
const options = [];

for (let tile of __TILESET) {
    for (let i = 0; i < 4; i++) {
        options.push(tile.tileRotateRight(i));
    }
}

function loadTileSets() {
    let tiles = [];
    tiles[0] = loadImage('tiles/rail/tile0.png');
    tiles[1] = loadImage('tiles/rail/tile1.png');
    tiles[2] = loadImage('tiles/rail/tile2.png');
    tiles[3] = loadImage('tiles/rail/tile3.png');
    tiles[4] = loadImage('tiles/rail/tile4.png');
    tiles[5] = loadImage('tiles/rail/tile5.png');
    tiles[6] = loadImage('tiles/rail/tile6.png');
    return tiles;
}