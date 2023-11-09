import { memo, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Author from '../screens/Authori';

const AuthGuard = ({ children }) => {
  const [requestedLocation, setRequestedLocation] =
    (useState < string) | (null > null);
  const { pathname } = useLocation();
  const { isAuthenticated, isInitialized } = {
    isAuthenticated: true,
    isInitialized: false,
  };

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Author />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default memo(AuthGuard);
