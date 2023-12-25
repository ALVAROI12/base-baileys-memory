const { addKeyword } = require("@bot-whatsapp/bot");
const { PROMP } = require("../promps");

const flowcheckout = addKeyword('1', { sensitive: true })
  .addAnswer(
    'Gracias por empezar una orden, por favor espera un momento. Te diré cuando esté lista.',
    null,
    async (ctx, { chatGPT }) => {
      try {
        if (chatGPT && typeof chatGPT.handleMsgChatGPT === 'function') {
          await chatGPT.handleMsgChatGPT(PROMP);
        } else {
          console.error('Error: chatGPT o handleMsgChatGPT no están definidos o no son una función.');
        }
      } catch (error) {
        console.error('Error en el manejo de la promesa:', error);
      }
    }
  )
  .addAnswer(
    'Gracias por la espera, por favor dime qué es lo que deseas ordenar.',
    { capture: true },
    async (ctx, { chatGPT }) => {
      try {
        if (chatGPT && typeof chatGPT.handleMsgChatGPT === 'function') {
          const response = await chatGPT.handleMsgChatGPT(ctx.body);
          const message = response.text;

          // Verifica si el usuario confirmó la orden
          if (message.toLowerCase() === 'si confirmo') {
            // Realiza acciones adicionales o confirma la orden
            console.log('Orden confirmada');
          } else {
            // El usuario no confirmó, puedes manejar esto de alguna manera
            console.log('Orden no confirmada');
          }
        } else {
          console.error('Error: chatGPT o handleMsgChatGPT no están definidos o no son una función.');
        }
      } catch (error) {
        console.error('Error en el manejo de la promesa:', error);
      }
    }
  );

module.exports = flowcheckout;
