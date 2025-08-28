import { useState, useRef, useEffect } from "react";
import { ChildList } from "./ChildList";

export const Parent = () => {
  const [mounting, setMounting] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !mounting) return;

    const config = {
      attributes: true,
      childList: true,
      subtree: true,
    };

    const callback = (mutationList: MutationRecord[]) => {
      for (const mutation of mutationList) {
        // следит за изменениями потомка
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            console.log("Добавлен элемент:", node);
          });
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(containerRef.current, config);

    return () => observer.disconnect();
  }, [mounting]);

  return (
    <div ref={containerRef}>
      <button onClick={() => setMounting(!mounting)}>
        {mounting ? "Скрыть" : "Показать"} список
      </button>
      {mounting && <ChildList />}
    </div>
  );
};
