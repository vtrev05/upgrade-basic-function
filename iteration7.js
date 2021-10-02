'use strict';

//ITERATION 7

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, value) {
        if (array.includes(value)) {
            console.log(`Qué bien, he encontrado el nombre que has introducido en la posición ${array.indexOf(value)} de la lista`) 
        } else{
            console.log('Lo siento, no he encontrado el nombre que has introducido')
        }
  }

finderName(nameFinder, 'Peggy')