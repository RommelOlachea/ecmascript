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

{

function saludo(callback){
    setTimeout(function() {
        console.log('Hola Mundo');
        callback();
    }, 3000);
}

function saludo2(){    
    console.log('Soy Rommel');
}

saludo(saludo2)




function saludo(callback){
    setTimeout(function() {
        console.log('Hola Mundo');        
    }, 3000);
    callback();
}

function saludo2(){    
    console.log('Soy Rommel');
}

saludo(saludo2)






}


function date(callback) {
    console.log(new Date)       // se genera la primer fecha antes del settimeout
    setTimeout(function () {
        let date = new Date     // variable que almacenara la segnda fecha en el timeout
        callback(date)          //la función que se le pasara como parametro el...
    }, 3000)                    //valor de la la variable declarada arriba "que es una fecha"
}                               //y asu vez callback es en realidad printDate la función de abajo

function printDate(dateNow) {   //esta función solo manda a imprimir la fecha que tenemos en la variable let date de arriba
    console.log(dateNow)        //y es el callback en realidad
}

date(printDate)



{
    console.log('Inicia el codigo');
    const hello = () =>{
        return new Promise((resolve,reject)=>{
            if(true){
                setTimeout(() => resolve('Hola mundo'), 3000);
            }
            else{
                reject('Error');
            }
        });
    };
    console.log('continua el codigo');
    const hello2 = async () => {
        const saludo = await hello();
        console.log(saludo);
        console.log('Soy Rommel');
    };

    hello2();
    console.log('fin de codigo');
}