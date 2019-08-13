//for loop problem 1 completed--------------------------------
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++){
        console.log(num*i);
    }
}
showMultiplicationTable(7);

//or--------------------
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++){
        console.log(num + ' x ' + i + " = " + (num*1));
    }
}
showMultiplicationTable(7);

//for loop problem 2 finished -----------------------------------------
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
//or---------------------------
for (var i = 1; i <=10; i++) {
    var number = Math.floor(Math.random() * 181) + 20;
    if (number % 2 === 0);{
    console.log(number + " is even!");
    }else{
        console.log(number + " is odd!");
    }
}


//for loop problem 3 finished------------------------------------
for(var i = 1; i <= 9; i++){
    var row =""; //keeps the number separate rather than adding it together
    for(var j = 0; j < i; j++){
        row = row + i;
    }
    console.log(row);
}

//or---------------------

var x = 1;

for (var j = 1; j <= 9; j++){
    console.log(j * x);
    x += "1";
}

//or-----------------------

for (var i = 1; i <= 9; i++){
    console.log(String(i).repeat(i))
}


//for loops problem 4 finished--------------------------------
    for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
    }

//or------------------------

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}