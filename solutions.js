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



    function isTrue(input) {
        return input === true;
    }


    function isFalse(value) {
        return value === false;
    }


    function not(userInput) {
        return !userInput;
    }


    function addOne(x) {
        return Number(x) + 1;
    }


    function isEven(y) {
        if (y % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }


    function isIdentical(a, b) {
        if (a === b) {
            return true;
        } else {
            return false;
        }
    }


    function isEqual(c, d) {
        if (c == d) {
            return true;
        } else {
            return false;
        }
    }


    function or(e, f) {
        return e || f;
    }


    function and(g, h) {
        return g && h;
    }


    function concat(input1, input2) {
        return ("" + input1 + input2);
    }


