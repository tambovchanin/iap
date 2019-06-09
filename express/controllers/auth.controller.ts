import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Request, Response, Router, NextFunction } from 'express';
import ControllerInterface from '../interfaces/controller';


class AuthController implements ControllerInterface {
  path: string = '';
  router: Router = Router();

  constructor(path: string) {
    this.path = `/${path}`;
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post(this.path, (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate('local',  { session: false }, (err, user, info) => {
        if (err || !user)
          return res.status(400).json({message: info ? info.message : 'Login failed'});

        req.login(user, {session: false}, (err) => {
            if (err) return res.send(err);

            const token = jwt.sign(
              { data: user.name },
              'hYKblG{x}mOnfEOXCA88oEn4x*5W}i*T',
              { expiresIn: '1m' });

            // var decoded = jwt.decode(token);
            //
            // jwt.verify(token, 'hYKblG{x}mOnfEOXCA88oEn4x*5W}i*T', (err, decoded) => {
            //   // var decoded = jwt.decode(token);
            //
            //   jwt.verify(token, 'hYKblG{x}mOnfEOXCA88oEn4x*5W}i*T', (err, decoded) => {
            //     if (err)
            //       return res.status(400).json({message: err ? err.message : 'Authentification failed'});
            //   });
            // });

            return res.json({user, token});

        });
      })(req, res);
    });
  }

  // authentificated = (request: Request, response: Response) => {
  //   console.log('* authentificated');
  //   response.send(200);
  // }
}

export default AuthController;
