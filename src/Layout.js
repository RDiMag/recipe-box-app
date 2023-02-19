import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="topnav">
        
        <span>
          <Link className="link" to="/">Home</Link>
        </span>

        <span>
          <Link className="link" to="/login">Log In</Link>
        </span>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
