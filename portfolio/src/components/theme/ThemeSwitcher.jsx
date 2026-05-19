"use client";

import React from 'react';
import { useTheme } from './ThemeProvider';
import { BsMoonStars, BsSun, BsTerminal } from 'react-icons/bs';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-lg transition-all ${
          theme === 'light' 
            ? 'bg-primary text-white shadow-lg' 
            : 'text-muted hover:text-foreground hover:bg-white/5'
        }`}
        title="Light Mode"
      >
        <BsSun className="text-lg" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-lg transition-all ${
          theme === 'dark' 
            ? 'bg-primary text-white shadow-lg' 
            : 'text-muted hover:text-foreground hover:bg-white/5'
        }`}
        title="Dark Mode"
      >
        <BsMoonStars className="text-lg" />
      </button>
      <button
        onClick={() => setTheme('hacker')}
        className={`p-2 rounded-lg transition-all ${
          theme === 'hacker' 
            ? 'bg-primary text-black shadow-lg shadow-primary/20' 
            : 'text-muted hover:text-primary hover:bg-white/5'
        }`}
        title="Hacker Mode"
      >
        <BsTerminal className="text-lg" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
