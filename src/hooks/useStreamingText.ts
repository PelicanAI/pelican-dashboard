import { useState, useEffect, useRef } from 'react';

interface UseStreamingTextOptions {
  speed?: number;
  startDelay?: number;
}

interface UseStreamingTextReturn {
  displayedText: string;
  isStreaming: boolean;
  isComplete: boolean;
  reset: () => void;
}

export function useStreamingText(
  fullText: string,
  options: UseStreamingTextOptions = {}
): UseStreamingTextReturn {
  const { speed = 15, startDelay = 800 } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const reset = () => {
    setDisplayedText('');
    setIsStreaming(false);
    setIsComplete(false);
    setHasStarted(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    reset();

    // Start delay before streaming begins
    timeoutRef.current = window.setTimeout(() => {
      setHasStarted(true);
      setIsStreaming(true);
    }, startDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fullText, startDelay]);

  useEffect(() => {
    if (!hasStarted || !fullText) return;

    const words = fullText.split(/(\s+)/);
    let currentWordIndex = 0;

    intervalRef.current = window.setInterval(() => {
      if (currentWordIndex < words.length) {
        // Add words in chunks for more natural streaming
        const chunk = words.slice(currentWordIndex, currentWordIndex + 2).join('');
        setDisplayedText((prev) => prev + chunk);
        currentWordIndex += 2;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsStreaming(false);
        setIsComplete(true);
      }
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hasStarted, fullText, speed]);

  return {
    displayedText,
    isStreaming,
    isComplete,
    reset,
  };
}
