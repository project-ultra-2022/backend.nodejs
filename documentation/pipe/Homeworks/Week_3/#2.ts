let Estudiantes: Array<string> = [
  "Santiago",
  "Pipe",
  "Esteban",
  "Selena",
  "Nelson",
  "Daniel",
];

console.log(
  students.map((s) => {
    s.split("").forEach((e, i) => {
      if (["a", "e", "i", "o", "u"].find((v) => v == e)) {
        s = s.replace(s[i], s[i].toUpperCase());
      }
    });
    return s;
  })
);
