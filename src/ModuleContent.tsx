import { useParams } from "react-router";
import { modules } from "./data/modules";
import { Outlet } from "react-router";

function ModuleContent() {
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
      <div className="module-header">{module.title}</div>
      <div className="module-content">
        <hr />
        <Outlet context={lesson} />
      </div>
    </>
  );
}

export default ModuleContent;
