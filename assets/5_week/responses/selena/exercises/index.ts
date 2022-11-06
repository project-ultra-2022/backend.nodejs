import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

// DE AQUI PARA ABAJO CORREGIR LOS ERRORES
async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database running");
    app.listen(3000);
    console.log("API running");
  } catch (error) {
    console.log(error);
  }
}
main();


