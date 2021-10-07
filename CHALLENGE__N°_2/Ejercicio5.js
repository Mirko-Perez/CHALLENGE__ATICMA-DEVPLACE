"use strict"

// 5 - Dado los siguientes vectores:
// int var1={1,2,4,6,7,8}
// int var2={1,2,4,5,6,7,8}
// a - Mostrar de manera ordenada la unión de los elementos de ambos vectores.

let var1=[1,2,4,6,7,8];
let var2=[1,2,4,5,6,7,8];

let var3 = [];

var3 = var1.concat(var2);

console.log(var3.sort((a,b)=>a-b));