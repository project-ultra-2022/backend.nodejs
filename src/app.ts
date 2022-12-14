import express from "express"; // Se importa el servidor local Express
import TestRouter from "./routes/TestRouter";
import BlogRouter from "./routes/BlogRouter";
import PlayerRouter from "./routes/PlayerRouter";
import LoginRouter from "./routes/Loginrouter";

const app = express();

// Se declara que es un API el cual permite todos los verbos HTTP
app.use((_req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json()); // Middleware que transforma el req.body en json

new PlayerRouter(app);
new TestRouter(app);
new BlogRouter(app);
new LoginRouter(app);

app.get("/whatismyname", (_req, res) => {
  let myName = "Daniel Valencia";
  res.send(myName);
});

app.get("/mySum", (_req, res) => {
  //req.query
  let response: any = "Hola mundo";
  res.send("La respuesta: " + response);
});

// Asignamos un puerto para iniciar el servidor local
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server running " + PORT);
});
