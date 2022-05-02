import React from 'react';

import { data } from '../../../helpers';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <PageWrapper>
      <div className={style.main}>
        <h1>User List</h1>

        <div>
          <ul>
            {data.map((el) => {
              {
                return <li key={el.id}>{el.name}</li>;
              }
            })}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
