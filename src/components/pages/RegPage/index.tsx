import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';

const RegPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const handler = () => {
    console.log(
      { name, setName },
      { email, setEmail },
      { password, setPassword },
      { repeatPassword, setRepeatPassword }
    );
  };

  return (
    <>
      <Form title="Регистрация">
        <Input
          title="Name"
          id="name"
          placeholder="Введите имя"
          value={name}
          setValue={setName}
          type="text"
        />
        <Input
          title="Email"
          id="email"
          placeholder="Введите почту"
          value={email}
          setValue={setEmail}
          type="text"
        />
        <Input
          title="Password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <Input
          title="Repeat password"
          id="repeatPassword"
          placeholder="Повторите пароль"
          value={repeatPassword}
          setValue={setRepeatPassword}
          type="password"
        />
        <Button title="Регистрация" onClick={handler} />
      </Form>
    </>
  );
};

export default RegPage;
