
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

class GeminiService {
  private ai: GoogleGenAI;
  private chatInstance: Chat | null = null;

  constructor() {
    // Correct initialization: always use process.env.API_KEY directly as a named parameter.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  private getChat() {
    if (!this.chatInstance) {
      this.chatInstance = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are SN Sentinel AI, a world-class O&M specialist for the 'SN Project'. 
          Your expertise includes cloud infrastructure, server health, log analysis, and incident response.
          Help the user troubleshoot issues, summarize reports, or explain system metrics. 
          Keep responses concise, technical, and professional. Use markdown for better readability.`,
        },
      });
    }
    return this.chatInstance;
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const chat = this.getChat();
      const response: GenerateContentResponse = await chat.sendMessage({ message });
      // response.text is a property, not a method
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An error occurred while communicating with the AI. Please check your system logs.";
    }
  }

  async *sendMessageStream(message: string) {
    try {
      const chat = this.getChat();
      const result = await chat.sendMessageStream({ message });
      for await (const chunk of result) {
        // Access chunk.text property
        yield (chunk as GenerateContentResponse).text;
      }
    } catch (error) {
      console.error("Gemini Stream Error:", error);
      yield "Communication interrupted.";
    }
  }
}

export const geminiService = new GeminiService();
