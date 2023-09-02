import { App } from "components/App";
import ReactDOM from "react-dom/client";
import "styles/globals.css";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(<App />);
