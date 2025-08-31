import { useState, useRef, useEffect } from "react";
import { ChildList } from "./ChildList";

const config: MutationObserverInit = {
  attributes: true,
  childList: true,
  subtree: true,
};

export const Parent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !isVisible) return;

    const callback = (mutationList: MutationRecord[]) => {
      for (const mutation of mutationList) {
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
  }, [isVisible]);

  return (
    <div ref={containerRef}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Скрыть" : "Показать"} список
      </button>
      {isVisible && <ChildList />}
    </div>
  );
};
