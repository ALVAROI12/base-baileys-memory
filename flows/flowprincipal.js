const { addKeyword, EVENTS } = require("@bot-whatsapp/bot")



const flowprincipal = addKeyword(EVENTS.WELCOME).addAnswer("Buenas Bienvenido a Brauyni Store").addAnswer([
    "¿Como podemos ayudarte?",
    "",
    "MENU",
    
]

)

module.exports = flowprincipal