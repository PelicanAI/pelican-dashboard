import { useState, useEffect, useCallback } from 'react';
import { PELICAN_PROMPTS, PROMPT_ROTATION_INTERVAL } from '../data/prompts';
import type { PelicanPrompt } from '../types';

interface UsePromptRotationReturn {
  currentPrompt: PelicanPrompt;
  nextPrompts: PelicanPrompt[];
  timeUntilNext: number;
  progress: number;
  currentIndex: number;
}

export function usePromptRotation(): UsePromptRotationReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeUntilNext, setTimeUntilNext] = useState(PROMPT_ROTATION_INTERVAL / 1000);

  const getNextPrompts = useCallback((index: number): PelicanPrompt[] => {
    const prompts: PelicanPrompt[] = [];
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (index + i) % PELICAN_PROMPTS.length;
      prompts.push(PELICAN_PROMPTS[nextIndex]);
    }
    return prompts;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilNext((prev) => {
        if (prev <= 1) {
          setCurrentIndex((idx) => (idx + 1) % PELICAN_PROMPTS.length);
          return PROMPT_ROTATION_INTERVAL / 1000;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = ((PROMPT_ROTATION_INTERVAL / 1000 - timeUntilNext) / (PROMPT_ROTATION_INTERVAL / 1000)) * 100;

  return {
    currentPrompt: PELICAN_PROMPTS[currentIndex],
    nextPrompts: getNextPrompts(currentIndex),
    timeUntilNext,
    progress,
    currentIndex,
  };
}
