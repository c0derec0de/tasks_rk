import React from "react";

type ChildButtonProps = {
  onClick: () => void;
};

export const ChildButton = React.memo(({ onClick }: ChildButtonProps) => {
  console.log(`%cChildButton рендерится`, "color: orange;");
  return (
    <div>
      <button onClick={onClick}>ChildButton</button>
    </div>
  );
});
