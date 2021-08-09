import React, { Children, cloneElement } from "react";

const MyComponent = ({ children }) => {
  const save = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>parent</h1>
      {Children.map(children, (child) => cloneElement(child, { onSave: save }))}
    </div>
  );
};

export default MyComponent;