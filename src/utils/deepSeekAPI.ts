import { ChatMessage } from '../types';

// OpenRouter configuration for DeepSeek
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || 'YOUR_DEEPSEEK_API_KEY_HERE';
const DEEPSEEK_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface DeepSeekMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface DeepSeekRequest {
  model: string;
  messages: DeepSeekMessage[];
  temperature?: number;
  max_tokens?: number;
}

interface DeepSeekResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

// Rate limiting variables
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1000; // 1 second minimum between requests

/**
 * Clean and filter AI response to remove unwanted content
 * @param response The raw AI response
 * @returns Cleaned response
 */
function cleanAIResponse(response: string): string {
  // Remove any text after specific markers that might indicate unwanted content
  const markers = [
    'Note:',
    'Disclaimer:',
    'As an AI',
    'I am an AI',
    'I\'m an AI',
    'Please note',
    'Important:',
    'Remember:',
    'Keep in mind'
  ];
  
  let cleanedResponse = response;
  
  // Remove content after markers
  for (const marker of markers) {
    const index = cleanedResponse.toLowerCase().indexOf(marker.toLowerCase());
    if (index !== -1) {
      cleanedResponse = cleanedResponse.substring(0, index).trim();
    }
  }
  
  // Remove extra whitespace and newlines at the end
  cleanedResponse = cleanedResponse.trim();
  
  // Ensure we don't return empty responses
  if (!cleanedResponse) {
    return "I couldn't generate a focused response. Please try rephrasing your question.";
  }
  
  return cleanedResponse;
}

/**
 * Generate AI response using DeepSeek API through OpenRouter for questions outside our predefined knowledge
 * @param userMessage The user's question
 * @param chatHistory Previous conversation history
 * @returns Promise<string> The AI response
 */
export async function generateDeepSeekResponse(
  userMessage: string,
  chatHistory: ChatMessage[] = []
): Promise<string> {
  try {
    // Check if API key is properly configured
    if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === 'YOUR_DEEPSEEK_API_KEY_HERE' || DEEPSEEK_API_KEY.length < 10) {
      return "DeepSeek API key is not configured. Please add your API key to the .env file.";
    }

    // Implement rate limiting
    const currentTime = Date.now();
    const timeSinceLastRequest = currentTime - lastRequestTime;
    
    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
      // Wait for the remaining time to respect rate limit
      const delay = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    // Update last request time
    lastRequestTime = Date.now();

    // Prepare the messages for the API
    const messages: DeepSeekMessage[] = [
      {
        role: 'system',
        content: `You are an AI assistant specialized in computer science, algorithms, and programming. Provide clear, accurate, and helpful explanations with a systematic structure.

When responding to questions, follow this format:
1. Start with a brief, clear summary of the answer
2. Provide detailed explanation in structured sections with headings
3. Use bullet points or numbered lists where appropriate
4. Include examples when relevant
5. End with a concise conclusion

For programming questions:
- Explain the concept clearly
- Provide code examples with explanations
- Mention time/space complexity when relevant
- Suggest best practices or alternatives

For general knowledge questions:
- Provide factual information
- Organize content in logical sections
- Include relevant context or background
- Mention important caveats or exceptions

Always format your responses using markdown for better readability:
- Use ## for section headings
- Use - for bullet points
- Use \`code\` for technical terms
- Use \`\`\`language for code blocks

Example response format:
## Summary
Brief answer to the question

## Detailed Explanation
### Section 1
Content...

### Section 2
Content...

## Examples
\`\`\`python
# Code example if relevant
\`\`\`

## Conclusion
Concise summary of key points

Important: Provide only the requested information. Do not include disclaimers, notes about being an AI, or other boilerplate text. Keep responses focused and concise.`
      },
      ...chatHistory.slice(-6).map(msg => ({
        role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })),
      {
        role: 'user',
        content: userMessage
      }
    ];

    // Prepare the request payload
    const requestBody: DeepSeekRequest = {
      model: 'deepseek/deepseek-chat', // OpenRouter model format
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000
    };

    // Set a timeout for the request (30 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    // Make the API call
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Accept': 'application/json',
        'HTTP-Referer': 'http://localhost:5173', // Optional, for OpenRouter analytics
        'X-Title': 'Algorithm Learning Platform' // Optional, for OpenRouter analytics
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // Handle non-successful responses
    if (!response.ok) {
      const errorText = await response.text();
      
      // Handle rate limit error specifically
      if (response.status === 429) {
        return `I'm experiencing high demand right now. Please wait a moment and try again. Error details: Rate limit exceeded.`;
      }
      
      // Handle insufficient balance error specifically
      if (errorText.includes('Insufficient Balance')) {
        return `I apologize, but I'm having trouble accessing advanced AI capabilities right now. 
        Error details: Your DeepSeek account has insufficient balance. Please add credits to your account at https://www.deepseek.com/
        For specific algorithm and data structure questions, I can still help with my built-in knowledge. 
        For more general questions, please try rephrasing or ask about algorithms, data structures, or programming concepts.`;
      }
      
      // Handle invalid API key error
      if (response.status === 401) {
        console.error('DeepSeek API key error. Response:', errorText);
        return "Invalid DeepSeek API key. Please check your API key in the .env file.";
      }
      
      // Generic error handling
      return `I'm having trouble connecting to the AI service right now. Please try again later. Error: ${response.status} - ${response.statusText}`;
    }

    const data: DeepSeekResponse = await response.json();
    
    // Extract the response content
    if (data.choices && data.choices.length > 0 && data.choices[0].message) {
      // Clean and filter the response to remove unwanted content
      const rawResponse = data.choices[0].message.content.trim();
      return cleanAIResponse(rawResponse);
    } else {
      return "I couldn't generate a response. Please try rephrasing your question.";
    }
  } catch (error: any) {
    // Handle timeout errors
    if (error.name === 'AbortError') {
      return "The request timed out. Please try again.";
    }
    
    // Handle network errors
    if (error instanceof TypeError) {
      return "Network error. Please check your internet connection and try again.";
    }
    
    // Handle other errors
    console.error('DeepSeek API error:', error);
    return `I'm experiencing technical difficulties right now. Please try again later. Error details: ${error.message || 'Unknown error'}`;
  }
}

/**
 * Determine if we should use DeepSeek API based on the question content
 * @param question The user's question
 * @returns boolean True if we should use DeepSeek API
 */
export function shouldUseDeepSeek(question: string): boolean {
  if (!question) return false;
  
  // Convert to lowercase for easier matching
  const lowerQuestion = question.toLowerCase();
  
  // Keywords that suggest we should use DeepSeek for broader knowledge
  const deepSeekKeywords = [
    'history',
    'science',
    'mathematics',
    'physics',
    'chemistry',
    'biology',
    'literature',
    'philosophy',
    'economics',
    'psychology',
    'general',
    'what is',
    'who is',
    'when was',
    'explain',
    'define'
  ];
  
  // If the question contains any of these keywords, use DeepSeek
  return deepSeekKeywords.some(keyword => lowerQuestion.includes(keyword));
}