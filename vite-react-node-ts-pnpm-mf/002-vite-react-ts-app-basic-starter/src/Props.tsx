import Button from "./components/props/Button";
import Button2 from "./components/props/Button2";
import Container from "./components/props/Container";
import Greet from "./components/props/Greet";
import Heading from "./components/props/Heading";
import Input from "./components/props/Input";
import Oscar from "./components/props/Oscar";
import Person from "./components/props/Person";
import PersonsList from "./components/props/PersonsList";
import Status from "./components/props/Status";

const Props = () => {
  const personName = {
    first: "Water",
    last: "Effect",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div>
      <Greet name="Sandy" age={28} />
      <hr />
      <Person personName={personName} />
      <PersonsList nameList={nameList} />
      <Status status="loading" />
      <hr />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to RRR</Heading>
      </Oscar>
      <hr />
      <Button
        handleClick={() => {
          console.log("btn clicked");
        }}
      />
      <span> </span>
      <Button2
        handleClick={(event, id) => {
          console.log("btn clicked2", event, id);
        }}
      />{" "}
      <Input
        value=""
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <hr />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
};

export default Props;
