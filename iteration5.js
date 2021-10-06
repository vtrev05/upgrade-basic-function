'use strict';

//ITERATION 5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let sum = 0;
let lengths = 0
let typesOfNumber = []
let typesOfString = []

function average(a) {
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number') {
            typesOfNumber.push(a[i])
            sum += a[i]
        } else{
            typesOfString.push(a[i])
            lengths += a[i].length
        }
    }
    console.log(sum / typesOfNumber.length)
    console.log(sum)
    console.log(lengths / typesOfString.length)
}
average(mixedElements)