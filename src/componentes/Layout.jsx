import Navbar from "./Home/Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => (
  <>
    <Navbar />
    <main style={{ padding: "2rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
      <Outlet />
    </main>
  </>
);

export default Layout;
