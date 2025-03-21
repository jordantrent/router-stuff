import { Menu } from "lucide-react";

interface MobileTopBarProps {
  onClick: () => void;
}

export const MobileTopBar = ({ onClick }: MobileTopBarProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className="menu-button" onClick={handleClick}>
      <Menu />
    </button>
  );
};
