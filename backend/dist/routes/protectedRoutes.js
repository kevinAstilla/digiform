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
const express_1 = __importDefault(require("express"));
const auth_1 = require("@/middleware/auth");
const router = express_1.default.Router();
router.get("/protected", auth_1.ensureAuthenticated, (req, res) => {
    res.json({ message: `Welcome, ${req.user}!` });
});
router.post("/form/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(req.body);
    res.json({ message: `Form submitted`, status: 200 });
}));
exports.default = router;
//# sourceMappingURL=protectedRoutes.js.map