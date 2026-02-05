// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeIngredient }) => {
  return (
    <div>
      <h2>Burger Stack</h2>
      {stack.map((ingredient, index) => (
        <div
          key={index}
          style={{
            backgroundColor: ingredient.color,
            padding: "10px",
            margin: "5px",
          }}
        >
          <span>{ingredient.name}</span>
          <button onClick={() => removeIngredient(ingredient)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default BurgerStack;
