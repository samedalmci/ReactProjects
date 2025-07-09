import { HfInference } from '@huggingface/inference';
const hf = new HfInference("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");

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const res = await hf.textGeneration({
            model: 'tiiuae/falcon-rw-1b',
            inputs: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!\n${SYSTEM_PROMPT}`,
            parameters: {
            max_new_tokens: 200,
            temperature: 0.7
            }
        });
          
        console.log(res.generated_text);        
        return res.generated_text
    } 
    catch (err) {
        console.error(err.message)
        return "An error occurred while generating the recipe.";
    }
}




