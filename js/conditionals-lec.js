"strict";

var isRainy = true;
//
// if(isRainy){
//     alert("its raining today");
// }
//
// //operators
// var weather = "rainy";
// if(weather === "rainy"){
//     alert("its raining today")
// } // nothing runs
//
// var numberOfLives = 0;
// if(numberOfLives === 0){
//     alert("sorry, game over");
// }
//
// // example 2 ------------------------------------------------------------------------------------
//
// var weather2 = "sunny";
// if(weather === sunny){
//     alert("its sunny");
// } else {
//     alert("its not sunny");
// }
// console.log(weather2);

// example 3-------------------------------------------------------------------------------------------

function evaluateIntersectionLight(lightColor){

    if(lightColor === "green"){
        return "Keep driving";
    } else if(lightColor === "yellow"){
        return "Slow down";
    } else if(lightColor === "red"){
        return "Stop";
    } else {
        return "Proceed with caution"
    }
}

//example 4-----------------------------------------------------------------

var message;
var success = false;


if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}

// the above if/else can be re-written as:
var succsess = false;
var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

//example 5 ------------------------------------------------------------------------

var weather = 'sunny';
var weatherMessage;

if(weather === "rainy"){
    weatherMessage = "its raining(from if/else)";
} else {
    weatherMessage = "have a nice day (from if/else)";
}

//ternary operator way of writing the same code
var weather = "rainy";

var weatherMessage = (weather === "rainy") ? "its raining from tern" : "have a nice day from tern";

//exersice 6---------------------------------------------------------------------
//switch statements

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;// need this so the code doesnt continue to check even if this is true
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default://is the same as a else or last thing/default if nothing else in the options is choosen
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}
//example 7------------------------------------------------------------------

function evaluateIntersectionLight(lightColor){

    if(lightColor === "green"){
        return "Keep driving";
    } else if(lightColor === "yellow"){
        return "Slow down";
    } else if(lightColor === "red"){
        return "Stop";
    } else {
        return "Proceed with caution"
    }
}

//now turn it into a switch statement-----------------------------------------


var evaluateIntersectionLight = prompt("What color is the light?");

switch(evaluateIntersectionLight) {
    case "red":
        alert("Stop"); //return instead of alert so return "stop"
        break;
    case "yellow":
        alert("Slow down"); // return "slow down"
        break;
    case "green":
        alert("Keep driving!"); // return "Keep driving"
        break;
    default:
        alert("proceed with caution"); // return "proceed with caution"
        break;
}
// if you use return and not alert you do not need the breaks but keeping them on doesnt hurt
// i did it correct :,)
