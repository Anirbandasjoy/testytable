import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Menu from "../components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default router;
