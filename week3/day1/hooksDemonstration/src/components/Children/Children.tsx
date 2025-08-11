import { useEffect } from "react";

export const Children = () => {
  useEffect(() => {
    console.log(
      "%cКомпонент Children монтирован.",
      "color: green; font-weight: bold;"
    );

    return () => {
      console.log(
        "%cCleanup Children после размонтирования.",
        "color: red; font-weight: bold;"
      );
    };
  }, []);

  return (
    <div>
      <h3>Children компонент</h3>
    </div>
  );
};
