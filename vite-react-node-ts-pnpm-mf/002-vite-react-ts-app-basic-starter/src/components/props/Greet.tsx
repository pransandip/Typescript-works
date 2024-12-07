type Props = {
  name: string;
  age?: number;
};

const Greet = ({ name, age = 0 }: Props) => {
  return (
    <div>
      <h3>
        Hi welcome name: {name}, age: {age}
      </h3>
    </div>
  );
};

export default Greet;
