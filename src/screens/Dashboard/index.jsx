import { useContext, useEffect } from 'react';
import TodoList from '../../components/TodoList';
import Author from '../Authori';
import { getLocalStorage } from '../../utils/localstorage';
import { TOKEN_KEY } from '../../constans';
import './index.css';
import { AppContext } from '../../hooks/useContext';
import { ACTIONS } from '../../hooks/useAppContext';
import NavbarVertical from '../../components/NavbarVertical';

const Dashboard = ({}) => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const token = getLocalStorage(TOKEN_KEY);
    console.log(token, 'tokentoken');
    if (token) {
      console.log(token, 'tokentoken');
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
      {!state || (state && !state.user) ? <Author /> : <NavbarVertical />}
    </div>
  );
};

export default Dashboard;
