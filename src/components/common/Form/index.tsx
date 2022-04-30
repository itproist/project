import React from 'react';
import style from './FormPage.module.scss';

type FormType = {
  title: string;
};

const Form: React.FC<FormType> = ({ title, children }) => {
  return (
    <div className={style.form}>
      <h1 className={style.form__name}>{title}</h1>
      <form className={style.form__body}>{children}</form>
    </div>
  );
};

export default Form;
