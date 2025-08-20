import { ListLoader } from "./components/PostLoader";
import { postLoaderModelFactory } from "./app/factory/postLoaderModelFactory";

function App() {
  return (
    <>
      <ListLoader model={postLoaderModelFactory} />
      <ListLoader model={postLoaderModelFactory} />
    </>
  );
}

export default App;
