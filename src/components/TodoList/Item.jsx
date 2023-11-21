import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../hooks/useContext';
import { ACTIONS } from '../../hooks/useAppContext';

const Item = ({ id, todo, setContentAlert }) => {
  const {
    state: { todos },
    dispatch,
  } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [newTitle, setNewTitle] = useState();
  const [showDelete, setShowDelete] = useState(false);
  
  const handleEdit = () => {
    isDisabled && setIsDisabled(false);
    if (!isDisabled && newTitle) {
      const newTodos = todos;
      newTodos[id] = {
        title: newTitle,
      };
      dispatch({
        type: ACTIONS.EDIT_ITEM,
        payload: newTodos,
      });
      setContentAlert('Add item success!!');
      setIsDisabled(true);
    }
  };

  const changeHandle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    const newTodos = todos;
    delete newTodos[id];
    dispatch({
      type: ACTIONS.REMOVE_TODO_ITEM,
      payload: newTodos,
    });
    setContentAlert('Remove item success!!');
  };

  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  };
  useEffect(() => {
    todo && setNewTitle(todo.title);
  }, [todo]);
  return (
    <div className='m-b-10'>
      <div>
        <input
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
          value={newTitle}
          disabled={isDisabled}
          onChange={changeHandle}
        />

        <button variant='success' onClick={handleEdit}>
          <FontAwesomeIcon icon='fas fa-edit' style={{ color: '#ffffff' }} />
        </button>
        <button variant='danger' onClick={handleShowDelete}>
          <FontAwesomeIcon
            icon='fa-solid fa-trash-can'
            style={{ color: '#ffffff' }}
          />
          {showDelete && (
            <div className='confirm_delete'>
              <div className='confirm_delete_container p-10'>
                <p>Do you really want to remove?</p>
                <div className='me-2' aria-label='Second group'>
                  <button onClick={() => setShowDelete(false)}>Cancel</button>
                  <button variant='outline-secondary' onClick={handleRemove}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Item;
