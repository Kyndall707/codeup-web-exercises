//first exercise: done---------------------------------------
function multiplyByTwo(num) {
    return (num * 2);
}
console.log(multiplyByTwo(12));
//or--------------------------------------
var i = 2;
while (i <= 65536){
    console.log(i);
    i *- 2;
}
//second exercise: unfinished---------------------------------

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("lets work, ive got" + allCones + " cones to sell");
do {
    var conesSold = Math.floor(Math.random()* 5) + 1;
    if(conesSold > allCones){
        console.log("Sorry my dude, i cant sell you" + conesSold + ", today ive only got" + allCones + "left")
    }else{
        allCones = allCones - conesSold;
        console.log("here you are!" + conesSold + "cone(s)! Only " + allCones + " left to sell!")
    }
}while(allCones > 0);
console.log("yay i sold all the cones");

//icecream seller cant go home until everything is bought
//use a do-while loop, log the amount of cones sold to each person
//cannot sell more than she has, if cones are > what the person asked for say
//"sorry! i only have x cones"








