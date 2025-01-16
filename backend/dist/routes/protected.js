"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("@middleware/auth");
const router = express_1.default.Router();
router.get("/protected", auth_1.ensureAuthenticated, (req, res) => {
    var _a;
    res.json({ message: `Welcome, ${(_a = req.user) === null || _a === void 0 ? void 0 : _a.email}!` });
});
exports.default = router;
