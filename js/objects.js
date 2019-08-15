(function() {
    "use strict";

    //making object
    var person = {};

    //making firts name
    person.firstName = "Kyndall";
    //making last name
    person.lastName = "Sims";

    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:done
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    person.sayHello = "Hello " + person.firstName + " " + person.lastName;



    console.log(person.sayHello);



    /**
     * TODO:done
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // if (total < 200){
    //     console.log(total = total - (total * discount));
    // } else {
    //     return total;
    // }



    //IS TELLING ME IT CANNOT FIND WHAT AMOUNT IS
    shoppers.forEach(function (shopper) {
        if(shopper.amount > 200){
            console.log("Hello " + shopper.name + "today your amount is " + shopper.amount + "your amount after the discount will be" + (shopper.amount - (shopper.amount * .12)));
        } else {
                console.log("Hello " + shopper.name + "your total did not exceed $200, your total today will be" + shopper.amount)
            }
        });

    // shoppers.forEach(function (shopper) { //<-- the .forEach Loops through everything in a array)
    //     if(shopper.amount > 200) {
    //         console.log("Hello " + shopper.name + " Your amount today is " + shopper.amount + " your amount after the discount is " + (shopper.amount - (shopper.amount * .12)));
    //     } else {
    //         console.log("Hello " + shopper.name + " Your amount today is " + shopper.amount)
    //     }
    // });


    // /** TODO:
     // * HEB has an offer for the shoppers that buy products amounting to
     // * more than $200. If a shopper spends more than $200, they get a 12%
     // * discount. Write a JS program, using conditionals, that logs to the
     // * browser, how much Ryan, Cameron and George need to pay. We know that
     // * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     // * display a line with the name of the person, the amount before the
     // * discount, the discount, if any, and the amount after the discount.
     // *
     // * Uncomment the lines below to create an array of objects where each object
     // * represents one shopper. Use a foreach loop to iterate through the array,
     // * and console.log the relevant messages for each person
     // */

    var books = [
        { title: "The Inn", firstName:"James", lastName: "Patterson" },
        { title: "The Turn of the Key", firstName: "Ruth", lastName: "Ware" },
        { title: "Im not dying with you tonight", firstName: "Gilly", lastName: "Segal" },
        { title: "A Song of Ice and Fire", firstName: "George R. R.", lastName: "Martin" },
         { title: "A Dance with Dragons", firstName: "George R.R", lastName: "Martin"}
    ];

        console.log(books[4].title);
        console.log(books[4].firstName);
        console.log(books[4].lastName);



    /** TODO:done
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    console.log();
    console.log();
    console.log();
    // console.log(books[3]);
    // console.log(books[4]);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function createAuthor(firstName, lastName){
        return {
            firstName: firstName,
            lastName: lastName
        }
    }

    function createBook(title, author){
        return{
            title: title,
            author: author
        }
    }
    createBook("garfield gains weight", "whoever", "last");
    books.forEach(function (book, i) {

        console.log("Title: " + book.title);
        console.log("author: " + book.author.firstName + " " + book.author.lastName);
        console.log("----");
        console.log("Book # " + (i + 1));
    };



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();