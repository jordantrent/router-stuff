import "./sidebar.css";
import { Dropdown } from "./Dropdown.tsx";
import { modules } from "../data/modules.ts";

export const Sidebar = () => {
  return (
    <>
      {modules.map((module) => (
        <Dropdown key={module.id} module={module} lessons={module.lessons} />
      ))}
    </>
  );
};
