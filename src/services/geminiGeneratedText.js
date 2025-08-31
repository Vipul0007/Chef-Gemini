import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_STUDIO_API;

// Initialize the GoogleGenerativeAI client with your API key
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generateText = async (ingredients) => {

  const PROMPT = `Can you generate me recipe of a food item that uses ${ingredients.join(",")} ingredients, and please make sure that the recipe generated has majorly these ingredients and not many ingredients. Also Please generate me data in html tags, without the html boiler plate only wrap it in div and if you want you can apply inline styles for text, font not color of font family such that I can directly render it on my website. Also dont generate me any formal greeting message just the html of the formatted response.`
      try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const generatedContent = await model.generateContent(PROMPT);
      const response = await generatedContent.response;
      const text = response.text();
      return text;
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to generate content. Please check the console for details.');
    }
  };

