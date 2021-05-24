import { Request, Response } from "express";

export class AuthController {
  public authGitHub(req: Request, res: Response) {
    res.send("it works");
  }
  public authGitHubMe(req: Request, res: Response) {}
}
