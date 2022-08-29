import { Application } from "express";
import TestController from "../controllers/TestController";
import TestMiddleware from "../middlewares/TestMiddleware";

export default class TestRouter {
  private endPoint: string;
  private middleware: TestMiddleware;
  private controller: TestController;

  constructor(app: Application) {
    this.endPoint = `/hello-world`;
    this.middleware = new TestMiddleware();
    this.controller = new TestController();
    app
      .route(this.endPoint)
      .post(this.middleware.validate.bind(this.middleware))
      .post(this.controller.create.bind(this.controller));
  }
}
