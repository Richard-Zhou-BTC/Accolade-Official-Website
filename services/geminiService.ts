import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

try {
    if (process.env.API_KEY) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
} catch (error) {
    console.error("Failed to initialize GoogleGenAI", error);
}

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the design server at the moment. Please check your API key configuration.";
  }

  try {
    // Transform history to match SDK expectation if needed, or maintain simple context
    // For simplicity in this demo, we use a fresh generateContent with system instruction context
    // In a full app, we would maintain a Chat session object.
    
    const model = 'gemini-2.5-flash';
    
    // Construct a prompt that includes history context for better flow in this stateless function wrapper
    // or use the Chat API. Here we use the Chat API for better conversation handling.
    
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "I apologize, I didn't quite catch that.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try asking again in a moment.";
  }
};
