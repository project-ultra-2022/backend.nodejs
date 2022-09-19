import express from "express"; // Se importa el servidor local Express
import TestRouter from "./routes/TestRouter";
import BlogRouter from "./routes/BlogRouter";
import PlayersRouter from "./routes/PlayerRouter";

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

new PlayersRouter(app);
new TestRouter(app);
new BlogRouter(app);

app.get("/ping", (_, res) => {
  res.send("ping");
});

// Asignamos un puerto para iniciar el servidor local
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server running");
});
