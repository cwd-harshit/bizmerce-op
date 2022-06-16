import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

const login = () => {
  const [login, setLogin] = useState(false);
  const no = () => {
    setLogin(!login);
  };
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  //   const redirect = location.search ? location.search.split("=")[1] : "/account";
  const Login = () => {};

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
              <form className="signup-form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confirm Password" />
                <input type="submit" hidden />
              </form>
              <div className="signup__cta">
                <div className="signup__cta_">
                  <h2>Create Account</h2>
                </div>
                <div className="signup__ask">
                  <h3>
                    Already have an account? <span onClick={no}>Log in</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className={login ? "login__right si_o" : "login__right si"}>
            <div className="login_">
              <div className="signup__head">
                <h1>Login</h1>
                <h3>Be ready with your shopping list!</h3>
              </div>
              <form
                className="signup-form"
                action="https://bizmerce-server.cwd-harshit.repl.co/api/v1/login"
                method="post"
              >
                <input
                  type="text"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <input type="submit" hidden />
              </form>
              <div className="signup__cta">
                <div className="signup__cta_">
                  <h2>Login</h2>
                </div>
                <div className="signup__ask">
                  <h3>
                    Don't have an account? <span onClick={no}>Sign Up</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default login;
