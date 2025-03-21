import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar.tsx";
import { MobileTopBar } from "./components/MobileTopBar.tsx";
import { useState, useEffect } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 799);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 799);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMobileMenuClick = () => {
    setMenuVisible((prev) => !prev);
  };

  const sidebarStyle = menuVisible
    ? "sidebar-container"
    : "sidebar-container-show";

  return (
    <>
      <div className="mobile-topbar-container">
        <MobileTopBar onClick={onMobileMenuClick} />
      </div>
      <div className="app-container">
        <div className={isMobile ? sidebarStyle : "sidebar-container"}>
          <Sidebar />
        </div>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
