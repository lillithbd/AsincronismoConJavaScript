function sum(num1, num2)
{
    return num1 + num2; 
}

function calc(num1, num2, callback)
{
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function ()
{
    console.log('Hola JavaScript');
}, 5000);

function greetting(name)
{
    console.log(`Hola ${name}`);
}

setTimeout(greetting, 2000, 'Liliana');

