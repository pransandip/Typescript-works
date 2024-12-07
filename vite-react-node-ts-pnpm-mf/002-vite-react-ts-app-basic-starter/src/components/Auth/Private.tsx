import Login from "./Login";
import { ProfileProps } from "./Profile";

type Props = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: Props) => {
  if (isLoggedIn) {
    return <Component name="sandy" />;
  } else {
    return <Login />;
  }
};

export default Private;
