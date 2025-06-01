import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar.jsx"

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        
    </div>
  )
}

export default Layout
