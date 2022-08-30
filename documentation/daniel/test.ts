console.log("Archivo de Daniel Valencia");

function recursiveLoop(end: number): boolean {
  console.log("Entre ", end);
  if (end < 100) recursiveLoop(end + 1);
  return true;
}

// recursiveLoop(1);

let fibonacciArray: Array<number> = [];
//                  5             3             5
function fibonacci(stop: number, num1: number, num2: number): Array<number> {
  fibonacciArray.push(num1 + num2); // [1,2,3,5,8]
  //          5   <   5
  if (fibonacciArray.length < stop) fibonacci(stop, num2, num1 + num2);
  return fibonacciArray;
}

// console.log(fibonacci(52, 0, 1));

function findCousinNumber(num: number, indice: number = 2): boolean {
  if (num % indice == 0 && num != indice) return false;
  if (num != indice) return findCousinNumber(num, indice + 1);
  return true;
}

// console.log(findCousinNumber(11) ? "Si es primo" : "No es primo");

let cousinNumbers: Array<number> = [];

function getCousinNumbers(amount: number, myNumber: number = 1): Array<number> {
  const num: number = myNumber + 1;
  //                    11
  if (findCousinNumber(num)) cousinNumbers.push(num); // [2,3,5,7,11]
  //    10    >   10   NO                                 10    11
  if (amount > cousinNumbers.length) getCousinNumbers(amount, num);
  return cousinNumbers;
}

// console.log(getCousinNumbers(100));

/*
2	3	5	7	11	13	17	19
23	29	31	37	41	43	47	53
59	61	67	71	73	79	83	89
97	101	103	107	109	113	127	131
137	139	149	151	157	163	167	173
179	181	191	193	197	199	211	223
227	229	233	239	241	251	257	263
269	271	277	281	283	297	307	311
313	317	331	337	347	349	353	359
367	373	379	383	389	397	401	409
419	421	431	433	439	443	439	457
461	463	467	479	487	491	499	503
509	521	523	541	547	557	563	569
571	577	587	593	599	601	607	613
617	619	531	641	643	647	656	659
661	679	677	683	691	701	709	719
727	733	739	743	751	757	761	769
773	787	797	809	811	821	823	827
829	839	853	857	859	863	877	881
883	887	907	911	919	929	937	941
947	953	967	971	977	983	991	997
*/

// rangoHasta(n) -> Lista de números: dado un número "n", retorna la lista de números desde el 0 hasta el N incluído. Por ejemplo: rangoHasta(7) -> [0,1,2,3,4,5,6,7]

let newArrayDeleteElements: Array<number> = [];
function deleteElements(
  elements: Array<number>,
  index: number,
  count: number = 0
): Array<number> {
  if (elements[count] != index) newArrayDeleteElements.push(elements[count]);
  if (elements.length - 1 > count) deleteElements(elements, index, count + 1);
  return newArrayDeleteElements;
}

//console.log(deleteElements([1, 2, 3, 1, 6, 7, 1, 9, 1], 1)); // [ 2, 3, 6, 7, 9 ]
//console.log(deleteElements([1, 2, 3, 4, 5], 1)); // [2,3,4,5]
//console.log(deleteElements([1, 2, 3, 4, 5], 3)); // [1,2,4,5]
//console.log(deleteElements([1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 3)); // [1,2,4,5,5,4,2,1]

let newArraySort: Array<number> = [];

function sortElements(
  elements: Array<number>,
  index1: number = 0,
  index2: number = index1 + 1
): Array<number> {
  if (elements[index1] < elements[index2]) {
    newArraySort.push(elements[index1]);
    sortElements(elements, index + 1);
  } else {
    newArraySort[index + 1];
  }

  return newArraySort;
}

console.log(sortElements([3, 6, -1])); // [-1,3,6]
console.log(sortElements([2, 6, 1, 7])); // [1,2,6,7]
console.log(sortElements([2, -1, 6, 1, 7, -5])); // [-5,-1,1,2,6,7]
