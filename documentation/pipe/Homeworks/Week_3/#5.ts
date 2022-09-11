let frase: string = "Santiago es muy juicioso".toLowerCase();
let letra: string = "s";
let contador: number = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i].includes(letra)) {
    contador += 1;
  }
}
console.log(
  "Veces en las que se repite la letra",
  letra,
  "en la frase /",
  frase,
  " = ",
  contador
);
