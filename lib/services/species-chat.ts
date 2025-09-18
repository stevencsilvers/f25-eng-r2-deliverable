/* eslint-disable */
import OpenAI from "openai";

// Initialize client outside of the function
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(message: string): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who provides information about species (animals, plants, fungi, protists, bactera). Answer questions only related to these topics.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      top_p: 0.9,
    });

    // Safely access the first message content
    const botMessage = response.choices?.[0]?.message?.content;
    return botMessage ?? "Sorry, I couldn't generate a response.";
  } catch (err) {
    console.error("generateResponse error:", err);
    return "Sorry, something went wrong while generating the response.";
  }
}
