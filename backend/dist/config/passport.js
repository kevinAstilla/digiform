"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users = {
    "admin@example.com": { password: "$2a$10$hashedPassword", role: "admin" }
};
passport_1.default.use(new passport_local_1.Strategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users[email];
    if (!user) {
        return done(null, false, { message: "User not found" });
    }
    const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return done(null, false, { message: "Incorrect password" });
    }
    return done(null, { email, role: user.role });
})));
passport_1.default.serializeUser((user, done) => {
    done(null, user.email); // Store user email in session
});
passport_1.default.deserializeUser((email, done) => {
    const user = users[email];
    if (user) {
        done(null, { email, role: user.role });
    }
    else {
        done(null, false);
    }
});
exports.default = passport_1.default;
