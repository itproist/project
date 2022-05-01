import React from 'react';
import { useEffect } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hasError, setError] = React.useState(false);
  const sumbitHandler = () => {
    if (password.length < 10) {
      setError(false);
      console.log('Пароль должен быть больше 10 символов');
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
    <PageWrapper>
      <Form title="Авторизация">
        <Input title="Name" id="name" placeholder="Введите имя" value={name} setValue={setName} />
        <Input
          title="Password"
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
    </PageWrapper>
  );
};

export default AuthPage;
