const TILES_BLANK = 0;
const TILES_UP = 1;
const TILES_RIGHT = 2;
const TILES_DOWN = 3;
const TILES_LEFT = 4;

const TILES_RULES = [
    [
        [
            TILES_BLANK,
            TILES_UP,
        ],
        [
            TILES_BLANK,
            TILES_RIGHT,
        ],
        [
            TILES_BLANK,
            TILES_DOWN,
        ],
        [
            TILES_BLANK,
            TILES_LEFT,
        ],
    ],

    [
        [
            TILES_RIGHT,
            TILES_LEFT,
            TILES_DOWN,
        ],
        [
            TILES_LEFT,
            TILES_UP,
            TILES_DOWN,
        ],
        [
            TILES_BLANK,
            TILES_DOWN,
        ],
        [
            TILES_RIGHT,
            TILES_UP,
            TILES_DOWN,
        ]
    ],

    [
        [
            TILES_RIGHT,
            TILES_DOWN,
            TILES_LEFT,
        ],
        [
            TILES_LEFT,
            TILES_UP,
            TILES_DOWN,
        ],
        [
            TILES_UP,
            TILES_LEFT,
            TILES_RIGHT,
        ],
        [
            TILES_BLANK,
            TILES_LEFT,
        ],
    ],

    [
        [
            TILES_BLANK,
            TILES_UP,
        ],
        [
            TILES_LEFT,
            TILES_UP,
            TILES_DOWN,
        ],
        [
            TILES_RIGHT,
            TILES_UP,
            TILES_LEFT,
        ],
        [
            TILES_RIGHT,
            TILES_DOWN,
            TILES_UP,
        ]
    ],

    [
        [
            TILES_DOWN,
            TILES_LEFT,
            TILES_RIGHT,
        ],
        [
            TILES_BLANK,
            TILES_RIGHT,
        ],
        [
            TILES_RIGHT,
            TILES_UP,
            TILES_LEFT,
        ],
        [
            TILES_RIGHT,
            TILES_UP,
            TILES_DOWN,
        ]
    ],
];

function loadTileSets() {
    let tiles = [];
    tiles[0] = loadImage('tiles/demo-tracks/blank.png');
    tiles[1] = loadImage('tiles/demo-tracks/up.png');
    tiles[2] = loadImage('tiles/demo-tracks/right.png');
    tiles[3] = loadImage('tiles/demo-tracks/down.png');
    tiles[4] = loadImage('tiles/demo-tracks/left.png');

    return tiles;
}

const options = [TILES_BLANK, TILES_UP, TILES_RIGHT, TILES_DOWN, TILES_LEFT];