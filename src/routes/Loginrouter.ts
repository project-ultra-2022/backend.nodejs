import { Application } from "express";
import LoginController from "../controllers/LoginController";
import LoginMiddleware from "../middlewares/LoginMiddleware";

export default class LoginRouter {
  private readonly endPoint: string;
  private readonly middleware: LoginMiddleware;
  private readonly controller: LoginController;

  constructor(app: Application) {
    this.endPoint = "/login";
    this.middleware = new LoginMiddleware();
    this.controller = new LoginController();

    app
      .route(this.endPoint)
      .post(this.middleware.validate.bind(this.middleware))
      .post(this.controller.create.bind(this.controller));
  }
}
