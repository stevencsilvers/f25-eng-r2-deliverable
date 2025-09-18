/* eslint-disable */
import OpenAI from "openai";

// HINT: You'll want to initialize your service outside of the function definition
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// TODO: Implement the function below:
export async function generateResponse(message: string): Promise<string> {
  return "hello, i am a species chatbot.";
}
