import React, { useEffect, useState } from "react";
import { sculptureList } from "../../db/data";

type Props = typeof sculptureList;

const StateEx = () => {
  const [index, setIndex] = useState(0);

  let sculpture = sculptureList[index > 11 ? 0 : index];

  const handleClick = () => {
    setIndex((s) => s + 1);
  };

  // updates when state changes
  useEffect(() => {
    console.log({ index });
    if (index > 11) {
      setIndex(0);
    }
  }, [index]);

  return (
    <React.Fragment>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img className="logo" src={sculpture.url} alt={sculpture.alt} />
      <h4>{sculpture.description}</h4>
    </React.Fragment>
  );
};

export default StateEx;
