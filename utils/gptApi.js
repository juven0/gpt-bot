const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const gpt = async(query) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "comment faire pour oublier sont ex petite amis",
            temperature: 0.9,
            max_tokens: 4000,
            n: 1
        });

        console.log(response.data.choices[0].text)
    } catch (e) {
        console.log(e)
    }

}

gpt("comment faire pour oublier sont ex petite amis")