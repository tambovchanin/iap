import cors from 'cors';
import passport from 'passport';
import flash from 'express-flash';
import bodyParser from 'body-parser';
import compression from 'compression';
import config from '../config/config';
import { createModels } from './models';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import expressSession from 'express-session';
import passportConfig from './passport.config';
import express, { Request, Response } from 'express';

import ControllerInterface from './interfaces/controller';

class App {
  app: express.Application;
  port: number;
  db: any;

  constructor(controllers: ControllerInterface[], port: number) {
    this.app = express();
    this.port = port;

    this.db = createModels(config.database);

    this.connectDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  async connectDatabase() {
    const db = this.db;

    await db.sequelize.sync();
  }

  private initializeMiddlewares() {
    const db = this.db;
    const app = this.app;

    passportConfig(passport, db);

    app.use(bodyParser.json());
    app.use(compression({
      filter: (req: Request, res: Response) => {
        return /json|text|javascript|css/.test((res.getHeader('Content-Type') as string));
      },
      level: 9
    }));

    app.use(cookieParser());
    app.use(expressSession({
      secret: 'hYKblG{x}mOnfEOXCA88oEn4x*5W}i*T',
      saveUninitialized: false,
      resave: true,
      cookie: {
        maxAge: 30000
      }
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.urlencoded({ extended: true, limit: '5mb' }));
    app.use(express.json({ limit: '5mb' }));
    app.use(methodOverride());
    app.use(flash());
    app.use(cors({
      origin: 'http://localhost:8080',
      credentials: true
    }));
  }

  private initializeControllers(controllers: ControllerInterface[]) {
    controllers.forEach((controller: ControllerInterface) => {
      this.app.use('/', controller.router);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
