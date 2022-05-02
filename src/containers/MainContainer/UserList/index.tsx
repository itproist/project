import React from 'react';
import UserListItem from './UserListItem';

type UserListPropsType = {
  data: { id: number; name: string; age: string }[];
};

const UserList = ({ data }: UserListPropsType) => {
  return (
    <div>
      <ul>
        {data.map((el) => {
          <UserListItem name={el.name} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
