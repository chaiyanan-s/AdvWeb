const checkAuth = (username, password) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(username == 'chaiyanan' && password == '6414313') {
                console.log('---checkAuth---')
                resolve({authData: username+password})
            } else {
                reject(new Error('Authentication Fail!!'))
            }
        }, 2000);
    })
}

const getStudent = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('---getStudent---')
            const data = {
                name: 'Chaiyanan Seekhachon',
                permission: 'Admin'
            };
            resolve(data)
        }, 3000);
    })
}

const getTheResult = async() => {
    const auth = await checkAuth('chaiyanan', '6414313');
    const data = await getStudent(auth);
    console.log(data);
}

console.log('---Start---')
getTheResult()
console.log('---Finish---')