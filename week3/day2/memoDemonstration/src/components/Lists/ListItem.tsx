type ListItemProps = {
  item: string;
};

export const ListItem = ({ item }: ListItemProps) => {
  console.log("ListItem компонент рендерится");
  return (
    <div>
      <h3>{item}</h3>
    </div>
  );
};
