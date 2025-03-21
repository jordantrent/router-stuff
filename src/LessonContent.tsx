import { useOutletContext } from "react-router";

type Lesson = {
  id: string;
  title: string;
  content: string;
};

const LessonContent = () => {
  const lesson = useOutletContext<Lesson | undefined>();
  if (!lesson) {
    return <div>No lesson selected</div>;
  }

  return (
    <>
      <div className="lesson-title">
        <h2>{lesson.title}</h2>
      </div>
      <div className="lesson-body">
        <p>{lesson.content}</p>
      </div>
    </>
  );
};

export default LessonContent;
