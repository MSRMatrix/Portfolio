import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from "../footer/Footer"
import Navigation from "../navbar/Navigation"
import { useState } from 'react';

const Dashboard = () => {
    const location = useLocation();
    const [exiting, setExiting] = useState(false);
    return(
    <>
     <Navigation />
     <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={(next) => {
        setExiting(true);
        return next();
      }}
      transition={{ duration: 1 }}
    >
      {exiting? null : <Outlet />}
    </motion.div>
    <Footer />
    </>
    )
}

export default Dashboard