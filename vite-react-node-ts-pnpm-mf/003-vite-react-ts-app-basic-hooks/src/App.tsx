import { useState } from "react";
import { CustomButton } from "./components/UI/Button";
import { CustomInput } from "./components/UI/Input";
import { Greet } from "./components/Props/Greet";
import { Text } from "./components/Polymorphic/Text";
import StateEx from "./components/State/StateEx";
import CustomComponent from "./components/UI/CustomComponent";
import MemoEx from "./components/Hooks/MemoEx";

// import css
import "./App.css";
import MemoEx2 from "./components/Hooks/MemoEx2";
import UseMemoEx from "./components/Hooks/UseMemoEx";
import UseCallBackEx from "./components/Hooks/useCallBack/UseCallBackEx";

function App() {
  const [num, setNumber] = useState<string>("");

  return (
    <div>
      {false && (
        <div>
          <Greet name="sandy" isLoggedIn />
          <CustomComponent name="pnpm + react with typescript" />
          <CustomInput
            value={num}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <br />
          <CustomButton variant="primary" onClick={() => console.log({ num })}>
            Primary Button
          </CustomButton>
          <hr />
          <Text size="lg" as="h1">
            Heading
          </Text>
          <Text size="md" as="p">
            Paragraph
          </Text>
          <Text size="sm" color="secondary" as="label">
            label
          </Text>
        </div>
      )}
      {false && <StateEx />}
      {false && <MemoEx />}
      {false && <MemoEx2 />}
      {false && <UseMemoEx />}
      <UseCallBackEx />
    </div>
  );
}

export default App;
