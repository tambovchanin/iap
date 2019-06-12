import { UserAttributes } from './models/user';
import { PassportStatic } from 'passport';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

export default (passport: PassportStatic, db: any) => {
  passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.id);
  });

  passport.deserializeUser((id: number, done) => {
    db.user.findByPk(id).then( (user: UserAttributes|null) => {
      done(null, user);
    });
  });

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
    (username: string, password: string, done: (err: string|null, user?: {}) => void) => {
      db.user.findOne( { where: { name: username } }).then( (user: UserAttributes|null) => {
        if (!user) return done('Incorrect username.');
        if (!user.validatePassword(password)) return done('Incorrect password.');

        return done(null, user);
      });
    }
  ));
};

// checking if password is valid
