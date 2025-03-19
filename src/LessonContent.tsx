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
    <div>
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
    </div>
  );
};

export default LessonContent;
