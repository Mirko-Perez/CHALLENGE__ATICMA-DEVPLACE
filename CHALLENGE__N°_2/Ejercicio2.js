"use strict"


// 2 - Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia
// del array sumándole 1 a cada uno de los valores.

let arr=[1,2,3,4,5,7];

let arrSum = [];

for (const iterator in arr) {
    arrSum.push(arr[iterator]+1);
}

console.log(arrSum);