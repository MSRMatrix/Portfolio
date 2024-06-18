import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Navigation from "../navbar/Navigation"

const Dashboard = () => {
    return(
    <>
    <Navigation />
    <div className="test">
    <Outlet />    
    </div>
    <Footer />
    </>
    )
}

export default Dashboard