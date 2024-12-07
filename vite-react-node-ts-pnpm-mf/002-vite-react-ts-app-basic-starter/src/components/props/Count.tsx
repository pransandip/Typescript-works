import { useState } from "react";

type Props = {};

const Count = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Awesome</h1>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
};

export default Count;
