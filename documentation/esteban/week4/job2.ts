function longestWordEsteban(sen: string): string {
  let word: Array<string> = sen.split(" ");
  let lengthWord: number = 0;
  let candidate: string = "";
  word.forEach((w) => {
    w = w.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
    if (w.length > lengthWord) {
      candidate = w;
      lengthWord = w.length;
    }
  });
  return candidate;
}
console.log(longestWordEsteban("time fun&!!aa"));
