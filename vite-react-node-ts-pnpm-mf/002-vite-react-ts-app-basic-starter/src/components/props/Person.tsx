import { PersonType } from "./Person.types";

const Person = ({ personName }: PersonType) => {
  return (
    <div>
      <h1>
        {personName.first} {personName.last}
      </h1>
    </div>
  );
};

export default Person;
