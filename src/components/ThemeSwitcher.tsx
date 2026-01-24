"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" />
    );
  }

  const handleToggle = () => {
    const newTheme = theme === "dark" || resolvedTheme === "dark" ? "light" : "dark";
    console.log("Switching theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
