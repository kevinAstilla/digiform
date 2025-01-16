import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorLayout from "./layouts/ErrorLayout";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import FormsPage, { loader as formsDataLoader } from "./pages/FormsPage";
import FormNewPage from "./pages/FormNewPage";
import FormDetailPage, {
  loader as formDataLoader,
  action as formDetailAction,
} from "./pages/FormDetailPage";
import FormEditPage from "./pages/FormEditPage";
import LoginPage, {
  action as LoginAction,
  loader as LoginLoader,
} from "./pages/LoginPage";
import { action as LogoutAction } from "./pages/LogoutPage";

import { action as formManipulationAction } from "./components/FormForm";
import { isAuthenticatedLoader } from "./utils/auth";

import FormComponent from "./components/FormComponent";

import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <MainLayout />,
    error: <ErrorLayout />,
    loader: isAuthenticatedLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "forms",
        children: [
          {
            index: true,
            loader: formsDataLoader,
            element: <FormsPage />,
          },
          {
            path: "new",
            action: formManipulationAction,
            element: <FormNewPage />,
          },
          {
            path: ":formId",
            id: "formDetail",
            loader: formDataLoader,
            children: [
              {
                index: true,
                action: formDetailAction,
                element: <FormDetailPage />,
              },
              {
                path: "edit",
                action: formManipulationAction,
                element: <FormEditPage />,
              },
            ],
          },
        ],
      },
      {
        path: "test",
        element: <FormComponent />,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: LoginAction,
    loader: LoginLoader,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
