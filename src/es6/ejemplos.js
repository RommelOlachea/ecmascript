const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(resolve('Hola Mundo!!'),3000)
            : reject(new Error('Ups ocurrio un error'));
    });
}

const asynHello = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

asynHello();