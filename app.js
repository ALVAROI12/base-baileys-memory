require("dotenv").config();
const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const ChatGPTClass = require("./chatgpt.class");
const chatGPT = new ChatGPTClass();

const flowprincipal = require("./flows/flowprincipal")
const flowvendedor = require("./flows/flowvendedor")
const flowcheckout  = require("./flows/flowcheckout")
const flowfinal = require("./flows/flowfinal")


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowprincipal, flowvendedor, flowcheckout, flowfinal])
    const adapterProvider = createProvider(BaileysProvider)

     createBot({
        flow: adapterFlow ,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}


main() 

module.exports = chatGPT