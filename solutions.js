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

//2
function isTrue(input) {
    return input === true;
}


//3
function isFalse(input) {
    return input === false;
}


//4
function not(input) {
    return !input;
}


//5
function addOne(input) {
    return Number(input) + 1;
}


//1
function isEven(input) {
    return input % 2 == 0;
}

//2
function isIdentical(input1, input2) {
    return input1 === input2;
}

//3
function isEqual(input1, input2) {
    return input1 == input2;
}

//4
function or(input1, input2) {
    return input1 || input2;
}