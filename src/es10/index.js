//APLANAR ARREGLOS
let array = [1,2,3,[7,8,9,[10,11,12]]];
//console.log(array.flat(Infinity));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value*2] ));

//ELIMINAR ESPACIOS DE UNA CADENA
let hello = '   hola mundo     ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

try{

}catch{
    error
}

//OBJECT FROM ENTRIES
let entries = [['name','rommel'],['age',40]];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo para acceder a un descripcion
let mySymbol = 'My Symbol';
let simbol = Symbol(mySymbol);
console.log(simbol.description);