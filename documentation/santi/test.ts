function firstReverse(str: string): string {
  if (str) return "";
}

[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverse(test[0]) == test[1] ? i + 1 + ") Funciono" : i + 1 + ") Fallo"
  );
});
