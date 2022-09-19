import { Application } from "express-serve-static-core"
import PlayerController from "../controllers/PlayerController"
import PlayerMiddleware from "../middlewares/PlayerMiddleware"

export default class PlayerRouter{
    private readonly endPoint: string
    private readonly controller: PlayerController
    private readonly middleware: PlayerMiddleware

    constructor(app: Application){
        this.endPoint="/player"
        this.middleware= new PlayerMiddleware
        this.controller= new PlayerController
        
        app
        .route(this.endPoint)
        .post(this.middleware.validate.bind(this.middleware))
        .post(this.controller.create.bind(this.controller));
  }
}