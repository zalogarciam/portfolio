"use client";

import { useState, useEffect } from "react";

const ANIMATION_TEXT = "ACCESSING_PORTFOLIO_DATA";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!%&*()_+";

const HackerSplash = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [revealedCount, setRevealedCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let iterations = 0;
    const maxIterations = ANIMATION_TEXT.length;
    
    // Single interval for both scrambling and revealing
    const interval = setInterval(() => {
      setDisplayText(() => {
        return ANIMATION_TEXT
          .split("")
          .map((char, index) => {
            if (index < Math.floor(iterations)) {
              return ANIMATION_TEXT[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(ANIMATION_TEXT); // Force final correct text
        setRevealedCount(maxIterations);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => onComplete(), 500);
        }, 800);
      }

      iterations += 0.25; // Control reveal speed
      setRevealedCount(Math.floor(iterations));
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-start transition-opacity duration-500 ${isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-2xl px-6 flex flex-col items-center">
        <div className="font-mono text-lg sm:text-2xl md:text-3xl tracking-tighter sm:tracking-widest text-center mb-10 w-full overflow-hidden whitespace-nowrap">
          {displayText.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                index < revealedCount
                  ? "text-accent transition-all duration-300"
                  : "text-muted/30"
              }`}
              style={index < revealedCount ? { textShadow: '0 0 15px rgb(var(--accent))' } : {}}
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full max-w-md">
          <div className="h-1.5 w-full bg-accent/10 rounded-full overflow-hidden border border-accent/20">
            <div 
              className="h-full bg-accent transition-all duration-300 ease-out"
              style={{ 
                width: `${(Math.min(revealedCount, ANIMATION_TEXT.length) / ANIMATION_TEXT.length) * 100}%`,
                boxShadow: '0 0 20px rgb(var(--accent))'
              }}
            />
          </div>

          <div className="mt-4 font-mono text-[10px] text-muted uppercase tracking-widest flex justify-between">
            <span>System Decryption</span>
            <span>{Math.min(Math.round((revealedCount / ANIMATION_TEXT.length) * 100), 100)}%</span>
          </div>
        </div>
      </div>

      {/* Background Grid Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-[-1] bg-[linear-gradient(rgba(var(--foreground),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--foreground),0.1)_1px,transparent_1px)]" style={{ backgroundSize: '100px 100px' }}></div>
    </div>
  );
};

export default HackerSplash;
