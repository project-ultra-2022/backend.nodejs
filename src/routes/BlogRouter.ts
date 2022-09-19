import { Application } from "express-serve-static-core"
import BlogController from "../controllers/BlogController"
import BlogMiddleware from "../middlewares/BlogMiddleware"

export default class BlogRouter{
    private readonly endPoint: string
    private readonly controller: BlogController
    private readonly middleware: BlogMiddleware

    constructor(app: Application){
        this.endPoint="/blog"
        this.middleware= new BlogMiddleware
        this.controller= new BlogController
        
        app
        .route(this.endPoint)
        .post(this.middleware.validate.bind(this.middleware))
        .post(this.controller.create.bind(this.controller));
  }
}
