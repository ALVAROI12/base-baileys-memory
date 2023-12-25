const { addKeyword } = require("@bot-whatsapp/bot");
const { PROMP } = require("../promps");

const flowfinal = addKeyword('si confirmo')
  .addAnswer(
    'El total de tu pedido es:',
    null,
    async ({ chatGPT }) => {
      try {
        // Realizar acciones adicionales antes de solicitar la información adicional
        console.log('Realizando acciones adicionales...');
        
        // Solicitar información adicional usando el flujo definido en PROMP
        await chatGPT.handleMsgChatGPT(PROMP);
      } catch (error) {
        console.error('Error en el manejo de la promesa:', error);
      }
    }
  );

module.exports = flowfinal;
