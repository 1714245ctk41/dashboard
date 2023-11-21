import { Link, redirect } from 'react-router-dom';
import Item from './Item';
import { removeLocalStorage } from '../../utils/localstorage';
import { TOKEN_KEY } from '../../constans';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../hooks/useContext';
import { ACTIONS } from '../../hooks/useAppContext';
import Alert from '../Alert';

const TodoList = () => {
  const {
    state: { todos },
    dispatch,
  } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [contentAlert, setContentAlert] = useState('');

  const logoutHandle = () => {
    dispatch({
      type: ACTIONS.AUTHOR,
      payload: null,
    });
    removeLocalStorage(TOKEN_KEY);
    redirect('/login');
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: {
        [Math.random()]: {
          title,
        },
      },
    });
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (contentAlert) {
      setTimeout(() => {
        setContentAlert('');
      }, 2000);
    }
  }, [contentAlert]);
  
  return (
    <div>
      {contentAlert && (
        <Alert>
          {contentAlert}
        </Alert>
      )}

      <div className='flex flex-end m-b-20'>
        <span className='pointer' onClick={logoutHandle}>
          Logout
        </span>
      </div>
      <form onSubmit={handleAddItem}>
        <div className='mb-3'>
          <input
            placeholder='Title'
            aria-label='Title'
            aria-describedby='basic-addon2'
            value={title}
            onChange={handleChange}
            autoFocus
          />
          <button variant='primary' id='button-addon2' type='submit'>
            Add
          </button>
        </div>
      </form>

      {Object.entries(todos).map(([key, todo]) => (
        <Item
          key={key}
          todo={todo}
          id={key}
          setContentAlert={setContentAlert}
        />
      ))}
    </div>
  );
};
export default TodoList;
