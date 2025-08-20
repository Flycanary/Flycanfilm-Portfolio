import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE_INFO, SKILLS, PROJECTS } from '../constants';

// Per coding guidelines, the API key must be obtained from `process.env.API_KEY`.
// This is assumed to be available in the execution environment.
const API_KEY = process.env.API_KEY;

// Gracefully handle missing API key instead of crashing the app.
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  // Log a warning for the developer.
  console.warn("API_KEY environment variable not set. Portfolio Assistant will be disabled and provide a mock response.");
}

const systemInstruction = `
You are a professional, friendly, and helpful portfolio assistant for ${PROFILE_INFO.name}, a ${PROFILE_INFO.title}. 
Your goal is to answer questions from potential recruiters and collaborators based on the following information. 
Be concise and helpful. Do not make up information. If you don't have the answer, politely state that.

**${PROFILE_INFO.name}'s Profile:**
- **Title:** ${PROFILE_INFO.title}
- **Bio:** ${PROFILE_INFO.bio}
- **Contact Email:** ${PROFILE_INFO.contactEmail}

**Key Skills:**
${SKILLS.map(skill => `- ${skill.name}`).join('\n')}

**Projects:**
${PROJECTS.map(p => `
- **Project Name:** "${p.title}"
  - **Description:** ${p.description}
  - **Software Used:** ${p.tags.join(', ')}
`).join('\n')}

When asked about a specific skill (e.g., After Effects), explain ${PROFILE_INFO.name}'s experience with it based on the projects listed.
When asked about a project, provide its description and the key software used.
`;

let chat: Chat | null = null;

// Updated to handle null 'ai' instance.
const initializeChat = (): Chat | null => {
    if (!ai) {
        return null;
    }
    if (chat) {
        return chat;
    }
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        },
    });
    return chat;
};

// This function creates a mock async generator to simulate a streaming response when the API key is not available.
async function* mockStreamResponse(text: string): AsyncGenerator<GenerateContentResponse> {
    const words = text.split(' ');
    for (const word of words) {
        // Create an object that structurally matches what the component expects from a stream chunk.
        const mockChunk = {
            get text() { return word + ' '; }
        };
        yield mockChunk as GenerateContentResponse;
        // Add a small delay to simulate the streaming effect.
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

// Updated to return a mock response stream if the chat is not initialized.
export const getChatResponse = async (message: string): Promise<AsyncGenerator<GenerateContentResponse>> => {
    const chatInstance = initializeChat();
    if (!chatInstance) {
        const errorMessage = "I'm sorry, the AI assistant is currently unavailable. The API_KEY may be missing. Please contact the site owner.";
        return mockStreamResponse(errorMessage);
    }
    const result = await chatInstance.sendMessageStream({ message });
    return result;
};
