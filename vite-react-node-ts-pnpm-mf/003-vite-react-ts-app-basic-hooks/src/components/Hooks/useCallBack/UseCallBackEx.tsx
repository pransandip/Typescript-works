import { useState, useCallback } from "react";
import List from "./List";

type Props = {};

const UseCallBackEx = (props: Props) => {
  const [number, setNumber] = useState<number>(1);
  const [dark, setDark] = useState<boolean>(false);

  const getItems = useCallback(
    (incrementor: number) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "red" : "blue",
    height: "90px",
    width: "90px",
  };

  return (
    <div>
      <div style={theme}></div>
      <input
        type="number"
        value={number}
        style={{ padding: "10px", margin: "5px" }}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />{" "}
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle button
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallBackEx;
