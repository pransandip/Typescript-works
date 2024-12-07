import { Fragment, memo, useState } from "react";

// memo works with primitive values(shallow comparison),its breaks when referenced value passed
// like (Object and Arrays) to fix this pass callback to memo function to (deep comparison)

type CProps = "red" | "blue";

function Swatch({ params }: { params: { color: string } }) {
  console.log(`Swatch rendered ${params.color}`);

  return (
    <div
      style={{
        margin: 2,
        marginBottom: "0.5rem",
        width: 75,
        height: 75,
        backgroundColor: params.color,
      }}
    ></div>
  );
}

// memo is high order function that creates component
const MemoedSwatch = memo(Swatch, (prevProps, nextProps) => {
  return prevProps.params.color === nextProps.params.color;
});

const MemoEx2 = () => {
  const [appRenderIndex, setAppRenderIndex] = useState<number>(0);
  const [color, setColor] = useState<CProps>("red");

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <Fragment>
      <div>
        <h3>MemoEx</h3>
        <MemoedSwatch params={{ color }} />
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

export default MemoEx2;
