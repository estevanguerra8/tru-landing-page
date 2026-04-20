"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 border border-violet-200/40 dark:border-violet-800/40 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 border border-violet-200 dark:border-violet-800 hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-200 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <Sun className="w-4 h-4 text-violet-500 absolute transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <Moon className="w-4 h-4 text-violet-400 absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
