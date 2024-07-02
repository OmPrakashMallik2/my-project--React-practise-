import React from "react";
import Component3 from "./Component3";

function Component2(props) {
  return (
    <div className="border-2 border-red-500 p-5 m-5">
      <h1>Component 2</h1>
      <h2>Hello {props.username}</h2>
      <Component3 username={props.username} />
    </div>
  );
}

export default Component2;
