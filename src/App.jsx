import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Abilities from "./components/abilities/Abilities";
import About from "./components/about/About";
import ContactMe from "./components/contactme/ContactMe";
import Projects from "./components/projects/Projects";
import Workbackground from "./components/workbackground/Workbackground";
import Startsite from "./components/startsite/Startsite";
import kiMan from "/src/assets/ki-man.png";
import kiWoman from "/src/assets/ai-woman.png";
import styled from 'styled-components';
import { useEffect, useState } from "react";

const HtmlDiv = styled.div`
  transition: 1s all ease-in-out;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: ${({ $choosedPic }) => `url(${$choosedPic})`};
`;

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [choosedPic, setChoosedPic] = useState(kiMan);

  useEffect(() => {
    const pictures = [kiMan, kiWoman];
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
      setChoosedPic(pictures[(currentIndex + 1) % pictures.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <HtmlDiv $choosedPic={choosedPic}>
      <RouterProvider router={router} />
    </HtmlDiv>
  );
}

export default App;
