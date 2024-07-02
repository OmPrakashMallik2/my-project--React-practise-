import React from "react";

function Component4(props) {
  return (
    <div className="border-2 border-red-500 p-5 m-5">
      <h1>Component 4</h1>
      <h2>Hello {props.username}</h2>
    </div>
  );
}

export default Component4;
