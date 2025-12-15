import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 bg-white/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white/95"
        style={{ 
          color: '#0f172a',
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 bg-white/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white/95"
      style={{ 
        color: isDark ? '#f1f5f9' : '#0f172a',
        backgroundColor: isDark ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
      }}
      onMouseEnter={(e) => {
        if (isDark) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}

