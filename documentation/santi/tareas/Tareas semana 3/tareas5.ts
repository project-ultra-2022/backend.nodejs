let Frase: string = "Daniel es programador";
let contador: number = 0;
let letra: string = "a";

for (let i = 0; i <= Frase.length - 1; i++) {
  if (Frase[i].includes(letra)) {
    contador += 1;
  }
}
console.log("Numero de veces " + contador);
