import { useState, useEffect } from 'react';

type UseCountdownOptions = {
  onComplete?: () => void;
};

export const useCountdown = (initialSeconds: number, options?: UseCountdownOptions) => {
  const [countdown, setCountdown] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [shouldComplete, setShouldComplete] = useState(false);

  useEffect(() => {
    if (shouldComplete && options?.onComplete) {
      setShouldComplete(false);
      options.onComplete();
    }
  }, [shouldComplete, options]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        const newValue = prev - 1;

        if (newValue <= 0) {
          clearInterval(timer);
          setShouldComplete(true);
          return 0;
        }

        return newValue;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, options]);

  const start = () => {
    setCountdown(initialSeconds);
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const reset = () => {
    setCountdown(initialSeconds);
    setIsActive(false);
  };

  return { countdown, start, stop, reset, isActive };
};
