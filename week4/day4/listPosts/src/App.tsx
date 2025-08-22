import { postLoaderModelFactory } from "./app/factory/postLoaderModelFactory";
import { ListLoader } from "./components/PostLoader";

const modelA = postLoaderModelFactory("modelA");
const modelB = postLoaderModelFactory("modelB");

function App() {
  return (
    <>
      <ListLoader model={modelA} />
      <ListLoader model={modelB} />
    </>
  );
}

export default App;
