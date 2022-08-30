let result: number = 0;
function sumNum1(count: number, indice: number = 1): number {
  result = result + indice;
  if (count > indice) sumNum1(count, indice + 1);
  return result;
}

console.log(sumNum1(5));
