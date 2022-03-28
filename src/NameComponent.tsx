import React from 'react';

type NameComponentProst = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentProst) => {
  const { firstName, lastName } = props;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default NameComponent;
