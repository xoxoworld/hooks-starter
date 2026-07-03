import React, { useState } from "react";
import DemoToggle from "./examples/DemoToggle.jsx";
import DemoLocalStorage from "./examples/DemoLocalStorage.jsx";
import DemoDebounce from "./examples/DemoDebounce.jsx";
import ModalDemo from "./pages/ModalDemo.jsx";
import AccordionDemo from "./pages/AccordionDemo.jsx";

const demos = [
  { key: "toggle", label: "useToggle", comp: <DemoToggle /> },
  { key: "ls", label: "useLocalStorage", comp: <DemoLocalStorage /> },
  { key: "debounce", label: "useDebounce", comp: <DemoDebounce /> },
];

export default function App() {
  const [tab, setTab] = useState(demos[0].key);
  const active = demos.find(d => d.key === tab);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 20, lineHeight: 1.5 }}>
      <h1>React Custom Hooks: 실습</h1>
      <p style={{ marginTop: 0, color: "#555" }}>각 탭을 눌러 훅 데모를 확인한다.</p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {demos.map(d => (
          <button
            key={d.key}
            onClick={() => setTab(d.key)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: 8,
              background: tab === d.key ? "#eef" : "#fff",
              cursor: "pointer",
            }}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>{active?.comp}</div>
      <hr />
      <ModalDemo />
      <hr />
      <AccordionDemo />
    </div>
  );
}
