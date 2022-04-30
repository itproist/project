import style from './Button.module.scss';
import React from 'react';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonPropsType) => {
  return (
    <button className={style.wrapper} onClick={onClick} type="button">
      {title}
    </button>
  );
};

export default Button;
