class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)) {
            // Create an empty object if w or h is not a positive integer or is 0
            return {};
        }

        this.width = w;
        this.height = h;
    }
}

class Square extends Rectangle {
    constructor(size) {
        // Call the constructor of the base class (Rectangle) using super()
        super(size, size);
    }
}

module.exports = Square;
