## Ejercicios Semana 3

1. Dado el siguiente array

let Telefonos: Array<string> = [
'+57-7333333',
'3108719976',
'+52-7123789',
'+1-3108714564',
'3507192591',
'+57-3777777'
];

### Quitar el indicativo de los teléfonos que lo tengan, devolver un array con todos los números corregidos

### Respuesta final:

Array<string> = [
"7333333",
"3108719976",
"7123789",
"3108714564",
"3507192591",
"3777777",
];

2. Dado el siguiente array

let Estudiantes: Array<string> = [
"Santiago",
"Pipe",
"Esteban",
"Selena",
"Nelson",
"Daniel"
];

### Convertir las vocales en mayúscula, devolver array con todos los nombres corregidos

### Respuesta final:

Array<string> = [
"sAntIAgO",
"pIpE",
"EstEbAn",
"sElEnA",
"nElsOn",
"dAnIEl",
];

3. Dado el siguiente array

let Fechas: Array<string> = [
"2020/02/15",
"2022/05/19",
"2022/12/18",
"2000/12/15",
"1980/04/05",
"1965/02/15",
"1854/08/25"
];

### Convertir las fechas en este formato Día - Mes en letras - año

### "1854/08/25" -> "25 - Agosto 1854"

### Ejemplo respuesta en array:

Array<string> = [
"15 - Febrero 2020",
"19 - Mayo 2022",
"18 - Diciembre 2022",
...
];

4. Dado un número de pisos

piramideNumerosPrimos(5)

### Realizar una pirámide de lado con los números primos

### Ejemplo de pirámide de 5 pisos

2
3 3
5 5 5
7 7 7 7
11 11 11 11 11

5. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por pantalla el número de veces que aparece la letra en la frase

## Ejemplos:

- cantidadLetrasEnFrase("Daniel es programador","a") -> 2
- cantidadLetrasEnFrase("Nelson es muy dedicado","d") -> 2
- cantidadLetrasEnFrase("Santiago es muy juicioso","o") -> 3
- cantidadLetrasEnFrase("Arctic Monkeys","s") -> 1
