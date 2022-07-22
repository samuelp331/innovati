"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estController_1 = __importDefault(require("../controllers/estController"));
class EstRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', estController_1.default.list);
        this.router.get('/', estController_1.default.soloUno);
        this.router.post('/', estController_1.default.create);
        this.router.put('/:id', estController_1.default.update);
        this.router.delete('/:id', estController_1.default.delete);
    }
}
const estRoutes = new EstRoutes();
exports.default = estRoutes.router;
