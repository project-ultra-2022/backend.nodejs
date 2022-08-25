import { Request, Response } from "express";
import TestOutput from "../outputObjets/TestOutput";
import TestBusiness from "../business/TestBusiness";
import { ApiResponse } from "../types";

export default class TestController {
  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const response: ApiResponse<TestOutput> = {
      statusCode: 200,
      message: "Request successful",
    };
    try {
      response.data = await new TestBusiness(req.body).create();
    } catch (error: any) {
      response.statusCode = 500;
      response.message = error;
    }
    return res.status(response.statusCode).send(response);
  }
}
