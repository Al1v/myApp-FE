import { Home, Registration, Login, Root } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/error-page";
import { authAction } from "./pages/Login";
import { authControl } from "./hooks/authHook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "root",
    errorElement: <ErrorPage />,

    children: [
      { path: "/", element: <Home />, loader: authControl },
      { path: "auth/register", element: <Registration />, action: authAction },
      { path: "auth/login", element: <Login />, action: authAction },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
