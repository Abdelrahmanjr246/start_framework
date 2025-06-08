import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';


const titles = {
  '/home': 'Home',
  '/about': 'About Us',
  '/portfolio': 'Portfolio',
  '/contact': 'Contact',
};
export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname];
  }, [location]);

  return (
    <div className="d-flex flex-column">
      <Helmet/>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
