import React from "react";
import useToggle from "../hooks/useToggle.js";

export default function DemoToggle() {
  // const test = useToggle(false);
  // console.log(test);
  const [on, toggle, { setTrue, setFalse }] = useToggle(false);
  return (
    <div>
      <p>
        상태: <b>{String(on)}</b>
      </p>
      <button onClick={toggle}>toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
    </div>
  );
}
