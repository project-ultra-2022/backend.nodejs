let Students: Array<string> = [
  "Santiago",
  "Pipe",
  "Esteban",
  "Selena",
  "Nelson",
  "Daniel",
];
let newStudents: Array<string> = [];

Students.forEach((element) => {
  element.split("").forEach((letra) => {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      element = element.replace(letra, letra.toUpperCase());
    }
  });
  newStudents.push(element);
});

console.log(newStudents);
