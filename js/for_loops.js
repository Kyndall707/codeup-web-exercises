//for loop problem 1 completed--------------------------------
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++){
        console.log(num*i);
    }
}
showMultiplicationTable(7);

//for loop problem 2 unfinished -----------------------------------------
var i = Math.floor(Math.random() * 50) + 50;
function isEvenOrOdd(num1) {
    for(var i=0; i<=15; i++){
        if (i === 0){
            console.log(i + "is even");
        }
        else if (i % 2){
            console.log(i + " is even");
        } else{
            console.log(i + " is odd");
        }
    }
} isEvenOrOdd(7);
//for loop problem 3 unfinished------------------------------------
// function addOne(num) {
//     for (var i = 0; i <=9; i++){
//         console.log(num);
//     }
// }addOne(2);

function generatePyramid(num) {
    var number = '';

    for (var i = 1; i <= num; i++) {
        console.log(number += i);
    }
}
generatePyramid(9);

//for loops problem 4 unfinished--------------------------------
function subtractFive(num) {
    for (var i = 5; i <= 100; i--) {
        console.log(num - i);
        break;
    }
}subtractFive(100);