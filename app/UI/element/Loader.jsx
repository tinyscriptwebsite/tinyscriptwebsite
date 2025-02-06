"use client";

import { useLoader } from "../../context/Load";
import React from "react";

const Loader = () => {
  const { load } = useLoader();
  
  return (
    load && (
      <div className="fixed h-screen w-screen overflow-hidden inset-0 bg-[#171517ba] bg-opacity-50 flex z-[100] items-center justify-center">
        <style>{`body { overflow: hidden; }`}</style>
        <div className="loader"></div>
      </div>
    )
  );
};

export default Loader;
