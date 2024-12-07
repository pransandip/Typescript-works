import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User2 = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Sandy Ry",
      email: "pransandip@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login2</button>{" "}
      <div>User name is: {user.name ?? "no-value"}</div>
      <div>User email is: {user.email ?? "no-value"}</div>
    </div>
  );
};

export default User2;
