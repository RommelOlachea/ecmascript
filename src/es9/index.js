const obj = {
    name: 'Rommel',
    age: 40,
    country: 'MX'
};

let {country, ...all} = obj;
console.log(country);
console.log(obj);

const obj = {
    name : 'Rommel',
    age : 40  
};

const ob1 = {
        ...obj,
        country : 'MX'
}

console.log(ob1);

//PROMISE AND FINALLY
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world!!'), 3000)
            : reject(new Error('Test error'));
    });
};

helloWorld()
    .then(response =>console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log('Finally'));


