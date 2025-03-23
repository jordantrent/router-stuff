import { useParams } from "react-router";
import { modules } from "./data/modules";
import { Outlet, useOutletContext } from "react-router";
import { MoveLeft, MoveRight, Dot } from "lucide-react";

function ModuleContent() {
  const { onPageExpandClick, menuVisible, isMobile } = useOutletContext<{
    onPageExpandClick: () => void;
    menuVisible: boolean;
    isMobile: boolean;
  }>();

  const { moduleId, lessonId } = useParams<{
    moduleId: string;
    lessonId?: string;
  }>();

  const module = modules.find((module) => module.id === moduleId);
  if (!module) {
    return <div>Module not found</div>;
  }

  const lesson = lessonId
    ? module.lessons.find((lesson) => lesson.id === lessonId)
    : undefined;

  return (
    <>
      <div className="module-header">
        {isMobile ? (
          <Dot />
        ) : (
          <button className="menu-button" onClick={onPageExpandClick}>
            {menuVisible ? <MoveRight /> : <MoveLeft />}
          </button>
        )}
        {module.title}
      </div>
      <div className="module-content">
        <hr />
        <Outlet context={lesson} />
      </div>
    </>
  );
}

export default ModuleContent;
