let tiles = [];

let grid = [];

const DIM = 2;

function rotate_and_draw_image(img, img_x, img_y, img_width, img_height, img_angle){
    push();
    imageMode(CENTER);
    translate(img_x+img_width/2, img_y+img_width/2);
    rotate(PI/180*img_angle);
    image(img, 0, 0, img_width, img_height);
    rotate(-PI / 180 * img_angle);
    translate(-(img_x+img_width/2), -(img_y+img_width/2));
    imageMode(CORNER);
    pop();
}

function preload() {
    tiles = loadTileSets();
    console.log(QUESTION_MARK);
}

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < DIM * DIM; i++) {
        grid[i] = {
            index: i,
            collapsed: false,
            options: options.slice(),
        }
    }
}

function solveOne(w, h) {

    // pick cell with least entropy
    const gridCopy = grid.slice();
    gridCopy.sort((a, b) => {
        return a.options.length - b.options.length
    });

    const minEntropy = gridCopy.filter(x => !x.collapsed).map(x => x.options.length).min();
    const fGrid = gridCopy.filter(x => x.options.length == minEntropy);

    const randomIndex = floor(random(0, fGrid.length));

    const pickedCell = fGrid[randomIndex];
    pickedCell.collapsed = true;
    const pickedOption = random(pickedCell.options);
    pickedCell.options = [pickedOption];

    // for (let j = 0; j < DIM; j++) {
    //     for (let i = 0; i < DIM; i++) {
    //         let cell = grid[i + j * DIM];

    //         if (cell.collapsed) {
    //             let index = cell.options[0];
    //             image(tiles[index], i * w, j * h, w, h);
    //         } else {
    //             fill(0);
    //             stroke(255);
    //             rect(i * w, j * h, w, h);
    //         }
    //     }
    // }

    propogate(pickedCell.index);
}

function helperDraw(w, h) {
    solveOne(w, h);
    console.log(grid);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            let cell = grid[i + j * DIM];

            if (cell.collapsed) {
                let index = cell.options[0];
                console.log(`printing`);
                console.log(index);
                rotate_and_draw_image(tiles[index.tileNumber], i * w, j * h, w, h, index.rotationAngle());
                // console.log(`printing ${index}`);
            } else {
                fill(0);
                // stroke(255);
                rect(i * w, j * h, w, h);
            }
        }
    }
}

function draw() {
    background(0);

    // let i = 0;

    const w = width / DIM;
    const h = height / DIM;

    if (!all(grid.map(x => x.collapsed))) {
        helperDraw(w, h);
        // console.log(grid);
        sleep(10);
    }

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            let cell = grid[i + j * DIM];

            if (cell.collapsed) {
                let index = cell.options[0];
                rotate_and_draw_image(tiles[index.tileNumber], i * w, j * h, w, h, index.rotationAngle());
                // console.log(`printing ${index}`);
            } else {
                fill(0);
                // stroke(255);
                rect(i * w, j * h, w, h);
            }
        }
    }
}

function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

function propogate(index) {
    const i = index % DIM;
    const j = floor(index / DIM);
    const thisCell = grid[index];
    
    // console.log(`propogating ${i}, ${j}`);

    // sleep(1000);

    if (j > 0) {
        const upCell = grid[i + (j - 1) * DIM];

        if (!upCell.collapsed) {
            // console.log(`updating ${i}, ${j - 1}`);
            const backupUpCellOptions = upCell.options.slice();
    
            upCell.options = upCell.options.filter(option => {
                return any(thisCell.options.map(opt => {console.log("doing option"); console.log(opt); let ic = opt.isConnectible(option, 0); console.log(ic); return ic;}));
            });
    
            if (upCell.options.length === 1) {
                upCell.collapsed = true;
            }

            upCell.options.sort((a, b) => a - b);

            if (!upCell.options.equals(backupUpCellOptions)) {
                propogate(i + (j - 1) * DIM);
            }
        }
    }

    if (i < DIM - 1) {
        const rightCell = grid[i + 1 + j * DIM];

        if (!rightCell.collapsed) {
            // console.log(`updating ${i + 1}, ${j}`);
            const backupRightCellOptions = rightCell.options.slice();

            rightCell.options = rightCell.options.filter(option => {
                return any(thisCell.options.map(opt => opt.isConnectible(option, 1)));
            });

            if (rightCell.options.length === 1) {
                rightCell.collapsed = true;
            }

            rightCell.options.sort((a, b) => a - b);

            if (!rightCell.options.equals(backupRightCellOptions)) {
                propogate(i + 1 + j * DIM);
            }
        }
    }

    if (j < DIM - 1) {
        const downCell = grid[i + (j + 1) * DIM];

        if (!downCell.collapsed) {
            // console.log(`updating ${i}, ${j + 1}`);
            const backupDownCellOptions = downCell.options.slice();

            downCell.options = downCell.options.filter(option => {
                return any(thisCell.options.map(opt => opt.isConnectible(option, 2)));

            });

            if (downCell.options.length === 1) {
                downCell.collapsed = true;
            }

            downCell.options.sort((a, b) => a - b);

            if (!downCell.options.equals(backupDownCellOptions)) {
                propogate(i + (j + 1) * DIM);
            }
        }
    }

    if (i > 0) {
        const leftCell = grid[i - 1 + j * DIM];

        if (!leftCell.collapsed) {
            // console.log(`updating ${i - 1}, ${j}`);
            const backupLeftCellOptions = leftCell.options.slice();

            leftCell.options = leftCell.options.filter(option => {
                return any(thisCell.options.map(opt => opt.isConnectible(option, 3)));
            });

            if (leftCell.options.length === 1) {
                leftCell.collapsed = true;
            }

            leftCell.options.sort((a, b) => a - b);

            if (!leftCell.options.equals(backupLeftCellOptions)) {
                propogate(i - 1 + j * DIM);
            }
        }
    }
}

function all(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false;
        }
    }

    return true;
}

function any(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true;
        }
    }

    return false;
}