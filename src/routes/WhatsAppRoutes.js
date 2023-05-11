"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerWhatsApp_1 = __importDefault(require("../controller/ControllerWhatsApp"));
class WhatsAppRoutes {
    constructor() {
        this.apiRouterWhatsApp = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouterWhatsApp.get("/", ControllerWhatsApp_1.default.Verificar);
        this.apiRouterWhatsApp.post("/", ControllerWhatsApp_1.default.Recived);
    }
}
const routes = new WhatsAppRoutes();
exports.default = routes.apiRouterWhatsApp;
