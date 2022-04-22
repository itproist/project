import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <PageWrapper>
      <main className={style.main}>
        <h1>Auth content</h1>
      </main>
    </PageWrapper>
  );
};

export default AuthPage;
