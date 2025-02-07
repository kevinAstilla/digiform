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
exports.deleteTemplate = exports.getTemplate = exports.getTemplates = void 0;
const templates_1 = __importDefault(require("../data/templates"));
const getTemplates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(templates_1.default);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        }
        else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
});
exports.getTemplates = getTemplates;
const getTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const template = templates_1.default.find((template) => template.id === id);
        if (template) {
            res.status(200).json(template);
        }
        else {
            throw new Error("Template Not Found");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        }
        else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
});
exports.getTemplate = getTemplate;
const deleteTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const template = templates_1.default.find((template) => template.id === id);
        if (template) {
            templates_1.default.splice(templates_1.default.indexOf(template), 1);
            res.status(200).json({ message: "Template Deleted Successfully" });
        }
        else {
            throw new Error("Template Not Found");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        }
        else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
});
exports.deleteTemplate = deleteTemplate;
//# sourceMappingURL=templateController.js.map