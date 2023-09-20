import React, { useState } from "react";

import HomePage from "./HomePage";
import Login from "./Login";
import { toast } from "react-toastify";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "user@example.com" && password === "1Password") {
      setTimeout(() => {
        setLoggedIn(true);
        toast.success(`Welcome ${email}`, {
          position: "top-right",
          autoClose: 3000,
        });
      }, 500);
    } else {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  return <div>{loggedIn ? <HomePage /> : <Login onLogin={handleLogin} />}</div>;
}
