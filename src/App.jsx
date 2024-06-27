import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Abilities from "./components/abilities/Abilities";
import About from "./components/about/About";
import ContactMe from "./components/contactme/ContactMe";
import Projects from "./components/projects/Projects";
import Workbackground from "./components/workbackground/Workbackground";
import Startsite from "./components/startsite/Startsite";

function App() {
  const router = createBrowserRouter([
    {
      element: <Dashboard />,
      children: [
        {
          path: "*",
          element: <Startsite />,
        },
        {
          path: "abilities",
          element: <Abilities />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact-me",
          element: <ContactMe />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "workbackground",
          element: <Workbackground />,
        },
      ],
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
