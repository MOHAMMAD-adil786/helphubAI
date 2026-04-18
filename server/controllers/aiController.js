const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Check if API key is available
const isGeminiAvailable = () => {
  return !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.length > 10;
};

exports.getSuggestions = async (req, res) => {
  const { title, description } = req.body;

  // Return fallback immediately if API not available
  if (!isGeminiAvailable()) {
    console.log("Gemini API key not available, using fallback");
    return res.status(200).json({
      category: "Web Development",
      urgency: "Medium",
      tags: ["JavaScript", "React", "Frontend"],
      rewrite: description || "Help needed with technical issue"
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Analyze this help request from a community platform:
      Title: "${title}"
      Description: "${description}"

      Return a JSON object with:
      - category: One of [Web Development, Design, Career, Community]
      - urgency: One of [High, Medium, Low]
      - tags: Array of 3-5 relevant skills/topics
      - rewrite: A more professional/clearer 1-sentence version of the description.

      Return ONLY the JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Cleanup the response text to ensure it's valid JSON
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const suggestions = JSON.parse(jsonStr);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Gemini Error:", error.message);
    // Return mock response when API fails
    res.status(200).json({
      category: "Web Development",
      urgency: "Medium",
      tags: ["JavaScript", "React", "Frontend"],
      rewrite: description || "Help needed with technical issue"
    });
  }
};

exports.getOnboardingSuggestions = async (req, res) => {
  const { interests } = req.body;

  // Return fallback immediately if API not available
  if (!isGeminiAvailable()) {
    console.log("Gemini API key not available, using fallback");
    return res.status(200).json({
      canHelpWith: ["JavaScript", "HTML/CSS", "React Basics"],
      mightNeedHelpWith: ["Advanced React", "Node.js"]
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      A user on a tech community help platform has entered these interests: "${interests}".
      Based on this, suggest:
      1. canHelpWith: An array of 3-4 specific technical skills they likely know well and can mentor others on.
      2. mightNeedHelpWith: An array of 2-3 advanced or related topics where they might seek help.
      
      Return ONLY a JSON object with keys "canHelpWith" and "mightNeedHelpWith".
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Cleanup the response text to ensure it's valid JSON
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const suggestions = JSON.parse(jsonStr);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Gemini Onboarding Error:", error.message);
    // Return mock response when API fails
    res.status(200).json({
      canHelpWith: ["JavaScript", "HTML/CSS", "React Basics"],
      mightNeedHelpWith: ["Advanced React", "Node.js"]
    });
  }
};
