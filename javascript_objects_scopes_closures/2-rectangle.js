#!/usr/bin/node
// Class of rectangle identifying w and h
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)) {
            // Create an empty object and set properties if w or h is not a positive integer or is 0
  
        } else {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;
