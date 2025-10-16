"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        userIsLoggedIn,
        setUserIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext(AppContext);
}
