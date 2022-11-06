import { NextFunction, Request, Response } from "express";
import Joi, { Schema } from "joi";
import { ApiResponse } from "../interfaces/types";
import ValidateHelper from "../helpers/ValidateHelper";

// DE AQUI PARA ABAJO CORREGIR LOS ERRORES
export default class ExerciseMiddleware {
  private registerValidation: Schema;
  private loginValidation: Schema;
  private response: ApiResponse<any[]> = {
    statusCode: 400,
    message: "The data provided is not correct",
  };
  private readonly REGEX_STRING: RegExp =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  private readonly REGEX_PASSWORD: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  private readonly REGEX_EMAIL: RegExp = /w/;

  constructor() {
    this.registerValidation = Joi.object()
      .keys({
        name: Joi.string()
          .required()
          .regex(this.REGEX_STRING)
          .label("The field 'name' is required and only allows letters"),
        email: Joi.string()
          .required()
          .regex(this.REGEX_EMAIL)
          .label("The field 'email' is required and only allows an email"),
        password: Joi.string()
          .required()
          .regex(this.REGEX_PASSWORD)
          .label(
            "The field 'password' is required, minimum 8 character, maximum 15 character, at least one capital letter, at least one lowercase letter, at least one digit, no blanks and at least 1 special character"
          ),
        admin: Joi.boolean().label(
          "The field 'admin' only allows True or False"
        ),
      })
      .required();

    this.loginValidation = Joi.object()
      .keys({
        email: Joi.string()
          .required()
          .regex(this.REGEX_EMAIL)
          .label("The field 'email' is required and only allows an email"),
        password: Joi.string()
          .required()
          .regex(this.REGEX_PASSWORD)
          .label(
            "The field 'password' is required, minimum 8 character, maximum 15 character, at least one capital letter, at least one lowercase letter, at least one digit, no blanks and at least 1 special character"
          ),
      })
      .required();
  }

  public register(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.registerValidation.validate(req.body, {
      abortEarly: false,
    });
    if (error != null) {
      this.response.data = ValidateHelper.validate(error);
      return res.status(this.response.statusCode).send(this.response);
    }
    return next();
  }

  public login(req: Request, res: Response, next: NextFunction): any {
    const { error } = this.loginValidation.validate(req.body, {
      abortEarly: false,
    });
    if (error != null) {
      this.response.data = ValidateHelper.validate(error);
      return res.status(this.response.statusCode).send(this.response);
    }
    return next();
  }
}
