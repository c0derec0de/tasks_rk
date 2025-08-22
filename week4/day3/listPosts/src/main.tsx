import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "effector-react";
import { fork } from "effector";
const scope = fork();
createRoot(document.getElementById("root")!).render(
  <Provider value={scope}>
    <App />
  </Provider>
);
