import { auth as AuthRoute } from "../routes/AuthRoute";
import { logger } from "../config/Logger";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Consola } from "consola";

export class Server {
  public version: string = "1.0";
  public app: express.Application;
  public logger: Consola = logger;

  public constructor() {
    this.app = express();

    this.setConfig();
    this.setRequestLogger();
    this.setRoutes();
  }

  public start() {
    this.setConfig();
    this.setRequestLogger();
    this.setRoutes();

    this.app.listen(process.env.MAILWIND_API_PORT, () => {
      this.logger.success(
        `Mailwind API version ${this.version} started on port ${process.env.MAILWIND_API_PORT}`
      );
    });
  }

  private setConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    dotenv.config();
  }

  private setRequestLogger() {
    this.app.use(async (req: Request, res: Response, next: NextFunction) => {
      this.logger.info(`[${req.method} - ${req.path}]`);

      next();
    });
  }

  private setRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res
        .status(200)
        .json({
          success: true,
          message: `Mailwind API version ${this.version}`,
        });
    });

    this.app.use("/api/v1", AuthRoute);
  }
}
