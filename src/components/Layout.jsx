import Navbar from './Navbar';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
