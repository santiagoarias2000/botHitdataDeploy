"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DaosWhatsApp_1 = __importDefault(require("../daos/DaosWhatsApp"));
class ControllerWhatsApp extends DaosWhatsApp_1.default {
    Verificar(req, res) {
        ControllerWhatsApp.VerificarToken(req, res);
    }
    Recived(req, res) {
        ControllerWhatsApp.RecivedMessage(req, res);
    }
}
const controllerWhatsApp = new ControllerWhatsApp();
exports.default = controllerWhatsApp;
