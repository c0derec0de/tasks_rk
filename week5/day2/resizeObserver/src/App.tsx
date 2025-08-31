import { useSize } from "./hooks/useSize";

const getContent = (width: number) => {
  return width < 300
    ? { backgroundColor: "red", text: "маленькое" }
    : width < 600
    ? { backgroundColor: "yellow", text: "среднее" }
    : { backgroundColor: "green", text: "большое" };
};

const App = () => {
  const [size, ref] = useSize<HTMLDivElement>();

  const { backgroundColor, text } = getContent(size.width);

  return (
    <div
      ref={ref}
      style={{
        width: "50%",
        resize: "horizontal",
        overflow: "auto",
        border: "2px solid black",
        textAlign: "center",
        padding: "20px",
        backgroundColor: backgroundColor,
      }}
    >
      <h1>{text}</h1>
      <p>ширина: {size.width}px</p>
    </div>
  );
};

export default App;
