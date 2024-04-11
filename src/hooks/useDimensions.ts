import { useEffect, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setDimensions({
      // width: window.screen.width,
      width: window.innerWidth,
      // height: window.screen.height,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    ...dimensions,
  };
};
