# QUESTIONS (Programación orientada a objetos)

1. Diferencias entre Public, Private y Protected
2. ¿Qué es "extender" de una clase?
3. ¿Qué es "implementar" una clase?
4. ¿Qué es una interface?
5. Diferencia entre Request y Response de Express

Nota 3.5 / 5

# SOLUTION

Bien 2/3

1. Los tres son como una caracteristica que le podemos dar a las propiedades de una clase.
   -PUBLIC: La propiedad pública la podemos llamar desde cualquier archivo, solo desde que llamemos la clase, ya la obtendríamos.
   -PRIVATE: para poder llamar e implementar en otro archivo una propiedad private, debemos nombrarla específicamente en el IMPORT.
   -PROTECTED: las propiedades protected solo las podemos llamar mediante el llamado de métodos de esa mísma clase.

bien 2. El extends se utiliza cuando una clase hija depende de una clase padre. Por ejemplo: podríamos decir que la clase hija, Perro extiende de la clase padre, Animal.

mal 3. Cuando dentro de una clase padre (Animal) IMPLEMENTAMOS una clase hija (Perro)

bien 4. Una interfaz la utilizamos en nuestro Responses. Para que los Responses tengan una estructura con sus respectivos tipos, y no tengamos problemas más adelante.

bien 5. El Request es lo que recibe el API por parte del usuario y HTTP. El Response es lo que entrega el API.
