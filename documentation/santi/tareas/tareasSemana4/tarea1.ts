function reverseWord(str: string): string {
  return str.split("").reverse().join("");
}

[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    reverseWord(test[0]) == test[1] ? i + 1 + ") Funciono" : i + 1 + ") Fallo"
  );
});
