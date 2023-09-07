import crypto from "bcrypt";
import { ICodeChallenge } from "./verifier";

export class S256Verifier implements ICodeChallenge {
  public readonly method = "S256";

  verifyCodeChallenge(codeVerifier: string, codeChallenge: string): boolean {
    return crypto.compareSync(codeVerifier,codeChallenge);
  }
}
