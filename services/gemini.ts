
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAIProjectEstimate(projectDescription: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a friendly, professional, and expert handyman estimate for the following project in Alabaster, AL: "${projectDescription}". 
      Include:
      1. Estimated labor hours.
      2. Recommended materials or things the homeowner should buy.
      3. A rough cost range (assume $75-$100/hr labor).
      4. A "Pro Tip" for the homeowner.
      Keep it brief, warm, and helpful.`,
      config: {
        systemInstruction: "You are Alabaster's Handyman AI assistant. You provide helpful, localized advice for home repairs in Alabaster, Alabama.",
      }
    });

    return response.text;
  } catch (error) {
    console.error("AI Estimation Error:", error);
    return "I'm having a little trouble calculating that right now. Please give us a call at (205) 555-0123 for a direct quote!";
  }
}
