import React from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function DemoLocalStorage() {
  const [name, setName, reset] = useLocalStorage("name", "");
  return (
    <div>
      <input
        placeholder="이름 입력"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={reset}>reset</button>
      <p>
        저장된 값: <b>{name}</b>
      </p>
    </div>
  );
}
