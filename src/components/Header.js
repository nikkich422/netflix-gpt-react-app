import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { changeGptState } from "../Utils/GptSlice";
import { SupportedLang } from "../Utils/LanguageConstant";
import { setDefaultLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const shpwGptButton = useSelector((store) => store.gpt.togglerGpt);

  // console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  function handleGptToggler() {
    dispatch(changeGptState());
  }

  function handleLanguageChange(e) {
    dispatch(setDefaultLanguage(e.target.value));
  }

  return (
    <>
      <div className="w-full absolute z-10 bg-gradient-to-b from-black md-48 md:h-24 flex justify-between md:flex-nowrap flex-wrap">
        <div className="w-screen md:w-44 flex justify-center">
          <img
            className="w-44"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        {user && (
          <button
            className="my-6 px-3 mx-1 md:mx-0 md:px-6 rounded-lg py-3 md:py-0 bg-purple-900 text-white"
            onClick={handleGptToggler}
          >
            {shpwGptButton ? "HomePage" : "GPT Search"}
          </button>
        )}
        {shpwGptButton && (
          <select
            className="my-6 bg-black text-white px-2 rounded-sm"
            onChange={handleLanguageChange}
          >
            {SupportedLang.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {user && (
          <div className="flex items-center text-white gap-2 mx-2">
            <p className="bg-black hidden md:inline-block">{user.email}</p>
            {/* <img
              className="w-12 h-12 rounded-full"
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              alt="user-img"
            /> */}
            <button
              className="mx-2 my-6 py-3 px-3 md:px-6 rounded-lg  bg-blue-600 text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
