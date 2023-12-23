// import { ExpoRequest, ExpoResponse } from 'expo-router/server';

// const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
// const openai = new OpenAI({ key: OPEN_AI_KEY });
//
// export async function POST(req: ExpoRequest, res: ExpoResponse) {
//   const { messages } = req.body;
//
//   const prompt = messages.map((message) => {
//     return `${message.role}: ${message.content}`;
//   }).join('\n');
//
//   const completion = await openai.complete({
//     engine: 'davinci',
//     prompt,
//     maxTokens: 150,
//     temperature: 0.9,
//     topP: 1,
//     presencePenalty: 0.6,
//     frequencyPenalty: 0.6,
//     bestOf: 1,
//     n: 1,
//     stream: false,
//     stop: ['\n'],
//   });
//
//   return res.json({
//     completion: completion.data.choices[0].text,
//   });
// }
