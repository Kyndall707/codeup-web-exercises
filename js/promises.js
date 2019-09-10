function wait(num) {
    return new Promise(function(){
        setTimeout(function(){
            resolve();
        }, num)
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
