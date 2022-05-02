import React from 'react';
import UserList from '../../../containers/MainContainer/UserList';
import { data } from '../../../helpers';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <PageWrapper>
      <div className={style.main}>
        <h1>User List</h1>
        {/* <UserList data={data} /> */}
        <div>
          <ul>
            {data.map((el) => {
              {
                return <li>{el.name}</li>;
              }
            })}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
