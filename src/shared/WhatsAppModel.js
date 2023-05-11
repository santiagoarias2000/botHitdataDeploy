"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappModels {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
            "text": {
                "preview_url": true,
                "body": textResponse,
            },
            "type": "text",
        });
        return data;
    }
    //Buenas tardes, buenos dias, hola
    MessageImageHola(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
            "type": "image",
            "image": {
                "link": "https://files.fm/f/u8q9ez8vy",
                "caption": textResponse
            },
        });
        return data;
    }
    //Buenas noches, buenas tardes, Muchas gracias
    MessageImageDespedida(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
            "type": "image",
            "image": {
                "link": "https://files.fm/f/4mcnm2xhk",
                "caption": textResponse
            },
        });
        return data;
    }
    MessageList(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "Nuestros Servicios"
                },
                "body": {
                    "text": "Son:"
                },
                "footer": {
                    "text": "Selecciona una de las opciones para poder atenderte"
                },
                "action": {
                    "button": "Ver opciones",
                    "sections": [
                        {
                            "title": "Planes de gestion de redes",
                            "rows": [
                                {
                                    "id": "main-comprar-header",
                                    "title": "Plan hitdata",
                                    "description": "Valor del plan 2.000.000"
                                },
                                {
                                    "id": "main-comprar",
                                    "title": "Plan personalizado",
                                    "description": "Depende lo que necesita"
                                }
                            ]
                        },
                        {
                            "title": "Producto de diseño",
                            "rows": [
                                {
                                    "id": "main-agencia",
                                    "title": "Identidad coorporativa",
                                    "description": "Creamos el logo para tu empresa"
                                },
                                {
                                    "id": "main-contacto",
                                    "title": "Brochure",
                                    "description": "Creamos el catalogo para tu empresa."
                                }
                            ]
                        },
                        {
                            "title": "Producto de Web",
                            "rows": [
                                {
                                    "id": "main-agencia",
                                    "title": "Pagina estatica",
                                    "description": "Valor de una pagina estatica"
                                },
                                {
                                    "id": "main-contacto",
                                    "title": "Pagina WooCommers",
                                    "description": "Valor de la pagina"
                                }
                            ]
                        },
                        {
                            "title": "Producto de audiovisual",
                            "rows": [
                                {
                                    "id": "main-agencia",
                                    "title": "Videos",
                                    "description": "Valor de videos"
                                },
                                {
                                    "id": "main-contacto",
                                    "title": "Animaciones",
                                    "description": "Valor de animaciones"
                                }
                            ]
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageButtons(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "¿Selecciona uno de los productos?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-laptop",
                                "title": "Laptop"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-computadora",
                                "title": "Computadora"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageLocation(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `whatsapp:${number}`,
            "type": "location",
            "location": {
                "latitude": "5.559455106648253 ",
                "longitude": "-73.34499717963602",
                "name": "Viva tunja",
                "address": "Av Universitaria, Tunja, Boyacá"
            }
        });
        return data;
    }
}
const whatsappModels = new WhatsappModels();
exports.default = whatsappModels;
