import { useState } from "react";

const Counter = ({
  initNum
}) => {
  const [num, setNum] = useState(initNum);

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <p>Count: {num}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;
