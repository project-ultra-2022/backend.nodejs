import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import { ApiResponse } from "../types";

export default class BlogMiddleware {
  private readonly schema: Schema;
  private readonly REGEX_STRING: RegExp =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  constructor() {
    this.schema = Joi.object()
      .keys({
        nameStudent: Joi.string()
          .required()
          .regex(this.REGEX_STRING)
          .label("The field 'nameStudent' is required and only allows letters"),
        tutorial: Joi.object()
          .keys({
            schedule: Joi.string()
              .required()
              .label("The field 'schedule' is required"),
            teacher: Joi.string()
              .required()
              .regex(this.REGEX_STRING)
              .label("The field 'teacher' is required"),
            subject: Joi.string()
              .required()
              .label("The field 'subject' is required"),
          })
          .required()
          .label("The field 'tutorial' is required and is an object"),
        description: Joi.string()
          .required()
          .label("The field 'nameStudent' is required and only allows letters"),
        score: Joi.number()
          .required()
          .min(1)
          .max(5)
          .label(
            "The field 'score' is required,between 1 to 5 and only allows numbers"
          ),
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
