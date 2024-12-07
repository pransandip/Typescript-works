import Intro from "./components/intro/Intro";
import Props from "./Props";
import States from "./States";
import Refs from "./Refs";
import Private from "./components/Auth/Private";
import Profile from "./components/Auth/Profile";
import List from "./components/generics/List";
import List2 from "./components/generics/List2";

// * import css
import "./App.css";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";

function App() {
  return (
    <div>
      {true && <Intro />}
      {false && <Props />}
      {false && <States />}
      {false && <Refs />}
      {false && <Private isLoggedIn={true} component={Profile} />}
      {false && (
        <List
          items={["Batman", "Superman", "Spider man"]}
          onClick={(item) => console.log(item)}
        />
      )}
      {false && (
        <List2
          items={[
            {
              id: 1,
              first: "Bruce",
              last: "Wayne",
            },
            {
              id: 2,
              first: "Clark",
              last: "Kent",
            },
            {
              id: 3,
              first: "Princess",
              last: "Diana",
            },
          ]}
          onClick={(item) => console.log(item)}
        />
      )}
      {false && <RandomNumber value={10} isPositive />}
      {false && <Toast position="center" />}
    </div>
  );
}

export default App;
