import { Application } from "express";
import BlogController from "../controllers/BlogController";
import BlogMiddleware from "../middlewares/BlogMiddlewares";

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
