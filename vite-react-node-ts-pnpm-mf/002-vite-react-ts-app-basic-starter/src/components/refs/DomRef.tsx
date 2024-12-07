import { useRef, useEffect } from "react";

type Props = {};

const DomRef = (props: Props) => {
  //*-when you know useRef never be null when you use it
  const inputRef = useRef<HTMLInputElement>(null!);

  const btnClickHandler = () => {
    console.log(inputRef.current.value);
  };

  const changeHandler = () => {
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.value = "let's start";
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="input-box-1">Input box</label> <br />
      <input
        id="input-box-1"
        type="text"
        onChange={changeHandler}
        ref={inputRef}
      />{" "}
      <button onClick={btnClickHandler}>click</button>
    </div>
  );
};

export default DomRef;
