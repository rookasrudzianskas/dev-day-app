// require express
const express = require('express');

const app = express();
const port = 3000;
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "sk-<YOUR_API_KEY>",
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Hello from Express!")
});

app.post('/create-a-ai-completion', async (req, res) => {
  const prompt = req.body.prompt || "null";

  try {
    if (prompt == null) {
      throw new Error("Uh oh, no prompt was provided");
    }

    const completion = await openai.chat.completions.create({
      messages: [{
        role: 'system',
        content: 'You are helpful assistant.',
      }],
      model: 'gpt-3.5-turbo'
    });

    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
