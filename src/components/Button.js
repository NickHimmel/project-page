import React from 'react';

const Button = (props) => {
  return (
    <button onClick={(e) => props.onClick()}>Click Me</button>
  );
}

export default Button;
