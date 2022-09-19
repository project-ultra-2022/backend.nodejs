<<<<<<< HEAD
import { Application } from "express-serve-static-core";
=======
import { Application } from "express";
>>>>>>> 7f82bfa1503f746c1c10c0e9ab711db47e51ce60
import BlogController from "../controllers/BlogController";
import BlogMiddleware from "../middlewares/BlogMiddleware";

export default class BlogRouter {
  private readonly endPoint: string;
  private readonly middleware: BlogMiddleware;
  private readonly controller: BlogController;

  constructor(app: Application) {
    this.endPoint = "/blog";
    this.middleware = new BlogMiddleware();
    this.controller = new BlogController();

    app
      .route(this.endPoint)
      .post(this.middleware.validate.bind(this.middleware))
      .post(this.controller.create.bind(this.controller));
  }
}
