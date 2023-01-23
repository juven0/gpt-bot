const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



module.exports.gpt = async() => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "ou se trouve le trous noir la plus proche de nous  ",
        temperature: 0.9,
        max_tokens: 4000,
        n: 1
    });

    return responsedata.choices.text
}