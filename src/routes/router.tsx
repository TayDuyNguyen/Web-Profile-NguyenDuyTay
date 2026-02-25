import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            // Thêm các route mới ở đây, ví dụ:
            // {
            //   path: "blog",
            //   element: <BlogPage />,
            // },
            // {
            //   path: "contact",
            //   element: <ContactPage />,
            // },
        ],
    },
]);

export default router;
