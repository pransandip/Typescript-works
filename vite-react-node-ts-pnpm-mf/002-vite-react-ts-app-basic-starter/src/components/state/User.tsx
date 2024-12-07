import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Sandy Ry",
      email: "pransandip@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>{" "}
      <button onClick={handleLogout}>Logout</button>
      <div>User name is: {user?.name ?? "login first"}</div>
      <div>User email is: {user?.email ?? "login first"}</div>
    </div>
  );
};

export default User;
