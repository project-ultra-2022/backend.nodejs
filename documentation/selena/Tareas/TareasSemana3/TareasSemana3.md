## Ejercicios - Semana 3
## Quitar el indicativo de los teléfonos que lo tengan, devolver un array con todos los números corregidos......
let phonesSelena: Array<string> = [
  "+57-7333333",
  "3108719976",
  "+52-7123789",
  "+1-3108714564",
  "3507192591",
  "+57-3777777",
];
let newPhonesSelena: Array<string> = [];

phonesSelena.forEach((element) => {
  newPhonesSelena.push(
    element.includes("-") ? element.slice(element.search("-") + 1) : element
  );
});

console.log(newPhonesSelena);
## Convertir las vocales en mayúscula, devolver array con todos los nombres corregidos....................
let StudentsSelena: Array<string> = [
  "Santiago",
  "Pipe",
  "Esteban",
  "Selena",
  "Nelson",
  "Daniel",
];
let newStudentsSelena: Array<string> = [];

StudentsSelena.forEach((element) => {
  element.split("").forEach((letra) => {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      element = element.replace(letra, letra.toUpperCase());
    }
  });
  newStudentsSelena.push(element);
});

console.log(newStudentsSelena);

### Convertir las fechas en este formato: Día - Mes en letras año.....................................
//### "1854/08/25" -> "25 - Agosto 1854"
let FechasSelena: Array<string> = [
  "2020/02/15",
  "2022/05/19",
  "2022/12/18",
  "2000/12/15",
  "1980/04/05",
  "1965/02/15",
  "1854/08/25",
];
let newFechasSelena: Array<string> = [];
let nombresDeMeses: Array<string> = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
FechasSelena.forEach((element) => {
  let year: string = element.slice(0, 4);
  let mounth: any = element.slice(5, 7);
  let day: string = element.slice(8, 10);
  let fechaCompleta =
    day + "-" + nombresDeMeses[Math.abs(mounth) - 1] + " " + year;
  newFechasSelena.push(fechaCompleta);
});
console.log(newFechasSelena);
### Ejemplo de pirámide de 5 pisos con numeros primos ..............................................
function pyramid(numPisosSelena: any) {
  let noparar = true;
  let primos: any = [];
  for (let j = 2; noparar; j++) {
    try {
      for (let i = 2; i < j; i++) {
        if (j % i === 0) throw false;
      }
      primos.push(j);
      if (primos.length == numPisosSelena) noparar = false;
    } catch (e) {}
  }

  for (let i = 1; i <= numPisosSelena; i++) {
    let result=" "
    for (let j = 0; j < i; j++) {
        result += primos[i-1]+ " "
    }
    console.log(result)
  }
}

pyramid(7);
# 5. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por pantalla el número de veces que aparece la letra en la frase
let palabra: string = "Daniel es programador";
let result: Array<string> = palabra.split("").filter((letra) => {
  return letra == "a";
});
console.log(result.length);