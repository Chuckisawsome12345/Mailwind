import { logger } from "../logger/Logger";
import { Config } from "../../Config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { Consola } from "consola";

export class Server {
  public PORT = Config.JAIT_API_PORT;
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

    this.app.listen(this.PORT, () => {
      this.logger.success(
        `Jait API version ${this.version} started on port ${this.PORT}`
      );
    });
  }

  private setConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
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
        .json({ success: true, message: `Jait API version ${this.version}` });
    });
  }
}
