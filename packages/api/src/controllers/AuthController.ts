import { AuthHelper } from "../helpers/AuthHelper";
import { Request, Response } from "express";

const helper = new AuthHelper();
export class AuthController {
  public async authGitHub(req: Request, res: Response) {
    res.send("works");
  }

  public authGitHubMe(req: Request, res: Response) {}
}
