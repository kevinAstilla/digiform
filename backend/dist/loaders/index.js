"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loader;
const mongoose_1 = __importDefault(require("./mongoose"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const formtemplate_1 = __importDefault(require("@/models/mongoose/formtemplate"));
const express_1 = __importDefault(require("./express"));
function loader({ expressApp }) {
    console.log('Initiating MongoDB connection');
    (0, mongoose_1.default)();
    console.log('MongoDB connection established');
    console.log('Loading models');
    const formTemplateModel = {
        name: 'formTemplateModel',
        model: formtemplate_1.default
    };
    (0, dependencyInjector_1.default)({
        models: [formTemplateModel]
    });
    // Load express app
    (0, express_1.default)({ app: expressApp });
    // Load passport
    // Load all routes
}
//# sourceMappingURL=index.js.map