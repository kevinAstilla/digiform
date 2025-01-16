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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../data/users"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    try {
        const { email, password, role, firstname, lastname } = req.body;
        if (users_1.default[email]) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        users_1.default.push({ id: users_1.default.length + 1, firstname, lastname, email, password: hashedPassword, role: 'user' });
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.log(error);
    }
    res.status(400).json({ message: "User not registered" });
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = users_1.default.find((u) => u.email === email);
    if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
    }
    const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
    // Generate JWT
    const token = jsonwebtoken_1.default.sign(userWithoutPassword, process.env.JWT_SECRET || "your-secret-key", { expiresIn: "1h" });
    res.json({ token });
});
exports.login = login;
const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            res.status(500).json({ message: "Error during logout" });
        }
        res.status(200).json({ message: "Logged out successfully" });
    });
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map