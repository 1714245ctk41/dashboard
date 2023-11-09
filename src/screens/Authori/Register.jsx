import { memo, useContext, useState } from 'react';
import { setLocalStorage } from '../../utils/localstorage';
import { AppContext } from '../../hooks/useContext';
import { ACTIONS } from '../../hooks/useAppContext';

const Register = ({ setUser }) => {
  const { dispatch } = useContext(AppContext);

  const [formValue, setFormValue] = useState({
    name: 'test',
    email: 'test@gmail.com',
    password: 'test',
  });

  const handleChange = (key, value) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('this is submit handle', e.target);
    const { name, email, password } = formValue;
    if (name && email && password) {
      const token = 'abc';
      dispatch({
        type: ACTIONS.AUTHOR,
        payload: {
          name: formValue.name,
          email: formValue.email,
          token: token,
        },
      });

      setLocalStorage('TOKEN_KEY', token);
    } else {
      setUser(null);
    }
  };

  return (
    <div style={{}}>
      <form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <input className='mb-3' controlId='formGridAddress1'>
            <label for='name'>name</label>
            <input
              id='name'
              value={formValue.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </input>

          <input controlId='formGridEmail'>
            <label for='email'>Email</label>
            <input
              id='email'
              type='email'
              value={formValue.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </input>

          <input controlId='formGridPassword'>
            <label for='password'>Password</label>
            <input
              id='password'
              type='password'
              value={formValue.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </input>
        </Row>

        <button variant='primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default memo(Register);
