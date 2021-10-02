'use strict';

//ITERATION 4

const numbers = [12, 21, 38, 5, 45, 37, 6];

let sum = 0;
function average() {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let avg = sum / numbers.length
    console.log(avg)
}
average()