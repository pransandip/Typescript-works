import { Greet } from "../Props/Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};

export default CustomComponent;
