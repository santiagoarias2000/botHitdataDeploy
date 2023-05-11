"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const WhatsAppRoutes_1 = __importDefault(require("../../routes/WhatsAppRoutes"));
class Server {
    constructor() {
        dotenv_1.default.config({ path: "variables.env" });
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activateRoute();
    }
    startSetting() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "1000mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activateRoute() {
        this.app.use("/whatsapp", WhatsAppRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("El puerto en que trabaja es: ", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
