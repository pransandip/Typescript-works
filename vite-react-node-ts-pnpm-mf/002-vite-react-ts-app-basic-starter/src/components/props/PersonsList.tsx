import { Name } from "./Person.types";

type Props = {
  nameList: Name[];
};

const PersonsList = ({ nameList }: Props) => {
  return (
    <div>
      {nameList.map((item, index) => {
        return (
          <h2 key={index}>
            {item.first} {item.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonsList;
