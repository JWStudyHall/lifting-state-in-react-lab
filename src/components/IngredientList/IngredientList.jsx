// src/components/IngredientList/IngredientList.jsx
// import availableIngredients from "App.jsx";

const IngredientList = ({ingredients, addIngredient}) => {
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index} style={{ margin: "8px" }}>
          <span>{ingredient.name}</span>
          <button onClick={() => addIngredient(ingredient)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
