import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './FormPage.module.scss';

type FormType = {
  title: string;
};

const Form: React.FC<FormType> = ({ title, children }) => {
  return (
    <PageWrapper>
      <div>
        <h1 className={style.project}>{title}</h1>
        <div className={style.position}>{children}</div>
      </div>
    </PageWrapper>
  );
};

export default Form;
