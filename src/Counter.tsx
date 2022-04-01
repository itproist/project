import React, { useState } from 'react';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;
  const [count, setCount] = useState(1);
  const addHandler = () => {
    setCount(count + 1);
  };

  const removeHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h5>{title}</h5>
      <p>{count}</p>
      <div>
        <button type="button" onClick={addHandler}>
          Плюс единица
        </button>
        <button type="button" onClick={removeHandler}>
          Минус единица
        </button>
      </div>
    </div>
  );
};

export default Counter;
