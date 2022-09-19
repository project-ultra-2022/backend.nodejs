import { Request, Response } from "express";
import BlogBusiness from "../business/BlogBusiness";
import BlogOutput from "../outputObjects/BlogOutput";
import { ApiResponse } from "../types";

export default class BlogController {
  public async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const response: ApiResponse<BlogOutput> = {
      statusCode: 200,
      message: "Request Successful",
    };
    try {
      response.data = await new BlogBusiness(req.body).create();
    } catch (error: any) {
      response.statusCode = 500;
      response.message = error;
    }
    return res.status(response.statusCode).send(response);
  }
}
