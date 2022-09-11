function firstReverseEsteban(str: string): string {
  return str.split("").reverse().join("");
}
console.log(firstReverseEsteban("I Love Code"));

[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverseEsteban(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
