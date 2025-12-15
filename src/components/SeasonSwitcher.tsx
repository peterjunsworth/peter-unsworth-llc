import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getSeason, type Season } from "./SeasonalEffects";

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
  return (
    <div className="fixed top-4 z-50" style={{ right: '1rem' }}>
      <Select
        value={season}
        onValueChange={(value) => onSeasonChange(value as Season)}
      >
        <SelectTrigger 
          className="w-[140px] bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white/95 shadow-md"
          style={{ color: '#0f172a' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0f172a';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#0f172a';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          }}
        >
          <SelectValue placeholder="Select season" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem 
            value="winter"
            className="text-slate-900 hover:text-slate-900 focus:text-slate-900"
            style={{ color: '#0f172a' }}
          >
            {seasonLabels.winter}
          </SelectItem>
          <SelectItem 
            value="spring"
            className="text-slate-900 hover:text-slate-900 focus:text-slate-900"
            style={{ color: '#0f172a' }}
          >
            {seasonLabels.spring}
          </SelectItem>
          <SelectItem 
            value="summer"
            className="text-slate-900 hover:text-slate-900 focus:text-slate-900"
            style={{ color: '#0f172a' }}
          >
            {seasonLabels.summer}
          </SelectItem>
          <SelectItem 
            value="autumn"
            className="text-slate-900 hover:text-slate-900 focus:text-slate-900"
            style={{ color: '#0f172a' }}
          >
            {seasonLabels.autumn}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

