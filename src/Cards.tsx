import { Rating } from '@mui/material';
import React from 'react';
import logo from './dress.jpg';

type DressPropsType = {
  title: string;
  price: string;
};

const Cards = (props: DressPropsType) => {
  const { title, price } = props;
  const [count, setCount] = React.useState(0);

  const addProduct = () => {
    setCount(count + 1);
    console.log(count);
  };

  const removeProduct = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div className="item">
      <div className="item__images">
        <img src={logo} alt="logo" />
      </div>
      <div className="item__rating">
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </div>
      <p className="item__title">{title}</p>
      <p className="item__price">
        <i>{price} за штуку</i>
      </p>

      <div>
        <button type="button" onClick={addProduct}>
          +
        </button>
        <button type="button" onClick={removeProduct}>
          -
        </button>
      </div>
    </div>
  );
};

export default Cards;
