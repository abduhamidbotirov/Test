import Telegram from "node-telegram-bot-api";
const bot = new Telegram("6549933624:AAFuObit_LichTWxGpzoareH-TR0CIaUC0U", {
    polling: true,
});
const chanalUniversal = "@jnsckajnask";
bot.on("message", (msg) => {
    if (msg.photo) { 
        "s"
        const photoId = msg.photo[0].file_id;
        bot.sendPhoto(chanalUniversal, photoId);
    } else if (msg.document) {
        const docId = msg.document.file_id;
        bot.sendDocument(chanalUniversal, docId);
    } else { 
        const messageText = msg.text;
        bot.sendMessage(chanalUniversal, messageText);
    }
}); 
