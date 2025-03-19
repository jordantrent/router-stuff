import { Outlet } from "react-router";
import { Sidebar } from "./components/sidebar.tsx";

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <main className="lesson-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
