import { useContext, useEffect } from 'react';
import Login from './Login';
import { AppContext } from '../../hooks/useContext';
import { getLocalStorage } from '../../utils/localstorage';
import { ACTIONS } from '../../hooks/useAppContext';
import Dashboard from '../Dashboard';
import NavbarVertical from '../../components/NavbarVertical';
import { TOKEN_KEY } from '../../constans';
import { Navigate } from 'react-router-dom';

const Author = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const token = getLocalStorage(TOKEN_KEY);
    if (token) {
      dispatch({
        type: ACTIONS.AUTHOR,
        payload: {
          name: 'test',
          email: 'test@gmail.com',
          token: token,
        },
      });
    }
  }, [dispatch]);

  return (
    <div>
      {!state || (state && !state.user) ? <Login /> : <Navigate to="/dashboard" />}
    </div>
  );
};

export default Author;
