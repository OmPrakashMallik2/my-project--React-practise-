import React, { useState } from "react";

function CarComponent() {
  const [car, setCar] = useState({
    brand: "Mahindra",
    model: "XUV 700",
    year: "2023",
  });

  const handleBrandChange = (event) => {
    setCar((c) => ({ ...car, brand: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar({ ...car, model: event.target.value });
  };
  const handleYearChange = (event) => {
    setCar({ ...car, year: event.target.value });
  };
  return (
    <div className="m-5 p-5">
      <h1 className="text-3xl font-bold text-neutral-900 py-3">
        {car.brand} {car.model} {car.year} is a good car.
      </h1>

      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={car.brand}
          onChange={handleBrandChange}
          placeholder="Brand"
          className="text-2xl font-semibold text-neutral-700 p-3 bg-slate-200 w-60 rounded"
        />
        <input
          type="text"
          value={car.model}
          onChange={handleModelChange}
          placeholder="Model"
          className="text-2xl font-semibold text-neutral-700 p-3 bg-slate-200 w-60 rounded"
        />
        <input
          type="text"
          value={car.year}
          onChange={handleYearChange}
          placeholder="Year"
          className="text-2xl font-semibold text-neutral-700 p-3 bg-slate-200 w-60 rounded"
        />
      </div>
    </div>
  );
}

export default CarComponent;
