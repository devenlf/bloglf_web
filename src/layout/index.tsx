import { Outlet } from "react-router-dom";
import "./index.css"
const Layout = () => {
  return (
    <div className="content">
       <Outlet />
    </div>
  )
}

export default Layout
