import { useState } from "react";
import IngredientList from "./components/IngredientList/IngredientList.jsx";
import BurgerStack from "./components/IngredientList/BurgerStack.jsx";
import "./App.css";

function App() {
  const [stack, setStack] = useState([]);

  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];
  const addIngredient = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };
  const removeIngredient = (ingredientToRemove) => {
    const newStack = stack.filter((ingredient) => ingredient.name !== ingredientToRemove.name);
    setStack(newStack);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <IngredientList
        ingredients={availableIngredients}
        addIngredient={addIngredient}
      />
      <BurgerStack stack={stack} removeIngredient={removeIngredient} />
    </div>
  );
}

export default App;
