'use strict';

//ITERATION 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(acc, number) {
    let acum = acc + number
    return acum
}

const suma = numbers.reduce(sumAll)
console.log(suma)