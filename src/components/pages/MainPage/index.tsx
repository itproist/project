import React from 'react';
import style from './MainPage.module.scss';
import PageWrapper from '../../common/PageWrapper';

const MainPage = () => {
  return (
    <PageWrapper>
      <main className={style.main}>
        <h1>Main content</h1>
      </main>
    </PageWrapper>
  );
};

export default MainPage;
