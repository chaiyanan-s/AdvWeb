const myRequest = (mesage, callback) => {
    console.log('---Start---')
    const response = mesage + ' done!!'
    const error = undefined;
    setTimeout(() => {
        const result = callback(error, response)
        console.log(result)
    }, 2000);
    console.log('---Finish---')
}

const myCallback = (error, res) => {
    if(error) {
        return 'Error ' + error;
    } else {
        return res;
    }
}

myRequest('Hello World', myCallback);