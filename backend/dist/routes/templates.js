"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templateController_1 = require("@/controllers/templateController");
const router = express_1.default.Router();
router.get('/', templateController_1.getTemplates);
router.get('/:id', templateController_1.getTemplate);
router.delete('/:id', templateController_1.deleteTemplate);
exports.default = router;
//# sourceMappingURL=templates.js.map