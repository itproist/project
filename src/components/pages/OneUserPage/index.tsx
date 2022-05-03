import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneUserPagePropsType = {
  userInto: { id: number; name: string; age: string } | undefined;
};

const OneUserPage = ({ userInto }: OneUserPagePropsType) => {
  console.log(userInto);
  const navigate = useNavigate();
  const handler = () => {
    navigate('/users', { state: { isOpen: true } });
  };

  return (
    <>
      <h1>User Info</h1>
      <h3>{userInto?.name}</h3>
      <h3>{userInto?.age}</h3>
      <Link to="/users" state={{ isOpen: true }}>
        На список пользователей
      </Link>
      <br />
      <button type="button" onClick={handler}>
        На список пользователей
      </button>
    </>
  );
};

export default OneUserPage;
