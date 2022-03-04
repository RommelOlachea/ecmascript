const button = document.getElementById('btn');

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
})

//bigint
const bigNumber = 9007199254740991n;
const anothrBigIntNumber = BigInt(9007199254740991);
console.log(bigNumber);
console.log(anothrBigIntNumber);

//promise.allsettled()
const promise1 = new Promise((resolve,reject) => reject('reject 1'));
const promise2 = new Promise((resolve,reject) => resolve('resolve 1'));
const promise3 = new Promise((resolve,reject) => resolve('resolve 2'));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));

//globalthis
console.log(globalThis);

//Nullish coalescing operator (??)
const fooo = null ?? 'default string';
console.log(fooo);

//Optional chaining(?.)
const user = {};
console.log(user.profile.email); //esta linea marca error
console.log(user?.profile?.email); //con el operador no marca error

if (user?.profile?.email){
    console.log('se tiene acceso');
}else{
    console.log('no se tiene acceso');
}