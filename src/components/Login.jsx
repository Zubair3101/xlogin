import React, { useState } from "react";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isError, setIsError] = useState(false);
  let [loginFlag, setLoginFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "user" && password !== "password") {
      setIsError(true);
      setLoginFlag(false);
    } else if (username === "user" && password === "password") {
      setLoginFlag(true);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      {loginFlag ? (
        <p>Welcome, user</p>
      ) : (
        <>
          {isError && <p>Invalid username or password</p>}
          <form action="submit">
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input
                type="user"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {console.log(username)}
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {console.log(password)}
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
