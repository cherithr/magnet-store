"use client";

import { useState, useEffect } from "react";

export function useCountdown(minutes = 15) {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : minutes * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes]);

  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return { m, s, total: seconds };
}
