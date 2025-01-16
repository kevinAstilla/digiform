"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const users_1 = __importDefault(require("../data/users"));
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "your-secret-key",
};
passport_1.default.use(new passport_jwt_1.Strategy(opts, (jwtPayload, done) => {
    const user = users_1.default.find((u) => u.id === jwtPayload.id);
    if (user) {
        return done(null, user); // Attach user to req.user
    }
    return done(null, false);
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user.email); // Store user email in session
});
passport_1.default.deserializeUser((email, done) => {
    const user = users_1.default.find((u) => u.email === email);
    if (user) {
        done(null, { email, role: user.role });
    }
    else {
        done(null, false);
    }
});
exports.default = passport_1.default;
//# sourceMappingURL=passportConfig.js.map