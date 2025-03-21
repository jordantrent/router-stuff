import "./sidebar.css";
import { Dropdown } from "./Dropdown.tsx";
import { modules } from "../data/modules.ts";

interface SidebarProps {
  onClick: () => void;
}

export const Sidebar = ({ onClick }: SidebarProps) => {
  return (
    <>
      {modules.map((module) => (
        <Dropdown
          onClick={onClick}
          key={module.id}
          module={module}
          lessons={module.lessons}
        />
      ))}
    </>
  );
};
