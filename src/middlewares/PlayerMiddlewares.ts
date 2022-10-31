import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import { ApiResponse } from "../types";

export default class PlayerMiddleware {
  private readonly schema: Schema;
  private readonly REGEX_STRING: RegExp =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  constructor() {
    this.schema = Joi.object()
      .keys({
        playerName: Joi.string()
          .required()
          .regex(this.REGEX_STRING)
          .label("the field 'playerName' is required and only allow letters"),
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
