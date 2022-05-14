import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserNameAction } from '../../../store/auth/actions';

import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';

const AuthPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hasError, setError] = React.useState(false);

  const sumbitHandler = () => {
    if (password.length < 10) {
      setError(false);
      dispatch(setUserNameAction(name));
    } else {
      setError(true);
      console.log({ name, password });
    }
  };

  useEffect(() => {
    if (password.length > 10) {
      setError(false);
    } else if (password.length > 0) {
      setError(true);
    }
  }, [password]);

  return (
    <>
      <Form title="Авторизация">
        <Input title="Name" id="name" placeholder="Введите имя" value={name} setValue={setName} />
        <Input
          title="password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          setValue={setPassword}
          type="password"
        />
        {hasError && (
          <div>
            <span>Пароль должен быть больше 10 символов</span>
          </div>
        )}
        <Button title="Авторизация" onClick={sumbitHandler} />
      </Form>
    </>
  );
};

export default AuthPage;
