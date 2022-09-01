const ROT_0 = 0;
const ROT_90 = 1;
const ROT_180 = 2;
const ROT_270 = 3;

class Tile {
    constructor(image, tileNumber, rotation, conn_rule) {
        this.image = image;
        this.tileNumber = tileNumber;
        this.rotation = rotation;
        this.conn_rule = conn_rule;
    }
    clone() {
        // console.log(this.image);
        // console.log(this.rotation);
        // console.log((this.rotation + 1) % 4);
        // console.log(this.conn_rule);
        // console.log(this.conn_rule.slice());
        return new Tile(this.image, this.rotation, this.conn_rule.slice());
    }
    tileRotateLeft(n) {
        let r = (4 - n) % 4;
        let cloned_tile = this.clone();
        cloned_tile.rotation = (cloned_tile.rotation + r) % 4;
        cloned_tile.conn_rule = rotateLeft(cloned_tile.conn_rule, r);
        return cloned_tile;
    }
    tileRotateRight(n) {
        console.log("tileRotateRight: " + n);
        let r = n % 4;
        let c = structuredClone(this);
        let cloned_tile = new Tile(c.image, c.tileNumber, (c.rotation + r) % 4, c.conn_rule);
        console.log("cloned_tile:");
        console.log(cloned_tile);
        cloned_tile.conn_rule = rotateRight(cloned_tile.conn_rule, r);
        return cloned_tile;
    }
    isConnectible(other, side) {
        let oppSide = (side + 2) % 4;
        let gz = zip(this.conn_rule[side], other.conn_rule[oppSide]);
        console.log(gz);

        return all(gz.map((a, b) => a == b /*CONNECTION_EQUALITY_RULE*/));
    }
    rotationAngle() {
        if (this.rotation == 0) {
            return 0;
        } else if (this.rotation == 1) {
            return 90;
        } else if (this.rotation == 2) {
            return 180;
        }
        return 270;
    }
}