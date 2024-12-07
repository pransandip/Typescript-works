import { useEffect, useState } from "react";

type Props = {
  getItems: (incrementor: number) => number[];
};

const List = ({ getItems }: Props) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems(4));
    console.log("updating items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default List;
