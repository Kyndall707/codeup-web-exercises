// function wait(num) {
//     return new Promise(function(){
//         setTimeout(function(){
//             resolve();
//         }, num)
//     });
// }
//
// // also works, just shorter syntax
//
// // function wait(num) {
// //     return new Promise(function(){
// //         setTimeout(resolve, num);
// //     });
// // }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//

// practicing fetch
//
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users', {headers:{'Authorization': 'gitHubKey'}})
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
// }
//
// // later on...
//
// getGithubUsernames().then((usernames) => {
//     usernames.forEach((username) => {
//         // do something with each username
//     });
// }).catch(error => console.error(error));