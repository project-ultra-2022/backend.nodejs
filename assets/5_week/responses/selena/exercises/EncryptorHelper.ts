import Cryptr from "cryptr";
const cryptr = new Cryptr(
  process.env.AUTHENTICATION_ENCRYPTOR_SECRET_KEY ?? "secret"
);
// DE AQUI PARA ABAJO CORREGIR LOS ERRORES
export default class EncryptorHelper {
  public static encrypt(param: string): string {
    return cryptr.encrypt(param);
  }
  public static decrypt(param: string): string {
    return cryptr.decrypt(param);
  }
}
