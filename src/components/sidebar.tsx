import "./sidebar.css";
import { Dropdown } from "./dropdown.tsx";
import { modules } from "../data/modules.ts";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {modules.map((module) => (
        <Dropdown key={module.id} module={module} lessons={module.lessons} />
      ))}
    </div>
  );
};
