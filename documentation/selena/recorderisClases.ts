//declaración de variables
let littleNumber: number = 5;
let admin: boolean = false;
let arrayNumber: Array<number> = [1, 2, 3, 4, 5];
let jugador: object = {
  name: "Leo Messi",
  nickName: "El mas malo de todos",
  goals: 0,
};
// condicionales
if (littleNumber == 5) {
  console.log("soy el 5");
} else if (littleNumber == 1) {
  console.log("soy el 1");
} else {
  console.log("soy otro numero");
}
switch (littleNumber) {
  case 1:
    console.log("soy el 1");
    break;
  case 5:
    console.log("soy el 5");
    break;
  default:
    console.log("soy otro numero");
    break;
}
// bucles
for (let i = 1; i <= 5; i++) {
  console.log("soy selena y estoy en la vuelta: " + i);
}
let nameStudentsUltra: Array<string> = [
  "Santiago",
  "Nelson",
  "Selena",
  "Esteban",
  "Felipe",
];
for (let index = 0; index < nameStudentsUltra.length; index++) {
  const element = nameStudentsUltra[index];
  console.log("estoy en un bucle y mi nombre es: " + element);
}
// un forEach es una función que me ayuda a hacer un bucle de una forma mas simplificada
nameStudentsUltra.forEach((element, posicion) => {
  console.log(posicion + ") estoy en un forEach y mi nombre es: " + element);
});

let arrayNumbers:Array<number>=[]
// Map en esta función recorre el array y  le concateno a cada elemento un  comentario
nameStudentsUltra = nameStudentsUltra.map((element) =>{
  return element+" Soy un estudiante"
})

console.log(nameStudentsUltra)
// En este caso Map si modifica el elemento cambiandolo por el numero de letras que hay en cada elemento del array
arrayNumbers = nameStudentsUltra.map(element=>{
  return element.length 
})
console.log(arrayNumbers)

let oneToTen:Array<number>=[1,2,3,4,5,6,7,8,9,10]
console.log(
  oneToTen.filter(element=>{
    return element % 2 == 0
  })
)
/* filter trae todas las coincidencias que encuentre declaradas en el return en este
  * caso el elemento son los numeros dentro del array de numeros del 1 al 10, solo va a
  * traer los impares en este caso porque eso fue lo que pedimos.
*/
console.log(
  oneToTen.filter(e=>{
    return e % 2 != 0
  })
)
// find tiene la misma sintaxis pero solo trae la primera coincidencia, filter trae todas.
console.log(
  oneToTen.find(e=>{
    return e% 2==0
  })
)
// primer ejercicio semana 4
function firstReverse(str: string): string {
  let arrayStr: Array<string> = str.split("");
  let result: Array<string> = [];
  const numeroquenovaacambiar = arrayStr.length; // (4)
  // 4    <    4
  for (let index = 0; index < numeroquenovaacambiar; index++) {
    const letra = arrayStr[arrayStr.length - 1];
    result.push(letra);
    arrayStr.pop();
  }
  return result.join("");
}

// No modificar, es solo para comprobar que el código funciona
[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverse(test[0]) == test[1] ? i + 1 + ") Funciono" : i + 1 + ") Fallo"
  );
});

