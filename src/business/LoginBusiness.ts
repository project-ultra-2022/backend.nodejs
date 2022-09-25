import LoginInput from "../inputObjects/LoginInput";
import LoginOutput from "../outputObjects/LoginOutput";

export default class LoginBusiness {
  private readonly data: LoginInput;

  constructor(data: LoginInput) {
    this.data = data;
  }
  public async create(): Promise<LoginOutput> {
    let res: LoginOutput = {
      message: "Ingreso Fallido",
    };

    if (this.data.userName == "nelson" && this.data.password == "123") {
      res.message = "Ingreso Exitoso";
    }

    return res;
  }
}
