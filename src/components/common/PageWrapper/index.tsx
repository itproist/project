import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper: React.FC = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
