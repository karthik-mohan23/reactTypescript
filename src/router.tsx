import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProjectsLayout from "./ProjectsLayout";
import { Counter } from "./projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/projects",
    element: <ProjectsLayout />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;