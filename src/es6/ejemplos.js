const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
         ? setTimeout(() => resolve('Hello World'), 3000)
         : reject(new Error('test error'));
    });
};

const asynHello = async ()=>{
    const hello = await helloWorld();
    console.log(hello);    
}
console.log('el codigo continua');
asynHello();
console.log('y el codigo sigue continando');

