//ejercicio 1.a
// let fruta=[];
// let ingr;

// for(i=0;i<5;i++){
//     ingr=prompt("ingrese nombres de frutas");
//     fruta.push(ingr);
// } console.log(fruta);

//ejercicio 1.b
// let fruta2=[];
// let ingr;
// let i=0;

// while(ingr!=="0"){
//     ingr=prompt("ingrese nombres de frutas. Presione 0 para terminar");
//     fruta2.push(ingr);
//     i++
// }console.log(fruta2);

//1c
// fruta=fruta.concat(fruta2);
// fruta2= fruta2.concat(fruta);
// console.log(fruta);
// console.log=(fruta2);

// // // ejercicio 2
// // let ciudad= ["Rosario", "Madrid", "Cairo", "Brazilia", "Barranquilla", "Venecia", "Bariloche", "Miami", "Lorca", "Paris"];
// // let num= parseInt(prompt("ingrese un numero del 1 al 10 y se le devolvera el nombre de una ciudad"));                                                                                                                                                                                                                              

// // console.log(ciudad[num]);

// // //ejercicio 3
// // let ciudad= ["Rosario", "Madrid", "Cairo", "Brazilia", "Barranquilla", "Venecia", "Bariloche", "Miami", "Lorca", "Paris"];
// // let num= parseInt(prompt("ingrese un numero del 1 al 10"));

// // ciudad.length= ciudad.length - num;
// // console.log(ciudad);
// // let ciudad2= ciudad.splice(num)
// // console.log (ciudad2);

// // //ejercicio 4
// let nombre= ["Charly Garcia","Nito Mestre","Gustavo Cerati","Papo","Leon Gieco","Fito Paez","Juanse","Pity"];
// console.log (nombre);

// // //a
// // // console.log (nombre.length);

// // //b
// // // console.log(nombre[7]);

// // c 
// i= 0;
// for(i=0;i<nombre.length;i++){
//     if(i%2 ===0){
//         console.log("las posiciones pares son: " + nombre[i]);
//     }
// }

// //d
// // i= 0;
// // for(i=0;i<nombre.length;i++){
// //     if(i%2 !==0){
// //         console.log("las posiciones impares son: " + nombre[i]);
// //     }
// // }

// //e

// // for(let i=0;i<=8;i++){
// //     console.log(nombre[i]);
// // }

// // //f 

// // for(let i=1;i<=7;i++){
// //     console.log(nombre[i]);
// // }

// //g
// // console.log (nombre.join("*"));

// //h

// // let reempl= prompt("ingresa un nombre para reemplazar al ultimo artista");

// // nombre[7]= reempl;
// // console.log (nombre.toString());

//ejercicio 5
let num= [1,2,3,4,5,6,7,8];

//a
// console.log (num.length);

//b
// i= 0;
// for(i=0;i<num.length;i++){
//     if(i%2 ===0){
//         console.log("las posiciones impares son: " + num[i]);
//     }
// }

// //c
// i= 0;
// for(i=0;i<num.length;i++){
//     if(i%2 !==0){
//         console.log("los numeros pares son: " + num[i]);
//     }
// }

//d mayor de ellos
// let mayor=0;

// for(i=0;i<num.length;i++){
//     if(num[i]>mayor){  // si el numero iterado es mayor que 0 entonces
//         mayor=num[i]; //que mayor tome el valor del numero iterado
//     }
// }console.log("el numero mayor del arreglo es: " + mayor); //me va amostrar el nmero iterado mas grande


//e la mitad de elementos array sin saber cuantas posiciones tiene
// i=0;
// let m1= num.splice(0,(num.length/2));
// for(i=0;i<num.length;i++){
//     if(i= m1){
//         console.log("esta es la mitad del array: " + m1);
//     }
// }