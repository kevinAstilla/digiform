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
exports.deleteForm = exports.submitForm = exports.getSubmissions = exports.getForm = exports.getForms = void 0;
const forms_1 = __importDefault(require("../data/forms"));
const submissions_1 = __importDefault(require("../data/submissions"));
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
const getSubmissions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { page } = req.query;
        let startIndex = 0;
        if (page) {
            startIndex = (Number(page) - 1) * 5;
        }
        const form = forms_1.default.find((form) => form.id === id);
        if (!form) {
            throw new Error("Form Not Found");
        }
        const formSubmissions = submissions_1.default.filter((submissions) => submissions.form_id === id);
        const response = {
            totalPages: Math.ceil(formSubmissions.length / 5),
            currentPage: page ? Number(page) : 1,
            data: formSubmissions.slice(startIndex, startIndex + 5)
        };
        res.status(200).json(response);
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
exports.getSubmissions = getSubmissions;
const submitForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const form = forms_1.default.find((form) => form.id === id);
        if (!form) {
            throw new Error("Form Not Found");
        }
        submissions_1.default.push({
            id: submissions_1.default.length + 1,
            form_id: form.id,
            created_at: new Date().toISOString(),
            submitted_at: new Date().toISOString(),
            data
        });
        res.status(200).json({ message: submissions_1.default });
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
exports.submitForm = submitForm;
const deleteForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const form = forms_1.default.find((form) => form.id === id);
        if (form) {
            forms_1.default.splice(forms_1.default.indexOf(form), 1);
            res.status(200).json({ message: "Form Deleted Successfully" });
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
exports.deleteForm = deleteForm;
//# sourceMappingURL=formController.js.map