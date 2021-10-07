"use strict"

// 3 - Realizar un script llamado Ejercicio3.js, que cree un array vacío, y luego generar N
// números al azar y guardarlos en un array, N es introducido por el usuario a través de un
// prompt.

const arrRand=[];

let num = prompt ("Ingrese Cantidad de Nros ranom que desea generar");
num= parseInt(num);

for (let index = 0; index < num; index++) {
    
    let elemt=Math.random()*100;
    
    arrRand.push(Math.trunc(elemt));
}

console.log(arrRand);