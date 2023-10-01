import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { PATH_DASHBOARD } from "../routes/paths";

type GuestGuardProps = {
  children: JSX.Element;
};

const GuestGuard = ({ children }: GuestGuardProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
};

export default GuestGuard;
