//replace y replaceAll
const str = "JavaScript es maravillos, con JavaScript puedo crear el futuro de la web";
const replaced = str.replace('JavaScript','Phyton');
const replaced2 = str.replaceAll('JavaScript','Phyton');
console.log(replaced);
console.log(replaced2);

//metodos privados en las clases
class message{
    show(val){
        console.log(val);
    };
    #show2(val){
        console.log(val);
    };
    get #add(value){
        ...logica definida
    }
    set #set(value){
        ...logica definida
    }
}

const msg = new message();
msg.show('Hola');
msg.show2('Hola');

//promise any
const promise1 = new Promise((resolve,reject)=> reject('1'));
const promise2 = new Promise((resolve,reject)=> resolve('2'));
const promise3 = new Promise((resolve,reject)=> resolve('3'));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//weak reference
class anyClass {
    constructor(elemento){
        this.ref  = new WeakRef(elemento);
    }
}

//Asignación and lógico, asignación or lógico, asignación de anulación lógica
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse);

//Nullish coalescing operator (??)
const fooo = null ?? 'default string';
console.log(fooo);


