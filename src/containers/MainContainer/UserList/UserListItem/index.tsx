import React from 'react';

type UserItemPropsType = {
  name: string;
};

const UserListItem = ({ name }: UserItemPropsType) => {
  return (
    <>
      <li>{name}</li>
    </>
  );
};

export default UserListItem;
