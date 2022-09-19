import { Request, Response } from "express";
import PlayerBusiness from "../business/PlayerBusiness";
import PlayerOutput from "../outputObjects/PlayerOutput";
import { ApiResponse } from "../types";

export default class PlayerController {
  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const response: ApiResponse<PlayerOutput> = {
      statusCode: 200,
      message: "Request Successful",
    };
    try {
      response.data = await new PlayerBusiness(req.body).create();
    } catch (error: any) {
      response.statusCode = 500;
      response.message = error;
    }
    return res.status(response.statusCode).send(response);
  }
}