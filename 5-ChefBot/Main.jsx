import React from "react"
import IngredientsList from "./src/components/IngredientsList.jsx"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    )
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
        recipeSection.current.scrollIntoView()
    }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <div className="recipe-markdown" dangerouslySetInnerHTML={{ __html: recipe }} />}
        </main>
    )
}