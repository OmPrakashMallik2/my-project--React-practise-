import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // useEffect(() => {
  //   document.title = `count: ${count} ${color}`;
  // }, [count, color]);
  document.title = `count: ${count} ${color}`;

  function addCount() {
    setCount((count) => count + 1);
  }

  function subCount() {
    setCount((count) => count - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div className="p-5 text-4xl">
      <h1 style={{ color: color }}>count: {count}</h1>
      <button type="button" onClick={addCount}>
        Add
      </button>
      <button type="button" onClick={subCount}>
        Subtract
      </button>{" "}
      <br />
      <button type="button" onClick={changeColor}>
        Change color
      </button>
    </div>
  );
}

export default UseEffectComponent;
