import { AuthHelper } from "../helpers/AuthHelper";
import { Request, Response } from "express";
import lodash from "lodash";

const helper = new AuthHelper();
export class AuthController {
  public async authGitHub(req: Request, res: Response) {
    const code = lodash.get(req, "query.code");
    const path = lodash.get(req, "query.path", "/");

    code ? code : new Error("no code provided");
    path ? path : new Error("No path provided");
  }

  public authGitHubMe(req: Request, res: Response) {}
}
