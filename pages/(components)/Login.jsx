import Link from "next/link";
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(email, password);
    onLogin ? "" : alert(`welcome ${email}`);
  };

  return (
    <>
      <div className="sign_in container_main">
        <div className="sign_in_inner">
          <div className="white_box">
            <div className="white_box_inner">
              <div className="header">
                <h2>Welcome Back!</h2>
              </div>

              <div className="form_sec">
                <p>Login to your account</p>

                <div className="inputs_sec">
                  <div className="email">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="password">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      required
                    />
                  </div>

                  <div className="checkbox">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <p>Keep me signed in</p>
                  </div>

                  <button onClick={handleLogin} type="submit">
                    Sign in
                  </button>
                </div>
                <div className="bottom_sec">
                  <p>
                    Don&apos;t Have an account?{" "}
                    <Link className="link_text" href="/sign_up">
                      Sign Up!
                    </Link>
                  </p>
                  <p>
                    <Link className="link_text" href="/forget-password">
                      Forgot password?{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="img_sec">
            <img src="/images/signin_bg.png" alt="signin_bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
