
import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce.js';

export default function DemoDebounce(){

  return (
    <div>
      <input placeholder="500ms 디바운스" />
      <p>즉시 값: {}</p>
      <p>디바운스 값: <b>{}</b></p>
    </div>
  );
}
