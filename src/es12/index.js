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
        ...
    }
    set #set(value){
        ...
    }
}

const msg = new message();
msg.show('Hola');
msg.show2('Hola');