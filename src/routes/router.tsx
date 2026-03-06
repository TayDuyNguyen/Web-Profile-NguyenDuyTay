import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import IntroducePage from "../pages/introduce";
import ProjectsPage from "../pages/projects/ProjectsList";
import ProjectDetailPage from "../pages/projects/ProjectDetail";
import SkillsPage from "../pages/skills";
import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "introduce",
                element: <IntroducePage />,
            },
            {
                path: "projects",
                element: <ProjectsPage />,
            },
            {
                path: "projects/:id",
                element: <ProjectDetailPage />,
            },
            {
                path: "skills",
                element: <SkillsPage />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
        ],
    },
]);

export default router;
