import React, { useState } from "react";
import Ingredients from "./components/Ingredients.jsx";
import "./App.css";
import AddIngredients from "./components/AddIngredients.jsx";
import Header from "./components/Header.jsx";
import ClaudeRenderData from "./components/ClaudeRenderData.jsx";
import { generateText } from "./services/geminiGeneratedText.js";
import ThinkingLoader from "./components/Loader.jsx";

function App() {
  const [loader, setLoader] = useState(false);
  const [ingredients, setIngridient] = React.useState([]);
  const [recipe, setRecipe] = useState("");

  const handleFormAction = (formData) => {
    setIngridient((prevIngredients) => [
      ...prevIngredients,
      formData.get("ingridient"),
    ]);
  };

  async function toggle() {
    try {
      setLoader(true);
      const data = await generateText(ingredients);
      setRecipe(data);
    } catch (error) {
      console.log("Some Error has occured");
    } finally {
      setLoader(false);
    }
  }
  return (
    <>
      <Header />
      <main>
        <AddIngredients handleFormAction={handleFormAction} />
        {ingredients.length > 0 && (
          <Ingredients ingredients={ingredients} toggle={toggle} />
        )}
      </main>
      {loader && <ThinkingLoader />}
      {recipe && <ClaudeRenderData recipe={recipe} />}
    </>
  );
}

export default App;
