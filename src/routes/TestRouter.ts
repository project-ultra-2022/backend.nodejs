import { Application } from 'express'
import TestController from '../controllers/TestController'
import TestMiddleware from '../middlewares/TestMiddleware'

export default class TestRouter {
  private readonly endPoint: string
  private readonly middleware: TestMiddleware
  private readonly controller: TestController

  constructor (app: Application) {
    this.endPoint = '/hello-world'
    this.middleware = new TestMiddleware()
    this.controller = new TestController()
    app
      .route(this.endPoint)
      .post(this.middleware.validate.bind(this.middleware))
      .post(this.controller.create.bind(this.controller))
  }
}
