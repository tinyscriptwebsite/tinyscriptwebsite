"use client";

import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [load, setLoad] = useState(false);

  const showLoader = () => setLoad(true);
  const hideLoader = () => setLoad(false);

  return (
    <LoaderContext.Provider value={{ load, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  return context;
};
