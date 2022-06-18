import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import { parseCookies } from "nookies";

const Login = () => {
  const router = useRouter();
  const { token } = parseCookies();
  if (token) {
    router.push("/account");
  }
  const alert = useAlert();
  const [login, setLogin] = useState(false);
  const no = () => {
    setLogin(!login);
  };
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  //   const redirect = location.search ? location.search.split("=")[1] : "/account";
  const Login_u = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://bizmerce-server.cwd-harshit.repl.co/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      }
    );
    const res2 = await res.json();
    if ((res2.success = false)) {
      alert.error(res2.message);
    } else {
      alert.success("Logged In!");
      cookie.set("token", res2.token);
      cookie.set("user__name", res2.user.name);
      cookie.set("user__email", res2.user.email);
      cookie.set("user__pass", res2.user.password);
      cookie.set("user__role", res2.user.role);
      cookie.set("user__profile__image", res2.user.avatar.url);
      router.push("/account");
    }
  };
  const Signup = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://bizmerce-server.cwd-harshit.repl.co/api/v1/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: loginEmail,
          password: loginPassword,
        }),
      }
    );
    const res2 = await res.json();
    console.log(res2);
    if ((res2.success = false)) {
      alert.error(res2.message);
    } else {
      alert.success("Successfully Registered!");
      cookie.set("token", res2.token);
      cookie.set("user__name", res2.user.name);
      cookie.set("user__email", res2.user.email);
      cookie.set("user__pass", res2.user.password);
      cookie.set("user__role", res2.user.role);
      cookie.set("user__profile__image", res2.user.avatar.url);
      router.push("/account");
    }
  };

  return (
    <div>
      <Head>
        <title>Login - Bizmerce</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="login">
          <div className="login__left">
            <img src="/image.jpg" alt="Quote" />
            <h1>
              You can’t wait for customers to come to you. You have to figure
              out where they are, go there and bring them back to your store
            </h1>
          </div>
          <div className="login__right">
            <div className="login_">
              <div className="signup__head">
                <h1>Create an account</h1>
                <h3>Be ready with your shopping list!</h3>
              </div>
              <form className="signup-form" onSubmit={(e) => Signup(e)}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {/* <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                /> */}
                <input type="submit" hidden />
                <div className="signup__cta">
                  <button type="submit" className="signup__cta__">
                    Sign Up
                  </button>
                  <div className="signup__ask">
                    <h3>
                      Already have an account? <span onClick={no}>Log In</span>
                    </h3>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={login ? "login__right si_o" : "login__right si"}>
            <div className="login_">
              <div className="signup__head">
                <h1>Login</h1>
                <h3>Be ready with your shopping list!</h3>
              </div>
              <form className="signup-form" onSubmit={(e) => Login_u(e)}>
                <input
                  type="email"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <input type="submit" hidden />
                <div className="signup__cta">
                  <button type="submit" className="signup__cta__">
                    Login
                  </button>
                  <div className="signup__ask">
                    <h3>
                      Don't have an account? <span onClick={no}>Sign Up</span>
                    </h3>
                  </div>
                </div>
              </form>
              {/* <div className="signup__cta">
                <div className="signup__cta_">
                  <h2>Login</h2>
                </div>
                <div className="signup__ask">
                  <h3>
                    Don't have an account? <span onClick={no}>Sign Up</span>
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
