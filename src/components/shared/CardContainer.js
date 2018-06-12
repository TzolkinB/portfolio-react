import React from 'react';

const CardContainer = props => {
  const {children} = props;
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default CardContainer;
