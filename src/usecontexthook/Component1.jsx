import React, { useState } from "react";
import Component2 from "./Component2";

function Component1() {
  const [user, setUser] = useState("OPM");
  return (
    <div className="border-2 border-red-500 p-5 m-5">
      <h1>Component 1</h1>
      <h2>Hello {user}</h2>
      <Component2 username={user} />
    </div>
  );
}

export default Component1;
