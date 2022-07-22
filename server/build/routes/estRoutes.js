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
        this.router.get('/', estController_1.default.index);
    }
}
const estRoutes = new EstRoutes();
exports.default = estRoutes.router;
