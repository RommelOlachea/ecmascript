//OPERADOR DE REPOSO (CECC)
const obj = {
    name: 'rommel',
    age:40,
    country:'MX'
};

let {country, ...all} = obj;
console.log(country);
console.log(all);

//PROPIEDADES DE PROPAGACION PARA UNIR UNO O MAS OBJETOS.
const obj = {
    name: 'rommel',
    age:40,
};

const obj1 = {
    ...obj,
    country:'MX'
};

console.log(obj1);

//FINALLY EN LAS PROMESAS 

const helloWord = () => {
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(() => resolve('Hello World!!'), 3000)
            : reject(new Error('Test Error'));
    });
};

helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log('Finalizo la promesa'));

//AGRUPACION DE REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-03-03');

console.log(match[1], match[2], match[3]);
