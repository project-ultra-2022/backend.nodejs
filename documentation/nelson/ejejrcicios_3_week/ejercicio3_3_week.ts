/*
### Convertir las fechas en este formato: Día - Mes en letras año

### "1854/08/25" -> "25 - Agosto 1854"

### Ejemplo respuesta en array:

Array<string> = [
"15 - Febrero 2020",
"19 - Mayo 2022",
"18 - Diciembre 2022",
...
];

*/

let fechas: Array<string> = [
  "2020/02/15",
  "2022/05/19",
  "2022/12/18",
  "2000/12/15",
  "1980/04/05",
  "1965/02/15",
  "1854/08/25",
];

function cambioFotmatoFechas(arreglo: Array<string>) {
  let nuevoFormato: Array<string> = [];
  for (let i = 0; i <= arreglo.length - 1; i++) {
    let fecha = arreglo[i];
    if (fecha.length === 10) {
      if (fecha.search("/") === 4) {
        let year: string = fecha.slice(0, fecha.search("/"));
        let day: string = fecha.slice(-2);
        let month: string = fecha.slice(fecha.search("/") + 1, -3);
        if (month === "01") {
          month = "Enero";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "02") {
          month = "Febrero";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "03") {
          month = "Marzo";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "04") {
          month = "Abril";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "05") {
          month = "Mayo";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "06") {
          month = "Junio";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "07") {
          month = "Julio";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "08") {
          month = "Agosto";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "09") {
          month = "Septiembre";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "10") {
          month = "Octubre";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else if (month === "11") {
          month = "Noviembre";
          nuevoFormato.push(day + " - " + month + " " + year);
        } else {
          month = "Diciembre";
          nuevoFormato.push(day + " - " + month + " " + year);
        }
      }
    }
  }
  console.log(nuevoFormato);
}

cambioFotmatoFechas(fechas);
