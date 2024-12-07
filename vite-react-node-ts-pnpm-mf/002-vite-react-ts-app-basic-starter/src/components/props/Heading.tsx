type Props = {
  children: string;
};

const Heading = (props: Props) => {
  return <h2>{props.children}</h2>;
};

export default Heading;
