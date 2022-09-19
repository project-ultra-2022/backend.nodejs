requerimiento:pueden ser llamadas como _req, _, req. Lo que recibimos
res:Lo que devolvemos
rest.send(lo que se devuelve)
app es lo mismo que api

## Todo esto es un servicio
new testRouter(app)// es un servicio
app.get("/whatismyname",(req,res)=>{
    let myName= "Selena Merchan"
    res.send(myName)
});
##  Export
se usa para que sea visible en todo el proyecto lo que queremos
## export default 
es que se puede exportar a otros archivos
## interface
## ? esa variable es opcional
1. crear una ruta que se llame blockrouter.ts
2. crear un out put
3. crear un input
## JOI
revisa que el parametro que se le pasa sea el que se le pide
Ejemplo: 
nameStudent:
Joi.string()-->busca que el nameStudent sea de tipo string
## label 
es la descripcion de un campo en caso de que falle uno de los requerimientos