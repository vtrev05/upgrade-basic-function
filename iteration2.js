'use strict';

//ITERATION 2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
let lengths  = [];

function findLongestWord() {
    for(let palabra of avengers) {
  lengths.push(palabra.length);
    }

let maximo = Math.max.apply(null, lengths);

    for (let elemento of avengers) {
    if (elemento.length === maximo) {
        console.log(elemento);
    }}
}
findLongestWord()
