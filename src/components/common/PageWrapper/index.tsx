import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.page_wrapper}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
