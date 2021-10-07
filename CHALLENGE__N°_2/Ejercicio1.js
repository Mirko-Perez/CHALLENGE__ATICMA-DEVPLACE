"use strict"


// 1 - Realizar un script llamado Ejercicio1.js, que contenga una función llamada
// CantidadMayusculas que reciba como parámetro un string y devuelva el número de letras
// mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla.

let cadena;

cadena = prompt("Este programa cuenta Mayusculas, ingrese texto")

const CantidadMayus = () =>{
    let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    cadena = cadena.trim();
    let cont=0;

    for (let i = 0; i < mayus.length; i++) {
        for (let x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayus[i]){
                cont+=1;
            }
        }
    }
    return console.log(`Cantidad de Mayusculas encontradas ${cont}`)
}

CantidadMayus(cadena);