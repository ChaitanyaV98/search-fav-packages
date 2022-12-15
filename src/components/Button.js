import React from "react";

function Button({ label, onClick, classNames }) {
  return (
    <button onClick={onClick} className={classNames}>
      {label}
    </button>
  );
}

export default Button;
