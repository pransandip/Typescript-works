import { useState } from "react";

type Props = {};

export const LoggedIn = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {" "}
      <button onClick={handleLogin}>Login</button>
      {"  "}
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h3>User is {isLoggedIn ? "logged in" : "logged out"}</h3>
      </div>
    </div>
  );
};
