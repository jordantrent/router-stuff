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
    if (isMobile) {
      setMenuVisible((prev) => !prev);
    }
  };

  const onPageExpandClick = () => {
    setMenuVisible((prev) => !prev);
  };

  const sidebarStyleMobile = menuVisible
    ? "sidebar-container-mobile"
    : "sidebar-container-show";

  const sidebarStyle = menuVisible
    ? "sidebar-container-hidden"
    : "sidebar-container";

  return (
    <>
      <div className="mobile-topbar-container">
        <MobileTopBar onClick={onMobileMenuClick} />
      </div>
      <div className="app-container">
        <div className={isMobile ? sidebarStyleMobile : sidebarStyle}>
          <Sidebar onClick={onMobileMenuClick} />
        </div>
        <div className="page-content">
          <Outlet context={{ onPageExpandClick, menuVisible, isMobile }} />
        </div>
      </div>
    </>
  );
}

export default App;
