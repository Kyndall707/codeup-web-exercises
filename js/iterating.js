(function(){
    "use strict";


    var names = ['kyndall', 'courtney', 'autumn', 'crystal'];

    /**
     * TODO: done
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    console.log(names.length);

    /**
     * TODO: done
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO: done
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }



    /**
     * TODO: done
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    names.forEach(function (name) {
        console.log(name);
    });

    /**
     * TODO: done
     * Refactor your above code to use a `forEach` loop
     */

    function first(arr) {
        return arr[0];
    }
    function secound(arr) {
        return arr[1];
    }
    function third(arr) {
        return arr[arr.length - 1];
    }
    console.log(first(names));
    console.log(secound(names));
    console.log(third(names));
    /**
     * TODO: done
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();