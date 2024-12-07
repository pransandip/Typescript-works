import { Fragment, memo, useState } from "react";

type CProps = "red" | "blue";

function Swatch({ color }: { color: string }) {
  console.log(`Swatch rendered ${color}`);

  return (
    <div
      style={{
        margin: 2,
        marginBottom: "0.5rem",
        width: 75,
        height: 75,
        backgroundColor: color,
      }}
    ></div>
  );
}

// memo is high order function that creates component
const MemoedSwatch = memo(Swatch);

const MemoEx = () => {
  const [appRenderIndex, setAppRenderIndex] = useState<number>(0);
  const [color, setColor] = useState<CProps>("red");

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <Fragment>
      <div>
        <h3>MemoEx</h3>
        <MemoedSwatch color={color} />
        <MemoedSwatch color={color === "red" ? "blue" : "red"} />
      </div>
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>{" "}
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change Color
        </button>
      </div>
    </Fragment>
  );
};

export default MemoEx;
