"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface AppContextType {
  currentCategoryId: number | null;
  setCurrentCategoryId: (id: number | null) => void;
  currentCategory: Category | null;
  setCurrentCategory: (category: Category | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentCategoryId, setCurrentCategoryId] = useState<number | null>(
    null,
  );
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  return (
    <AppContext.Provider
      value={{
        currentCategoryId,
        setCurrentCategoryId,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
