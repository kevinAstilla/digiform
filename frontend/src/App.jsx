import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorLayout from "./layouts/ErrorLayout";
import MainLayout from "./layouts/MainLayout";
import FormsPage from "./pages/FormsPage";
import FormNewPage from "./pages/FormNewPage";
import FormDetailPage, { loader as formLoader } from "./pages/FormDetailPage";
import FormEditPage from "./pages/FormEditPage";
import FormNewSubmissionPage from "./pages/FormNewSubmissionPage";
import LoginPage, {
  action as LoginAction,
  loader as LoginLoader,
} from "./pages/LoginPage";
import { action as LogoutAction } from "./pages/LogoutPage";
import { action as formManipulationAction } from "./components/FormForm";
import { isAuthenticatedLoader } from "./utils/auth";
import FormComponent from "./components/FormComponent";
import SubmissionsPage from "./pages/SubmissionsPage";

import "./App.css";
import TemplatesPage, { loader as TemplateLoader } from "./pages/TemplatesPage";
import SubmissionLayout from "./layouts/SubmissionLayout";

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
        element: <Navigate to="/forms" replace />,
      },
      {
        path: "forms",
        children: [
          {
            index: true,
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
            loader: formLoader,
            children: [
              {
                index: true,
                element: <FormDetailPage />,
              },
              {
                path: "submissions",
                action: formManipulationAction,
                element: <SubmissionsPage />,
              },
            ],
          },
        ],
      },
      {
        path: "templates",
        children: [
          {
            index: true,
            element: <TemplatesPage />,
            loader: TemplateLoader,
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
  {
    path: "/forms/:formId/newsubmission",
    element: <SubmissionLayout />,
    children: [
      {
        index: true,
        element: <FormNewSubmissionPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
