import "./sidebar.css";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";

type Lesson = {
  id: string;
  title: string;
  content: string;
};

type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

interface DropdownProps {
  module: Module;
  lessons: Lesson[];
}

export const Dropdown = ({ module, lessons }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onHeaderClick = (moduleId: string) => {
    setIsOpen((prev) => !prev);
    navigate(`/modules/${moduleId}`);
  };

  const onLessonClick = (moduleId: string, lessonId: string) => {
    navigate(`/modules/${moduleId}/lessons/${lessonId}`);
  };

  return (
    <>
      <div className="sidebar-header">
        <button
          className="sidebar-header-button"
          onClick={() => onHeaderClick(module.id)}
        >
          {module.title}
        </button>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </div>
      <div className={`sidebar-items ${isOpen ? "open" : ""}`}>
        {lessons.map((lesson) => (
          <button
            className="sidebar-item-button-selected"
            onClick={() => onLessonClick(module.id, lesson.id)}
          >
            {lesson.title}
          </button>
        ))}
      </div>
    </>
  );
};
