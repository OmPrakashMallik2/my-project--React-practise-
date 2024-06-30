import React, { useState } from "react";

function CarComponent() {
  const [cars, setCars] = useState([]);

  const [year, setYear] = useState(new Date().getFullYear());
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const addCarHandler = (event) => {
    event.preventDefault();
    const newCar = {
      brand: brand,
      model: model,
      year: year,
    };

    setCars([...cars, newCar]);
    setBrand("");
    setModel("");
    setYear(new Date().getFullYear());
  };

  const removeCarHandler = (index) => {
    setCars(cars.filter((elem, i) => i !== index));
  };

  return (
    <div className="m-5 p-5">
      <h1 className="text-2xl font-bold">List of car: </h1>
      <ul className="p-5">
        {cars.map((car, index) => (
          <li key={index} className="text-xl font-semibold p-1">
            {index + 1}. {car.brand} {car.model} {car.year}
            <button
              onClick={() => removeCarHandler(index)}
              className="text-red-500 ml-3"
            >
              remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={addCarHandler} className="flex justify-between">
        <input
          type="text"
          value={brand}
          onChange={handleBrandChange}
          placeholder="Brand"
          required
          className="text-xl font-semibold text-neutral-800 p-2 bg-neutral-100 w-60 rounded"
        />
        <input
          type="text"
          value={model}
          onChange={handleModelChange}
          placeholder="Model"
          required
          className="text-xl font-semibold text-neutral-800 p-2 bg-neutral-100 w-60 rounded"
        />
        <input
          type="text"
          value={year}
          onChange={handleYearChange}
          placeholder="Year"
          required
          className="text-xl font-semibold text-neutral-800 p-2 bg-neutral-100 w-60 rounded"
        />
        <button
          type="submit"
          className="text-xl font-semibold text-white p-2 bg-blue-500 w-40 rounded"
        >
          Add car
        </button>
      </form>
    </div>
  );
}

export default CarComponent;
