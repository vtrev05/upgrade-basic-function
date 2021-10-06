'use strict';

//ITERATION 8

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

let counter = 0;

function repeatCounter(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(word)) {
            counter += 1;
        }
    }
    console.log(`El término que has introducido se repite ${counter} veces en el array`)
  }

repeatCounter(counterWords, 'code');