const data = {
    frontend:'Rommel',
    backend:'Mary Paty',
    desigm:'Osmar',
}

// const entries = Object.entries(data);
// console.log(entries);

const values = Object.values(data);
console.log(values);

const str = 'hello';

console.log(str.padStart(7,'Hi'));
console.log(str.padEnd(12,'  --------'))
console.log('Food'.padEnd(12,'  --------'))

//Async Await

const helloWorld = () => {
    return new Promise((resolve,reject) => {
      (true)
      ? setTimeout(()=> resolve('Hello World'),3000)
      : reject(new Error('Test Error'));  
    });
};

const helloAsyn = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsyn();
console.log('la ejecucion del codigo continua');
//una manera de cachar el error es con try catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();        
        console.log(hello);
    } catch (error) {
        console.log(error);
    }    
}

anotherFunction();
console.log('y continua...');





