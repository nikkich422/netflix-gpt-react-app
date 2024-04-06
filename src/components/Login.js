import React from "react";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkUserData } from "../Utils/checkUserData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { lang } from "../Utils/LanguageConstant";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const setLang = useSelector((store) => store?.config?.pageLanguage);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  function togglerLoggedUser() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleSubmit() {
    const message = checkUserData(email.current.value, password.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMsg(message);

    if (message) {
      return;
    }

    if (!isLoggedIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
          // console.log(errorCode + " - " + errorMessage);
        });
    } else {
      //login
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("login");
          // console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
          // console.log(errorCode + " - " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <img
        className="absolute h-screen w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="login-page-img"
      />
      <form
        className="absolute w-11/12 md:w-3/12 bg-black z-10 my-24 mx-auto right-0 left-0 p-4 text-white bg-opacity-70 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="m-2 p-2 font-bold text-2xl">
          {isLoggedIn ? lang[setLang]?.login_text : lang[setLang]?.signUp_text}
        </h1>
        {!isLoggedIn && (
          <input
            className="my-2 p-2 w-full bg-transparent border border-white rounded-md"
            type="text"
            placeholder={lang[setLang]?.full_name}
            name="fullname"
          />
        )}
        <input
          className="my-2 p-2 w-full bg-transparent border border-white rounded-md"
          type="text"
          ref={email}
          placeholder={lang[setLang]?.email}
          name="mail"
        />
        <input
          className="my-2 p-2 w-full bg-transparent border border-white rounded-md"
          type="password"
          name="pass"
          ref={password}
          placeholder={lang[setLang]?.password}
        />
        <p className="font-bold text-red-700 m-2">{errorMsg}</p>
        <button
          className="my-4 p-2 w-full bg-red-700 rounded-md"
          type="submit"
          onClick={handleSubmit}
        >
          {isLoggedIn ? lang[setLang]?.login_text : lang[setLang]?.signUp_text}
        </button>
        <p
          className="text-center m-2 p-2 cursor-pointer"
          onClick={togglerLoggedUser}
        >
          {isLoggedIn
            ? lang[setLang]?.login_query
            : lang[setLang]?.signUp_query}
        </p>
      </form>
    </div>
  );
};

export default Login;
