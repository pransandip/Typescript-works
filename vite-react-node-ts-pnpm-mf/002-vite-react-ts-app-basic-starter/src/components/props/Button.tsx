type Props = {
  handleClick: () => void;
};

const Button = (props: Props) => {
  return <button onClick={props.handleClick}>Click</button>;
};

export default Button;
