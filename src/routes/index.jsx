import { Suspense, lazy } from "react";
import { createBrowserRouter, useRoutes } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import GuestGuard from "../guards/GuestGuard";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Authentication
const Register = Loadable(lazy(() => import("../screens/Register")));
const Dashboard = Loadable(lazy(() => import("../screens/Dashboard")));
const Login = Loadable(lazy(() => import("../screens/Login")));
// Dashboard

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/auth",
    element: <Register />,
    errorElement: <Login />,
  }
]);

// export const Router = () => useRoutes([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "auth",
//     element: <Dashboard />,
//     // children: [
//     //   {
//     //     path: "login",
//     //     element: (
//     //       // <GuestGuard>
//     //         <Login />
//     //       // </GuestGuard>
//     //     ),
//     //   },
//     //   {
//     //     path: "register",
//     //     element: (
//     //       <GuestGuard>
//     //         <Register />
//     //       </GuestGuard>
//     //     ),
//     //   },
//     // ],
//   },
// ]);
