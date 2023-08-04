import { useEffect, useState, useCallback, useMemo } from "react";

export const useResizeObserver = ({
  onResize,
  skipUseState = false,
  debug = false,
} = {}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0];
        const data = {
          width: entry?.target.clientWidth || 0,
          height: entry?.target.clientHeight || 0,
        };

        if (debug) {
          console.log("Resize observer update", entry.target, data);
        }

        if (!skipUseState) {
          setDimensions(data);
        }
        onResize?.(data);
      }),
    []
  );

  const setRef = useCallback((ref) => {
    if (!ref) return;
    resizeObserver.observe(ref);
  }, []);

  useEffect(() => () => resizeObserver.disconnect(), [resizeObserver]);

  return { dimensions, setRef };
};
