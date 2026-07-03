import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const read = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };
  const [value, setValue] = useState(read); //로컬스토리지의 기존값-> 초기값

  //로컬스토리지에 값 저장
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //로컬스토리지에 값 제거
  const remove = () => {
    window.localStorage.removeItem(key); //삭제
    setValue(initialValue); //초기화
  };
  return [value, setValue, remove];
}
