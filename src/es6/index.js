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

console.log(education);







