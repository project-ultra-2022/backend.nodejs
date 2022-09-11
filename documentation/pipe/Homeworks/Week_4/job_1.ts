function firstReversePipe(P: string): string {
  console.log("");
  return P.split("").reverse().join("");
}

[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReversePipe(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
