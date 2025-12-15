import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getSeason, type Season } from "./SeasonalEffects";
import { useTheme } from "next-themes";

interface SeasonSwitcherProps {
  season: Season;
  onSeasonChange: (season: Season) => void;
}

const seasonLabels: Record<Season, string> = {
  winter: "Winter",
  spring: "Spring",
  summer: "Summer",
  autumn: "Fall",
};

export function SeasonSwitcher({ season, onSeasonChange }: SeasonSwitcherProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed top-4 z-50" style={{ right: '1rem' }}>
      <Select
        value={season}
        onValueChange={(value) => onSeasonChange(value as Season)}
      >
        <SelectTrigger 
          className="w-[140px] bg-white/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white/95 shadow-md text-slate-900 dark:text-slate-50"
          style={{
            backgroundColor: isDark ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
          }}
          onMouseEnter={(e) => {
            if (isDark) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          <SelectValue placeholder="Select season" />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-slate-800">
          <SelectItem 
            value="winter"
            className="text-slate-900 dark:text-slate-50 hover:text-slate-900 dark:hover:text-slate-100 focus:text-slate-900 dark:focus:text-slate-100"
          >
            {seasonLabels.winter}
          </SelectItem>
          <SelectItem 
            value="spring"
            className="text-slate-900 dark:text-slate-50 hover:text-slate-900 dark:hover:text-slate-100 focus:text-slate-900 dark:focus:text-slate-100"
          >
            {seasonLabels.spring}
          </SelectItem>
          <SelectItem 
            value="summer"
            className="text-slate-900 dark:text-slate-50 hover:text-slate-900 dark:hover:text-slate-100 focus:text-slate-900 dark:focus:text-slate-100"
          >
            {seasonLabels.summer}
          </SelectItem>
          <SelectItem 
            value="autumn"
            className="text-slate-900 dark:text-slate-50 hover:text-slate-900 dark:hover:text-slate-100 focus:text-slate-900 dark:focus:text-slate-100"
          >
            {seasonLabels.autumn}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

