var random = Math.floor((Math.random()*50)+1);
console.log("Random odd number to skip is: " + random);

for(var i = 1; i < 100; i++){
    if (i % 2 === 0){
        continue;
    }
    if (random === i){
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i >= 49){
        break;
    }
}

//first question that i missed---------------

while(true) {
    var num = parseInt(prompt("give me an odd number between 0 and 50"));
    if (num % 2 !== 0 && num > 0 && num < 51){
        break;
    }
}
