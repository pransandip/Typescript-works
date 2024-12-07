import { Fragment, memo, useState, useMemo, useCallback } from "react";

type CProps = "red" | "blue";

function Swatch({
  params,
  onClick,
}: {
  params: { color: string };
  onClick: () => void;
}) {
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
      onClick={onClick}
    ></div>
  );
}

// memo is high order function that creates component
const MemoedSwatch = memo(Swatch);

const UseMemoEx = () => {
  // Defined State
  const [appRenderIndex, setAppRenderIndex] = useState<number>(0);
  const [color, setColor] = useState<CProps>("red");

  console.log(`App rendered ${appRenderIndex}`);

  // every time is returns same value until dependency array changes
  const params = useMemo(() => ({ color }), [color]);
  // it returns exact same func by reference not func implementation
  const onClick = useCallback(() => {}, []);

  return (
    <Fragment>
      <div>
        <h3>MemoEx</h3>
        <MemoedSwatch params={params} onClick={onClick} />
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

export default UseMemoEx;
