"use strict";

var willContinue = confirm("please enter a number?");

if(willContinue){
    //prompt the user for a number
    var userNum = prompt("what number would you like to enter");

    var isNum = !isNaN(userInput);
    if (isNum){
        var userNum = parseFloat(userInput);
        var isEven = userInput % 2 === 0;
        var isEvenMessage = (isEven) ? "Number is Even": "number is odd";
            alert(isEvenMessage);

        // alert the following...
        alert(userNum + 100);
        var isPos = Math.sign(userNum) === 1;
        var isPosMessage = (isPos) ? "number is positive" : "number is negative";
        alert(isPosMessage);
        //whether the number is even or odd
        //what the number plus 100 is
        //if the number is negative or positive
    } else {
        //otherwise
        //if what the user enters is not a number, use an alert to tell them that, and
        //do *not* display any of the above information.
        }
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var willContinue = confirm("please enter a number?");
function isNum(input) {
    return !isNaN()
}
// function () {
//     return num % 2 === 0;
// }
function outputEvenMessage(result){

}




/* ########################################################################## */

    function analyzeColor(color) {

      if (color === "blue"){
          return "blue is the color of the sky";
        } else if(color === "red"){
            return "red is the color of apples";
        } else if(color === "orange"){
            return "orange is the color of firefox";
        } else if(color === "yellow"){
            return "yellow is the color of sunflowers";
        } else if(color === "green"){
            return "green is the color of moss";
        } else if(color === "indigo"){
            return "indigo is the color of blueberries";
        } else if(color === "violet"){
            return "violet is the color of violets";
        } else {
            return "i dont know anything about this color";
        }
    }
     // console.log(analyzeColor("blue"));
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


var analyzeColor = prompt("What is the color?");
switch (analyzeColor) {
    case "blue":
        alert("Blue is the color of the sky");
        break;
    case "red":
        alert("Red is the color of roses");
        break;
    case "orange":
        alert("Orange is the color of pumpkins");
        break;
    case "yellow":
        alert("Yellow is the color of sunflowers");
        break;
    case "green":
        alert("Green is the color of grass");
        break;
    case "indigo":
        alert("Indigo is the color of blueberries");
        break;
    case "violet":
        alert("Violet is the color of violets");
        break;
    default:
        alert("i dont know this color");
        break;

}
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
    // var userMessage = prompt("Pick a number between 0 and 5");
    function calculateTotal(luckyNumber, totalAmount){
        if(luckyNumber === 0){
            alert("Sorry! No discount") + luckyNumber + totalAmount;
        }else if(luckyNumber === 1){
            alert("Congrats! You've received a 10% discount.") + (totalAmount - (totalAmount/.10));
        }else if(luckyNumber === 2){
            alert("Congrats! You've received a 25% discount.") + (totalAmount - (totalAmount/.25));
        }else if(luckyNumber === 3){
            alert("Congrats! You've received a 35% discount.") + (totalAmount - (totalAmount/.35));
        }else if(luckyNumber === 4){
            alert("Congrats! You've received 50% discount.") + (totalAmount - (totalAmount/.50));
        } else if(luckyNumber === 5) {
            alert("Congrats! Your purchase is free!") + (totalAmount - (totalAmount/.100));
        }
    }
console.log(calculateTotal(1, 100))




/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 5);