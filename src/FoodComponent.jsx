import React, { useState } from "react";

function FoodComponent() {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState("");

  const handleAddFood = () => {
    setFoods([...foods, newFood]);
    setNewFood("");
  };

  const handleFoodChange = (event) => {
    setNewFood(event.target.value);
  };

  const handleRemoveFood = (food) => {
    setFoods(foods.filter((elem) => elem !== food));
  };

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold">List of food:</h1>
      <ul className="p-5">
        {foods.length > 0 ? (
          foods.map((food, index) => (
            <li key={index} className="text-xl font-semibold">
              <button
                onClick={() => handleRemoveFood(food)}
                className="text-red-500 pr-5"
              >
                X
              </button>
              {index + 1}. {food}
            </li>
          ))
        ) : (
          <p className="text-xl font-semibold text-neutral-500">
            No items available !
          </p>
        )}
      </ul>
      <input
        className="bg-neutral-200 p-2 rounded mr-1 text-xl font-semibold"
        type="text"
        value={newFood}
        onChange={handleFoodChange}
        placeholder="Enter food name"
      />
      <button
        onClick={handleAddFood}
        className="bg-blue-400 p-2 rounded text-xl font-semibold"
      >
        Add food
      </button>
    </div>
  );
}

export default FoodComponent;
