import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import users from "../data/users";


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "your-secret-key",
};

passport.use(
  new JwtStrategy(opts, (jwtPayload, done) => {
    const user = users.find((u:any) => u.id === jwtPayload.id);
    if (user) {
      return done(null, user); // Attach user to req.user
    }
    return done(null, false);
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.email); // Store user email in session
});

passport.deserializeUser((email: string, done) => {
const user = users.find((u:any) => u.email === email);
  if (user) {
    done(null, { email, role: user.role });
  } else {
    done(null, false);
  }
});
  
export default passport;