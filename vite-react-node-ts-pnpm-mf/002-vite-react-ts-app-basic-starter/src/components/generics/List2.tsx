type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List2 = <T extends { first: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>list of items</h2>
      {items?.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item?.first}
          </div>
        );
      })}
    </div>
  );
};

export default List2;
