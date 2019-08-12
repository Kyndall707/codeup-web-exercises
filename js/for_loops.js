//for loop problem 1 completed--------------------------------
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++){
        console.log(num*i);
    }
}
showMultiplicationTable(7);

//for loop problem 2 unfinished -----------------------------------------
function randomOddEven() {
    for (var i = 1; i <=10; i++) {
        var number = Math.floor(Math.random() * 180 + 20);
        if (number % 2 === 0) {
            console.log(number +  " is even ");
        } else {
            console.log(number + " is odd ");
        }
    }
}
randomOddEven();
//for loop problem 3 unfinished------------------------------------
for(var i = 1; i <= 9; i++){
    var row ="";
    for(var j = 0; j < i; j++){
        row = row + i;
    }
    console.log(row);
}



//for loops problem 4 unfinished--------------------------------
    for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
    }
