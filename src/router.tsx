import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProjectsLayout from "./ProjectsLayout";
import { Carousal, Counter } from "./projects";
import Todos from "./projects/todo/Todos";
import Tabs from "./projects/tabs/Tabs";
import StarRating from "./projects/starRating/StarRating";

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
      {
        path: "carousal",
        element: <Carousal />,
      },
      {
        path: "bg-changer",
        element: <h1>Bg Changer</h1>,
      },

      {
        path: "accordion-one",
        element: <h1>Accordion one</h1>,
      },

      {
        path: "accordion-two",
        element: <h1>Accordion two</h1>,
      },
      {
        path: "todo",
        element: <Todos />,
      },
      {
        path: "tabs",
        element: <Tabs />,
      },
      {
        path: "star-rating",
        element: <StarRating />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;
