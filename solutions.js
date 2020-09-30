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
function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false;
}


function not(input){
    if (input === !input){
        return true;
    }
    else{
        return false;
    }
}

function addOne(num){
    var sum= Number(num=num +1);
    return sum ;

}
function isEven(num){
    var check = (num % 2 === 0 || num === false )?true:false;
    return check;
}
function  isIdentical(inputOne,inputTwo){
    var check =(inputOne!==inputTwo)?false:true;
    return check;
}