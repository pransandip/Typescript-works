type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button2 = (props: Props) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click2</button>
  );
};

export default Button2;
