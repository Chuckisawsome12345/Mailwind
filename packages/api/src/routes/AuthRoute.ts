import { AuthController } from "../controllers/AuthController";
import { Router } from "express";

export const auth = Router();
const controller = new AuthController();

auth.get("/auth/github", controller.authGitHub);
auth.get("/auth/github/me", controller.authGitHubMe);
