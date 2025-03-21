import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar.tsx";
import { MobileTopBar } from "./components/MobileTopBar.tsx";

function App() {
  return (
    <>
      <MobileTopBar />
      <div className="app-container">
        <Sidebar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
