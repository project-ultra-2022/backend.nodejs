let lista: Array<number> = [];

function suma(num: number) {
  lista.push(num);
  if (lista.length < num + lista.length) suma(num - 1);
  else {
    let total: number = lista.reduce((contador, item) => contador + item, 0);
    console.log(lista, " la suma del arreglo es: ", total);
  }
}

suma(10);
