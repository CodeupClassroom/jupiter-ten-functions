"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 *
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//isTrue
function isTrue(input){
    return input === true;
}

// Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

function isFalse(input){
    return input === false;
}

function not(input){
    return !input;
}

function addOne(input){
    return ++input;
}

function isEven(input){
    return (input % 2 === 0 && input !== false);
}

function isIdentical(x,y){
    if(x ===y) {
        return true;
    } else {
        return false;
    }
}
function isEqual(x,y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

function or(x,y){
    return (x || y);
}

function and(x,y){
    return (x && y);
}

function concat(x,y) {
    if (x == "string" && y == "string") {
        return (x + y)
    } else (x == "number" && y == "number")
    return (x.toString() + y.toString());
}