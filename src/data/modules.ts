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

export const modules: Module[] = [
  {
    id: "1",
    title: "Introduction to TypeScript",
    lessons: [
      {
        id: "11",
        title: "What is TypeScript?",
        content:
          "TypeScript is a statically typed superset of JavaScript that was developed by Microsoft. It enhances JavaScript by adding optional static typing, classes, interfaces, and other advanced features, making it an ideal choice for developers working on large-scale applications. TypeScript is fully compatible with JavaScript, meaning any valid JavaScript code is also valid TypeScript code. However, TypeScript introduces a robust type system that allows developers to define types for variables, function parameters, and return values, ensuring better error detection at compile time.",
      },
      {
        id: "12",
        title: "Setting Up TypeScript",
        content: "How to set up TypeScript in a project.",
      },
      {
        id: "13",
        title: "Basic Types",
        content: "Understanding primitive and complex types in TypeScript.",
      },
      {
        id: "14",
        title: "Interfaces & Types",
        content: "How to define and use interfaces and types in TypeScript.",
      },
      {
        id: "15",
        title: "Functions in TypeScript",
        content: "Exploring function signatures and type annotations.",
      },
    ],
  },
  {
    id: "2",
    title: "Advanced TypeScript",
    lessons: [
      {
        id: "21",
        title: "Generics",
        content:
          "Understanding generics and how to create reusable components.",
      },
      {
        id: "22",
        title: "Type Narrowing",
        content: "Techniques for refining types dynamically.",
      },
      {
        id: "23",
        title: "Utility Types",
        content: "Built-in utility types like Partial, Pick, and Omit.",
      },
      {
        id: "24",
        title: "Type Guards",
        content: "How to use type guards to ensure type safety.",
      },
      {
        id: "25",
        title: "Decorators",
        content: "Exploring decorators in TypeScript.",
      },
    ],
  },
  {
    id: "3",
    title: "React with TypeScript",
    lessons: [
      {
        id: "31",
        title: "Setting Up React with TypeScript",
        content: "Configuring a React project with TypeScript.",
      },
      {
        id: "32",
        title: "Typing Props",
        content: "How to define and use props in React components.",
      },
      {
        id: "33",
        title: "State Management",
        content: "Using useState and useReducer with TypeScript.",
      },
      {
        id: "34",
        title: "Custom Hooks",
        content: "Creating and typing custom hooks in React.",
      },
      {
        id: "35",
        title: "Context API & TypeScript",
        content: "Using TypeScript with React's Context API.",
      },
    ],
  },
  {
    id: "4",
    title: "Frontend Development",
    lessons: [
      {
        id: "41",
        title: "HTML Basics",
        content: "Introduction to HTML elements and structure.",
      },
      {
        id: "42",
        title: "CSS Fundamentals",
        content: "Understanding CSS properties and styling.",
      },
      {
        id: "43",
        title: "JavaScript Basics",
        content: "Fundamentals of JavaScript programming.",
      },
      {
        id: "44",
        title: "Responsive Design",
        content: "Using media queries and flexible layouts.",
      },
      {
        id: "45",
        title: "CSS Frameworks",
        content: "Exploring frameworks like Tailwind and Bootstrap.",
      },
    ],
  },
  {
    id: "5",
    title: "Backend with TypeScript",
    lessons: [
      {
        id: "51",
        title: "Node.js & TypeScript",
        content: "Setting up a Node.js project with TypeScript.",
      },
      {
        id: "52",
        title: "Express with TypeScript",
        content: "Creating a REST API using Express and TypeScript.",
      },
      {
        id: "53",
        title: "Database Integration",
        content: "Connecting to databases with Prisma and TypeORM.",
      },
      {
        id: "54",
        title: "Authentication & Authorization",
        content: "Implementing JWT and OAuth authentication.",
      },
      {
        id: "55",
        title: "Deploying TypeScript Apps",
        content: "Hosting and deploying TypeScript applications.",
      },
    ],
  },
];
