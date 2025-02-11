"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formController_1 = require("@/controllers/formController");
const router = express_1.default.Router();
router.get('/', formController_1.getForms);
router.get('/:id', formController_1.getForm);
router.get('/:id/submissions', formController_1.getSubmissions);
router.post('/:id/submit', formController_1.submitForm);
router.delete('/:id', formController_1.deleteForm);
exports.default = router;
//# sourceMappingURL=forms.js.map