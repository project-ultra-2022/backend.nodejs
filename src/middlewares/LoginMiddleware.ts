import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import { ApiResponse } from "../types";

export default class LoginMiddleware {
  private readonly schema: Schema;

  constructor() {
    this.schema = Joi.object()
      .keys({
        userName: Joi.string()
          .required()
          .label("the field 'UserName' is required and only allow letters"),

        password: Joi.string()
          .required()
          .label("The field 'password' is required"),
      })
      .required();
  }

  public validate(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.schema.validate(req.body, { abortEarly: false });
    if (error != null) {
      const errorsValidation: any[] = [];
      error.details.forEach((detail: any) =>
        errorsValidation.push(detail.context.label)
      );
      for (let i = errorsValidation.length - 1; i >= 0; i--) {
        if (errorsValidation.indexOf(errorsValidation[i]) !== i)
          errorsValidation.splice(i, 1);
      }
      const response: ApiResponse<any[]> = {
        statusCode: 400,
        message: "Incorrect Formulary",
        data: errorsValidation,
      };
      return res.status(response.statusCode).send(response);
    }
    return next();
  }
}
