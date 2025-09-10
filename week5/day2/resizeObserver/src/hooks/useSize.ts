import { useState, useLayoutEffect, useRef } from "react";

interface ElementSize {
  width: number;
  height: number;
}

export const useSize = <T extends HTMLElement>(): [
  ElementSize,
  React.RefObject<T | null>
] => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      });
    });

    ro.observe(element);

    return () => {
      ro.disconnect();
    };
  }, []);

  return [size, ref];
};
