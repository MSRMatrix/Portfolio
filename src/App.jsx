import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Abilities from './components/abilities/Abilities'
import About from './components/about/About'
import ContactMe from './components/contactme/ContactMe'
import Projects from './components/projects/Projects'
import Workbackground from './components/workbackground/Workbackground'
function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <Dashboard />,
      children: [
        {
      path: "abilities",
      element: <Abilities />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact-me",
      element: <ContactMe />
    },
    {
      path: "projects",
      element: <Projects />
    },
    {
      path: "workbackground",
      element: <Workbackground />
    },
      ]
    },
    
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
