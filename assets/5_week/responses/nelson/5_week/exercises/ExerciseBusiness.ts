import { UserEntity } from "../entities/UserEntity";
import UserInterface from "../interfaces/UserInterface";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import EncryptorHelper from "../helpers/EncryptorHelper";
import { AuthenticatorEntity } from "../entities/AuthenticatorEntity";
import { MoreThanOrEqual } from "typeorm";
import moment from "moment";

// DE AQUI PARA ABAJO CORREGIR LOS ERRORES
export default class ExerciseBusiness {
  private readonly data: UserInterface | any;
  private readonly expiresIn: any;
  private readonly jwtSecretKey: any;

  constructor(data?: UserInterface) {
    this.data = data;
    this.expiresIn = process.env.AUTHENTICATION_EXPIRES_IN ?? "8";
    this.jwtSecretKey = process.env.AUTHENTICATION_JWT_SECRET_KEY ?? "secret";
  }

  public async register(): Promise<any> {
    if (await this.getUserByEmail(this.data.email))
      throw [400, "Repeated Email"];
    let model = new UserEntity();
    model.name = this.data.name;
    model.email = this.data.email;
    model.password = bcrypt.hashSync(this.data.password, 13);
    model.admin = this.data.admin ?? false;
    return await model.save();
  }

  public async login(): Promise<any> {
    const model = await this.getUserByEmail(this.data.email);
    if (!model) throw [400, "User does not exists"];

    if (!bcrypt.compareSync(this.data.password, model.password))
      throw [400, "Password incorrect"];

    const getAuthenticator = await AuthenticatorEntity.findOneBy({
      key: model.id.toString(),
      created_at: MoreThanOrEqual(
        moment().subtract(parseInt(this.expiresIn), "hours").toDate()
      ),
    });
    if (getAuthenticator) throw [400, "The user is already logged in"];

    let payload: any = {
      name: model.name,
      admin: model.admin,
    };
    let modelAuthenticator = new AuthenticatorEntity();
    modelAuthenticator.key = model.id;
    modelAuthenticator.payload = JSON.stringify(payload);
    await modelAuthenticator.save();

    payload.token = this.createToken(
      EncryptorHelper.encrypt(model.id.toString())
    );
    return payload;
  }

  public async logout(user: any): Promise<any> {
    if (!user) throw false;
    const model = await AuthenticatorEntity.delete({ key: user.id });
    if (!model.affected || model.affected <= 0) throw false;
    return true;
  }

  public async getUserByEmail(email: string): Promise<any> {
    return await UserEntity.findOneBy({ email: email });
  }

  public createToken(key: string): string {
    return jwt.sign({ key: key }, this.jwtSecretKey, {
      expiresIn: `${this.expiresIn}h`,
    });
  }
}
