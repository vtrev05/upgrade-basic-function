'use strict';

//ITERATION 6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
const newArray = [];

function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            console.log('está duplicado, no lo meto en el nuevo array')
        } else {
            newArray.push(array[i])
        }
       
    }
console.log(newArray) 
  }
removeDuplicates(duplicates)