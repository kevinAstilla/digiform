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
exports.getForm = exports.getForms = void 0;
const forms_1 = __importDefault(require("../data/forms"));
const getForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(forms_1.default);
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
exports.getForms = getForms;
const getForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const form = forms_1.default.find((form) => form.id === id);
        if (form) {
            res.status(200).json(form);
        }
        else {
            throw new Error("Form Not Found");
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
exports.getForm = getForm;
//# sourceMappingURL=formController.js.map