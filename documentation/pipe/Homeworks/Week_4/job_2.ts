function longestWordPipe(P: string): string {
  let spaces = P.split(" ");
  let largeWord = "";
  let caracteres: RegExp = /[^\x20\x2D0-9A-z\x5Fa-z]/g;
  for (let space of spaces) {
    if (space.length > largeWord.length) {
      largeWord = space.replace(caracteres, "");
    }
  }
  return largeWord;
}

[
  ["fun&!! time", "time"],
  ["I love dogs", "love"],
].forEach((test, i) => {
  console.log(
    longestWordPipe(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
