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
const WhatsAppService_1 = __importDefault(require("../services/WhatsAppService"));
const WhatsAppModel_1 = __importDefault(require("./WhatsAppModel"));
class ProcessMessage {
    ProcessMessage(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            if (textUser.includes("hola")) {
                //Saludar
                var model = WhatsAppModel_1.default.MessageText("Hola, un gusto saludarte", number);
                models.push(model);
                var modelList = WhatsAppModel_1.default.MessageList(number);
                models.push(modelList);
            }
            else if (textUser.includes("gracias")) {
                var model = WhatsAppModel_1.default.MessageText("Con gusto :)", number);
                models.push(model);
            }
            else if (textUser.includes("adios") || textUser.includes("adiós")
                || textUser.includes("bye") || textUser.includes("me voy")) {
                var model = WhatsAppModel_1.default.MessageText("Vuelva pronto", number);
                models.push(model);
            }
            else if (textUser.includes("vender")) {
                var model = WhatsAppModel_1.default.MessageText("Registrate en el siguiente formulario: https://docs.google.com/forms/d/e/1FAIpQLSeV2-BAld86gZy0aq_ZMRXU9FJnZBBw5yyWxVB4KlfXJmXadA/viewform", number);
                models.push(model);
            }
            else if (textUser.includes("agencia")) {
                var model = WhatsAppModel_1.default.MessageLocation(number);
                models.push(model);
            }
            else if (textUser.includes("contacto")) {
                var model = WhatsAppModel_1.default.MessageText("*Centro de contacto:* \n3114546376", number);
                models.push(model);
            }
            else {
                var model = WhatsAppModel_1.default.MessageText("No te entiendo", number);
                models.push(model);
            }
            models.forEach((model) => {
                WhatsAppService_1.default.SendMessageWhatsApp(model);
            });
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
