import React from 'react';
import { data } from '../../../helpers';
import PageWrapper from '../../common/PageWrapper';

const MainPage = () => {
  return (
    <PageWrapper>
      <h1>User List</h1>
      <ul>
        {data.map((el) => {
          <li>
            <h3>{el.name}</h3>
          </li>;
        })}
      </ul>
    </PageWrapper>
  );
};

export default MainPage;
