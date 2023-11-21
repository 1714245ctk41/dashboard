import { useContext, useState } from 'react';
import { setLocalStorage } from '../../utils/localstorage';
import { TOKEN_KEY } from '../../constans';
import { ACTIONS } from '../../hooks/useAppContext';
import { AppContext } from '../../hooks/useContext';

const Login = () => {
  const {dispatch} = useContext(AppContext);
  const [formValue, setFormValue] = useState({
    name: 'test',
    email: 'test@gmail.com',
  });

  const handleChange = (key, value) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formValue;
    if (name && email && password) {
      const token = 'abc';
      dispatch({
        type: ACTIONS.AUTHOR,
        payload: {
          name: formValue.name,
          email: formValue.email,
          token: token,
        }
      })
      setLocalStorage(TOKEN_KEY, token)
  } else {
      dispatch({
        type: ACTIONS.AUTHOR,
        payload: null
      })
    }
  };

  return (
    <div style={{}}>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <form controlId='formGridEmail'>
            <label for="email">Email</label>
            <input
              type='email'
              id="email"
              value={formValue.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </form>

          <form controlId='formGridPassword'>
            <label for="password">Password</label>
            <input
              type='password'
              id='password'
              value={formValue.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </form>
        </div>

        <button variant='primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
