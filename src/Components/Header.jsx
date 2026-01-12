import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "../Context/SearchContext";
import { UserPopup } from "./UserpopUp";
import { Login } from "./Login";

export const Header = () => {
  const { setOpen } = useSearch();
  const [showPopup, setShowPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">Tech-Shop</div>

        <div className="icons">
          <FiSearch
            color="white"
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />

          <FaUser
            className="icon"
            onClick={() => setShowPopup(!showPopup)}
          />
        </div>
      </header>

     
      {showPopup && (
        <div ref={popupRef}>
          <UserPopup openLogin={() => {
            setShowLogin(true);
            setShowPopup(false);
          }} />
        </div>
      )}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
    </>
  );
};
