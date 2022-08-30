import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import { ApiResponse } from "../types";

export default class TestMiddleware {
  private readonly schema: Schema;

  constructor() {
    this.schema = Joi.object()
      .keys({
        name: Joi.string().required().label("The 'name' field is required"),
        lastname: Joi.string()
          .required()
          .label("The 'lastname' field is required"),
        age: Joi.number().required().label("The 'age' field is required"),
      })
      .required();
  }

  public validate(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.schema.validate(req.body, { abortEarly: false });

    if (error != null) {
      const errors: any[] = [];
      error.details.forEach((detail: any) => errors.push(detail.context.label));
      for (let i = errors.length - 1; i >= 0; i--) {
        if (errors.indexOf(errors[i]) !== i) errors.splice(i, 1);
      }
      const response: ApiResponse<any[]> = {
        statusCode: 400,
        message: "Incorrect Formulary",
        data: errors,
      };
      return res.status(response.statusCode).send(response);
    }
    return next();
  }
}
