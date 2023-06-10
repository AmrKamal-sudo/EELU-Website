import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import HelpCenterPage from "./pages/help-center/HelpCenterPage";
import HelpCenterApplyRules from "./pages/help-center-apply-rules/HelpCenterApplyRules";
import StudentsServices from "./pages/students-services/StudentsServices";
import EcpcCenter from "./pages/ecpc-center/EcpcCenter";

const router = createBrowserRouter([
    {
        path: "/help-center",
        element: <HelpCenterPage/>
    },
    {
        path: "apply-rules",
        element: <HelpCenterApplyRules/>
    },
    {
        path: "students-services",
        element: <StudentsServices/>
    },
    {
        path: "ecpc-center",
        element: <EcpcCenter/>
    },
    {
        path: "/",
        element: <StudentsServices  />
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App>
          <RouterProvider router={router} />
      </App>
  </React.StrictMode>
);