"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Définition du type pour le contexte
type ThemeContextType = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  mounted: boolean;
  isDark: boolean;
};

// Création du contexte avec des valeurs par défaut
const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  setTheme: () => {},
  mounted: false,
  isDark: true,
});

// Hook personnalisé pour utiliser le contexte de thème
export const useThemeContext = () => useContext(ThemeContext);

// Composant qui fournit le contexte de thème
function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Déterminer si le thème actuel est sombre
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Valeurs à fournir au contexte
  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    mounted,
    isDark,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Composant principal qui combine ThemeProvider et notre contexte personnalisé
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={true}
      disableTransitionOnChange
    >
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </ThemeProvider>
  );
}