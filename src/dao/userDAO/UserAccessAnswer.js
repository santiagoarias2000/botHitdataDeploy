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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserAccessAnswer {
    static process(register, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (register != null) {
                if (register != null) {
                    console.log(register);
                    ///vamos a crear el token
                    const user = register.full_name;
                    const email = register.email_user;
                    const dasdas = { nombre: register.emailUser, dosDev: 'eso somos' };
                    console.log(user);
                    const tokenHitData = jsonwebtoken_1.default.sign({ nombre: register.full_name, dosDev: 'eso somos' }, 'LaClaveVaAqui', { expiresIn: '8h' });
                    return res.status(200).json({ tokenHitData: tokenHitData, tokenName: user, tokenEmail: email, tokenFull: dasdas });
                }
                else {
                    return res.status(401).json({ miError: 'Usuario incorrecto' });
                }
            }
        });
    }
}
exports.default = UserAccessAnswer;
