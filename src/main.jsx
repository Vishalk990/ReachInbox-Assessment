import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./fonts.css";
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Inbox from "./components/Inbox.jsx";
import DashboardHome from "./components/DashboardHome.jsx";
import SelectEmailPage from "./components/SelectEmailPage.jsx";
import Error from "./components/Error.jsx";
import EmailDetails from "./components/EmailDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "onebox",
        element: <Inbox />,
        children: [
          {
            path: "",
            element: <SelectEmailPage />,
          },
          {
            path: ":id",
            element: <EmailDetails/>,
            errorElement: <Error />, 
          }
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
