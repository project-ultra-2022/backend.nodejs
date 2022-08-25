* Temas de hoy

-Peticiones
-callback 
-recursividad

# Diagramas para solucionar problemas
los datos que vamos a recibir o tenemos.
El proceso con sus validaciones.
lo que mostrara 

# callback
pasar a una función como parametro de otra función
## ejemplo
function sum(a:number,b:number) {
    return a+b
}
console.log(sum (sum(5,8),sum(3,4)))