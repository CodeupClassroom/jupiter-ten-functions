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
    var sum= num= Number(num +1);
    if (num<0)
        sum=-num+1;
    return sum ;

}
function isEven(num){
    var check = (num % 2 === 0 || num === false )?true:false;
    if (check===false){
        return check=false;
    }
    return check;
}
function  isIdentical(inputOne,inputTwo){
    var check =(inputOne!==inputTwo)?false:true;
    return check;
}
function isEqual(inputOne,inputTwo){
 var check = (inputOne!==inputTwo)
    if (!check == 0 && !check== "false") {
       return true; }
    else if(!check ==1  && !check =="true" )
    {return true;
    }else {
        return false;
    }
return check;
}
function and(inputOne,inputTwo){
  if (inputOne===inputTwo){
      return true;}
      else if (inputOne ===typeof 'string' && inputTwo ===typeof 'string')
          return false;
      }



function concat(inputOne,inputTwo) {
    if (typeof inputOne === 'string' && typeof inputTwo === 'string') {
        var isString = inputOne + inputTwo
    } else if (typeof inputOne === 'number' && typeof inputTwo === 'number') {
        return isString = inputOne + inputTwo;
    }
}

function or (inputOne,inputTwo){
   var inputOneVal=isTrue(inputOne);
   var inputOneVal=isTrue(inputTwo);
    var check =(inputOne=== true || inputTwo===true)?true:false;
    if(inputOne==="hello")
return check;
}

