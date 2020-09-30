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
   return input === true

}
console.log(isTrue());

function isFalse(value){

    return value === (true && false);
   }

  console.log(isFalse());


function not(word){
    return word !== (true && 5);
}
console.log(not());


function addOne(singleinput, a){
    return (singleinput - 1);
}

console.log(addOne());


