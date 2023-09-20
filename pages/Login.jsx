import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { toast } from "react-toastify";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Enter both email and password");
      return;
    }

    setLoading(true);
    onLogin(email, password);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
                    {loading ? (
                      <span className="flex justify-center items-center">
                        <BiLoaderCircle
                          className="mr-2 animate-spin"
                          size={22}
                        />
                      </span>
                    ) : (
                      <span>Sign in</span>
                    )}
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
            <Image
              width={2000}
              height={2000}
              src="/images/signin_bg.png"
              alt="signin_bg"
              className="img_signin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
