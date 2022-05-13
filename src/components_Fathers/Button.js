import React from "react";

function Button({ setCurrentQuestion, maximum, name, direction }) {
  function handleClick() {
    setCurrentQuestion((old) => {
      console.log(old, maximum);
      if (direction == 1 && old >= maximum) return old;
      if (direction == -1 && old <= 0) return old;
      return old + direction;
    });
  }

  return (
    <div>
      <button onClick={handleClick}>{<i className={name}></i>}</button>
    </div>
  );
}

export default Button;
