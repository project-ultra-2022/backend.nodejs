console.log("Archivo de Daniel Valencia");

function recursiveLoop(end: number): boolean {
  console.log("Entre ", end);
  if (end >= 1) recursiveLoop(end - 1);
  return true;
}

// recursiveLoop(100)

let fibonacciArray: Array<number> = [];

function fibonacci(stop: number, num1: number, num2: number): Array<number> {
  fibonacciArray.push(num1 + num2);
  if (fibonacciArray.length < stop) fibonacci(stop, num2, num1 + num2);
  return fibonacciArray;
}

// console.log(fibonacci(10, 0, 1))

function findCousinNumber(num: number, stop: number = 2): boolean {
  if (num % stop == 0 && num != stop) return false
  if (num != stop) return findCousinNumber(num, stop + 1);
  return true
}

// console.log(findCousinNumber(9) ? "Si es primo" : "No es primo");

let cousinNumbers: Array<number> = []

function getCousinNumbers(amount: number, myNumber: number = 1): Array<number> {
  const num: number = myNumber + 1
  if(findCousinNumber(num)) cousinNumbers.push(num)
  if(amount > cousinNumbers.length) getCousinNumbers(amount, num)
  return cousinNumbers
}

 console.log(getCousinNumbers(100));

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


