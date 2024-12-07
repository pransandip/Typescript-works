import Counter from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import User from "./components/state/User";
import User2 from "./components/state/User2";

type Props = {};

const States = (props: Props) => {
  return (
    <div>
      <LoggedIn />
      <User />
      <hr />
      <User2 />
      <hr />
      <Counter />
    </div>
  );
};

export default States;
