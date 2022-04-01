import React, { SyntheticEvent } from 'react';

type NameComponentProst = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentProst) => {
  const { firstName, lastName } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.target, 'target');
    console.log(event.currentTarget, 'currentTarget');
  };

  const mainHandler = (event: SyntheticEvent) => {
    console.log(event.target, 'target');
    console.log(event.currentTarget, 'currentTarget');
  };

  return (
    <div role="presentation" onClick={mainHandler}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button type="button" onClick={handler}>
        click me
      </button>
    </div>
  );
};

export default NameComponent;
