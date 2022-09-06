## Tareas

1. rangoHasta(n) -> Lista de números: dado un número "n", retorna la lista de números desde el 0 hasta el N incluído. Por ejemplo: rangoHasta(7) -> [0,1,2,3,4,5,6,7].

2. rango(desde, hasta) -> lista de números: similar a rango, pero ahora se puede especificar el "desde". Ej: rango(5, 10) -> [5,6,7,8,9,10]. No hace falta validar que desde sea menor a hasta o tener rangos decrecientes.

3. sumaHasta(n) -> numero. Retorna la suma de los numeros desde el 0 hasta el N. Por ejemplo.
   Ejemplos:
   sumaHasta(2) 1 + 2 = 3
   sumaHasta(3) 1 + 2 + 3 = 6
   sumaHasta(5) = 5 + 4 + 3 + 2 + 1 + 0 => 15
   sumaHasta(10) 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

4. removerTodos(lista, elemento): -> lista, Dada una lista y un elemento, retorna otra lista igual a la original, pero sin el "elemento" dado. En caso en que el elemento aparezca múltiples veces, lo remueve de todas.
   Ejemplo:
   remover([1,2,3,1,6,7,1,9,1], 1) -> [2,3,6,7,9]
   remover([1,2,3,4,5], 1) -> [2,3,4,5]
   remover([1,2,3,4,5], 3) -> [1,2,4,5]
   remover([1,2,3,4,5,5,4,3,2,1], 3) -> [1,2,4,5,5,4,2,1]

5. ordenar(numeros): Realizar una función que dada una lista de números retorne otra lista con los mismos números pero ordenados de menor a mayor. Pista: en una lista ordenada siempre se da que un elemento en la posición x es el mínimo de la sublista que sigue.
   Ejemplos:
   ordenar([3,6,-1]) -> [-1,3,6]
   ordenar([2,6,1,7]) -> [1,2,6,7]
   ordenar([2,-1,6,1,7,-5]) -> [-5,-1,1,2,6,7]

5. (OPCIONAL) Ver el siguiente material:
   https://www.youtube.com/watch?v=ZpY5KdGQvwI&t=3755s

## Nota: Por favor ejecutar los siguientes comandos antes de venir a clase

```sh
rm -rf node_modules
```

```sh
git pull origin main
```

```sh
npm install
```

## Instalar las siguientes extensiones

1. ESLint
2. Git History Diff
3. Peacock
4. Polacode
5. Prettier - Code formatter
6. Thunder Client
7. Trailing Spaces
