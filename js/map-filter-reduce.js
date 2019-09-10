const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java','scala','php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zack',
        email: 'zack@codeup.com',
        languages: ['javascript','bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java','php','sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 1. Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
       users.filter(user => {
           if(users.languages.length >= 3){
               return user;
           }
        });
// 2. Use .map to create an array of strings where each element is a
// user's email address
        users.map(user=>{
           return user.email;
        });
        console.log(user);
// 3. Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
        let average = users.reduce((total,user)=>{
           return total+user.yearsOfExperience;
        },0)/users.length;
// 4. Use .reduce to get the longest email from the list of users.
        users.reduce((longest, user)=>{
            if(user.email.length > longest.length){
                longest=user.email;
            }
            return longest
        }, ' ');
// 5. Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
        users.reduce((names,user)=>{
            return names+user.name + ', '
}, "your instructors are: ");

// 6. BONUS
//Use .reduce to get the unique list of languages from the list of users.
    const uniqueLangs = users.reduce((listOfLangs, user) => {
        for (const lang of user.languages){
            if (listOfLangs.indexOf(lang) === -1){
                listOfLangs.push(lang);
            }
        }
        return listOfLangs;
    }, []);


    //another way to solve it

    let currentLangList = users.map(user => user.languages).reduce((currentList, currentLanguages) => currrentList.concat(currentLanguage), []).filter(function (value,index,self) {
        return self.indexOf(value) === index;

    });



//node js/map-filter-reduce.js