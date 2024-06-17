import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Navigation from "../navbar/Navigation"

const Dashboard = () => {
    return(
    <>
    <Navigation />
    <Outlet />
    
    <Footer />
    </>
        
    )
}

export default Dashboard