import React from "react";
import Component4 from "./Component4";

function Component3(props) {
  return (
    <div className="border-2 border-red-500 p-5 m-5">
      <h1>Component 3</h1>
      <h2>hello {props.username}</h2>
      <Component4 username={props.username} />
    </div>
  );
}

export default Component3;
