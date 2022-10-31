import { Request, Response } from "express";
import LoginBusiness from "../business/LoginBusiness";
import LoginOutput from "../outputObjects/LoginOutput";

import { ApiResponse } from "../types";

export default class LoginController {
  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const response: ApiResponse<LoginOutput> = {
      statusCode: 200,
      message: "Request Successful",
    };
    try {
      response.data = await new LoginBusiness(req.body).create();
    } catch (error: any) {
      response.statusCode = 500;
      response.message = error;
    }
    return res.status(response.statusCode).send(response);
  }
}
