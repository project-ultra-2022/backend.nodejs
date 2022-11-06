# Nota Selena

Ejercicios 4/5
Quiz 1: 5/6
Quiz 2: 3/5

Total: 12/16
Valor punto: 0,625

Nota final: 7.5

# Lo que estuvo mal: 6

## constructor(data?: UserInterface) {

    this.data = data;
    this.data.expiresIn = process.env.AUTHENTICATION_EXPIRES_IN ?? "8";
    this.data.jwtSecretKey =
      process.env.AUTHENTICATION_JWT_SECRET_KEY ?? "secret";

}

## public getUserByEmail(email: string): any {

    return UserEntity.findOneBy({ email: email });

}

## Escribé 3 comandos GIT y expliqué cual es su funcionamiento

git

## Escribé 2 comandos NPM

npm -i

## Diferencias entre Public, Private y Protected

Public: es cuando una clase puede ser llamada ahí mismo
Private: es cuando se declara una clase que se va a usar mas adelante en el codigo
Protected: es cuando se usa una función asincrona

## ¿Qué es "implementar" una clase?

Es cuando se trae una clase de un codigo de otra carpeta u otro archivo
