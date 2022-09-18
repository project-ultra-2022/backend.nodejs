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
## interface
## ? esa variable es opcional