import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Country from "./pages/Country";
import { Contact } from "./pages/Contact";
import { Applayout } from "./components/Applayout";
import { Errorpage } from "./pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> }, 
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
