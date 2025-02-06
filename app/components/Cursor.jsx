"use client";

import React, { useRef } from "react";

function Cursor({ children }) {
  const cursorRef = useRef();
  const cursorHandler = (e) => {
    const cursor = cursorRef.current;
    if (cursor) {
      const x = e.pageX;
      const y = e.pageY;
      cursor.style.top = y - 7 + "px";
      cursor.style.left = x - 7 + "px";
    }
  };

  return (
    <div onMouseMove={() => cursorHandler} onScroll={() => cursorHandler}>
      <div className="cursor z-[999]" ref={cursorRef}></div>
      {children}
    </div>
  );
}

export default Cursor;
