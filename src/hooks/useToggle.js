import { useState } from "react";

export default function useToggle(initial = false) {
  // const [on, setOn] = useState(Boolean(initial));
  const [on, setOn] = useState(!!initial);

  const toggle = () => {
    setOn(prev => !prev);
  };
  const setTrue = () => {
    setOn(true);
  };
  const setFalse = () => {
    setOn(false);
  };
  return [on, toggle, { setTrue, setFalse }];
}
