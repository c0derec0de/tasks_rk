type ChildrenProps = {
  title: string;
};

export const Children = ({ title }: ChildrenProps) => {
  console.log(`%cChildren ${title} рендерится`, "color: orange;");
  return (
    <div>
      <h3>Children компонент {title}</h3>
    </div>
  );
};
