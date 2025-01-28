const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) //if ternario
            ? setTimeout(() => resolve('Async'), 2000) //si es verdadera
            : reject(new Error('Error!'));            
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');

//async y await no bloquean la aplicacion
