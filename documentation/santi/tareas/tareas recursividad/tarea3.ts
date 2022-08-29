let SumNumber: Array<number> = [];

function getNumbers(num: number) {
  SumNumber.push(num);
  if (SumNumber.length < num + SumNumber.length) getNumbers(num - 1);
  else {
    let sumatoria: number = SumNumber.reduce(
      (count: number, numeros: number) => count + numeros,
      0
    );
    console.log(SumNumber + " = " + sumatoria);
  }
}
getNumbers(10);
