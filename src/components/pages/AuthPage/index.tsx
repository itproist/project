import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const sumbitHandler = () => {
    console.log({ name, password });
  };
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
        <Button title="Авторизация" onClick={sumbitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
