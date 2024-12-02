import { Outlet } from "react-router-dom";
import Header from "../../components/LayoutComponents/Header";
import SidBar from "../../components/LayoutComponents/SidBar";

const DashboardLayout = () => {
  return (
    <div className="lg:flex h-screen">
      <div className="lg:w-80 bg-[#02111E] lg:fixed lg:top-0 lg:left-0 lg:bottom-0 hidden lg:block">
        <SidBar />
      </div>

      <div className="lg:flex-1 lg:ml-80">
        <Header />
        <div className="p-4 bg-[#3A3C3B] h-screen text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
