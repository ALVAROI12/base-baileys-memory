const { addKeyword } = require("@bot-whatsapp/bot");

const flowvendedor = addKeyword("menu","productos","braunis","brownies","pasteles","chocolates", "precios")
  .addAnswer(
   "Ahora te paso el menu",
   {

        media:'https://tgifridays.hn/wp-content/uploads/2023/06/Menu-Big-af-Burger-Digital132023.pdf'
   }
   
   
   ).addAnswer(['Quieres Ordenar Algo?',
   
   '*1* SI',
   '*2* NO',
])
   
   module.exports = flowvendedor