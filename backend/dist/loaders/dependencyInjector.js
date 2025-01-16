"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dependencyInjector;
const typedi_1 = require("typedi");
function dependencyInjector({ models }) {
    try {
        models.forEach((model) => {
            typedi_1.Container.set(model.name, model.model);
        });
    }
    catch (error) {
        console.error('Error loading models');
        throw new Error('Error loading models');
    }
}
//# sourceMappingURL=dependencyInjector.js.map