//PARAMETROS POR DEFAULT

function newFunction(name,age,country){
    var name = name || 'Rommel';
    var age = age || 40;
    var country = country = 'MX';

    console.log(name, age, country);
}


//es6
function newFunction2(name='Rommel',age=40,country='MX'){
 console.log(name,age,country);
}

newFunction2();
newFunction2('MARY PATY',35,'MX');


//CONCATENACION
let hello = 'Hello';
let world = 'World';
let epichPhrase = hello + ' ' + world;

console.log(epichPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry \n" 
+ "Otra frase epica que necesitamos.";

let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(l);
console.log(lorem2);

//DESESTRUCTURACION
let person = {
    name : "Rommel",
    age : 40,
    country: 'MX',
};

console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log(nombre, age, country);

//operador de propagación - SPREAD OPERATOR
let team1 = ['Rommel','Mary Paty','Romina'];
let team2 = ['Osmar','Aida','Valeria'];

let education = ['Ernesto', ...team1, ...team2];
let education2 = team1 + team2;
console.log(education2);

//ARROWS FUNCTION, FUNCIONES TIPO FLECHA
let names = [
    {name : 'Rommel', age:40},
    {name : 'Mary Paty', age: 35}
];

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));
// otras formas de declaracion de las arrow functions 
const listOfNames3 = (name,age,country) => {
    ...acciones a realizar
};

//otra forma si es un solo parametro
const listOfNames4 = name => {
    ...acciones a realizar
};

const square = num => num * num;

let c = square(4);

//PROMESAS
const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if (true){
            resolve('HEY CORRECTO!');
        }else{
            reject('upsi!!!');
        }
    });
};

helloPromise()
.then(response => console.log(response))
.then(()=>console.log('Hola'))
.catch(error => console.log(error));

//CLASES

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valor1, valor2){
        this.valueA = valor1;
        this.valueB = valor2;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(5,9));

//MODULOS
import { hello } from './module';
console.log(hello());

//GENERADORES (GENERATORS)

function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world!';
    }
}

const generatorHellow = helloWorld();
console.log(generatorHellow.next().value);
console.log(generatorHellow.next().value);
console.log(generatorHellow.next().value);


