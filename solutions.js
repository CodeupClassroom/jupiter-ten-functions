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

// 1. Define a function named `isTrue` that takes in any input and returns true if
//    the input provided is exactly equal to `true` in value and data type.

function isTrue(input)  {
    return input === true;
}

// 2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided input is
// equal to false in both type and value.

// 3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.

// 4. Define a function named `addOne` that takes in a single input. If the input is a number or a numeric string, return the value plus one.

// 5. Define a function named `isEven` that takes in a single input. If the input is an even number or a string containing an even number, return `true`. Any other input should return false for the output.

// 6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal both in data type and in value, then return `true`. If the values are not the same data type or not the same value, return `false`.

// 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

// 8. Define a function named `or` that takes in two input arguments. The output returned should be the result of an `or` operation on both inputs.

// 9. Define a function named `and` that takes in two input arguments and returns the result of a logical `and` operation of both inputs.

// 10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.

// ## Hints
//
// Consider this example problem.
//
// > Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// - `isBoolean("Dog")` should return `false` because a string is not a boolean
// - `isBoolean(false)` should return `true` because only true and false are boolean values.
// - When a problem says `return`, it means `return`, not `console.log`.
// - When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.
//
// The following example is incorrect because the function does not take in an argument. It's referencing a global variable, and that is not the same as accepting an input as an argument.
//
// ```js
// var input = "Grace Hopper"
// function isBoolean() {
//     return typeof input == "boolean";
// }
// ```
//
// This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.
//
// ```js
// function isBoolean(input) {
//     console.log(typeof input == 'boolean');
// }
// ```
//
// Correct solution:
//
// ```js
// function isBoolean(input) {
//     return typeof input == "boolean";
// }
// ```
//
// ## About
//
// - Testing framework: <a href="https://github.com/jasmine/jasmine">Jasmine</a>
// - "Ten Functions" Originally Made by [Ryan Orsinger](https://ryanorsinger.glitch.me/), adapted for use at [Codeup](https://codeup.com)