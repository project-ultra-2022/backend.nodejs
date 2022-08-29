import { Request, Response } from "express";
import GeneralResponse from "../helpers/GeneralResponse";
import TestOutput from "../outputObjets/TestOutput";
import TestBusiness from "../business/TestBusiness";

export default class TestController {
  public async create(req: Request, res: Response) {
    let code: number = 200;
    let response: GeneralResponse<TestOutput> = new GeneralResponse<TestOutput>();

    try {
      response.setData(await new TestBusiness(req.body).create());
      response.setMessage("Query accountCreate is succesfully");
    } catch (error) {
      code = error.statusCode || 500;
      response.setMessage(error.message);
    }
    return res.status(code).send(response);
  }
}
