const { Configuration, OpenAIApi } = require("openai");
const callSend = require("./utils")
require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports.messageRouters = (senderPsid, webhookEvent) => {

    if (webhookEvent.message) {
        handleMessage(senderPsid, webhookEvent.message)
    }
}

async function handleMessage(senderPsid, receivedMessage) {
    let response;

    if (receivedMessage.text) {
        response = {
            'text': 'attente de resultat ...'
        }
        const responsedata = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: receivedMessage.text,
            temperature: 0.9,
            max_tokens: 4000,
            n: 1
        });

        if (responsedata.choices.text) {
            response = {
                'text': responsedata.choices.text
            };
        } else {
            response = {
                'text': receivedMessage.text
            }
        }


    }
    callSend.callSendAPI(senderPsid, response);
}