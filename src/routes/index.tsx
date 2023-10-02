import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import GuestGuard from "../guards/GuestGuard";

const Loadable = (Component: JSX.ElementType) => (props: ExpectedAny) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Authentication
const Login = Loadable(lazy(() => import("../screens/Login")));
const Register = Loadable(lazy(() => import("../screens/Register")));
// Dashboard

export const routers = createBrowserRouter([
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: "register",
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        ),
      },
    ],
  },
]);
