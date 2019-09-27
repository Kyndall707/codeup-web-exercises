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

//  fetch('https://api.github.com/users/Kyndall707/events', {headers:{'Authorization': `token ${gitHubKey}`}})
//             .then(function (res) {
//                 return res.json()
//             })
//             .then(function(data){
//                 console.log(data[0]);
//             }).catch(function(err){
//                 console.log(err);
//         })