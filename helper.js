Array.prototype.equals = function(rhs) {
    if (this.length != rhs.length) {
        return false;
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] != rhs[i]) {
            return false;
        }
    }

    return true;
}

Array.prototype.min = function() {
    return Math.min.apply(null, this);
}

const QUESTION_MARK = 420;

function rotateLeft(arr, n) {
    return n ? [...arr.slice(n, arr.length), ...arr.slice(0, n)] : arr;
}
function rotateRight(arr, n) {
    return n ? [...arr.slice(-n, arr.length), ...arr.slice(0, -n)] : arr;
}

function rzip(arr1, arr2) {
    if (arr1.length != arr2.length) {
        throw new Error("rzip: arrays must be of same length");
    }

    let res = [];
    let len = arr1.length;
    for (let i = 0; i < arr1.length; i++) {
        res.push([arr1[i], arr2[len - i - 1]]);
    }

    return res;
}

function zip(arr1, arr2) {
    if (arr1.length != arr2.length) {
        throw new Error("zip: arrays must be of same length");
    }

    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push([arr1[i], arr2[i]]);
    }

    return res;
}