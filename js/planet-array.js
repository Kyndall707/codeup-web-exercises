(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
//ADDING THE SUN
    console.log('Adding "The Sun" to the beginning of the planets array.');

    planets.unshift('The Sun');

    console.log(planets);
//ADDING PLUTO
    console.log('Adding "Pluto" to the end of the planets array.');

    planets.push('Pluto');

    console.log(planets);
//REMOVING THE SUN
    console.log('Removing "The Sun" from the beginning of the planets array.');

    planets.shift();

    console.log(planets);
//REMOVING PLUTO
    console.log('Removing "Pluto" from the end of the planets array.');

    planets.pop();

    console.log(planets);
//FINDING AND LOGGING THE INDEX OF EARTH
    console.log('Finding and logging the index of "Earth" in the planets array.');

    console.log(planets.indexOf('Earth'));

//REVERSING PLANETS ORDERS
    console.log("Reversing the order of the planets array.");

    planets.reverse();

    console.log(planets);
//SORTING PLANETS
    console.log("Sorting the planets array.");

    planets.sort();

    console.log(planets);
})();