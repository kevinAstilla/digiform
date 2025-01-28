"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = expressLoader;
const cors_1 = __importDefault(require("cors"));
const passportConfig_1 = __importDefault(require("@/config/passportConfig"));
const auth_1 = __importDefault(require("@/routes/auth"));
const templates_1 = __importDefault(require("@/routes/templates"));
const forms_1 = __importDefault(require("@/routes/forms"));
const express_1 = __importDefault(require("express"));
function expressLoader({ app }) {
    app.use((0, cors_1.default)({
        origin: "http://localhost:5173",
        credentials: true,
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(passportConfig_1.default.initialize());
    // app.use((req, res, next) => {
    //     console.log('Headers:', req.headers);
    //     console.log('Body:', req.body); // Will show undefined if not parsed
    //     next();
    //   });
    app.get('/', (req, res) => {
        res.send('well that was fast');
    });
    app.use('/auth', auth_1.default);
    app.use('/api/forms', forms_1.default);
    app.use('/api/templates', templates_1.default);
    // app.use('/api', protectedRoutes);
}
//# sourceMappingURL=express.js.map