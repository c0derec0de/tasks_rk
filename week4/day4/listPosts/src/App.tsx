import { postLoaderModelFactory } from "./app/factory/postLoaderModelFactory";
import { ListLoader } from "./components/PostLoader";

function App() {
  return (
    <>
      <ListLoader model={postLoaderModelFactory("aModel")} />
      <ListLoader model={postLoaderModelFactory("bModel")} />
    </>
  );
}

export default App;
