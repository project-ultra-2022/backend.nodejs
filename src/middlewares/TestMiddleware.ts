import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import GeneralResponse from "../helpers/GeneralResponse";

export default class TestMiddleware {
  private schema: Schema;

  constructor() {
    this.schema = Joi.object()
      .keys({
        name: Joi.string().required(),
      })
      .required();
  }

  public validate(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors: any[] = [];
      error.details.forEach((detail: any) => errors.push(detail.context.label));
      for (var i = errors.length - 1; i >= 0; i--) {
        if (errors.indexOf(errors[i]) !== i) errors.splice(i, 1);
      }
      return GeneralResponse.errorNotification(
        res,
        500,
        errors
      );
    }
    return next();
  }
}