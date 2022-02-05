import "./Header.scss";

import { Link } from "react-router-dom";

import ham_menu from "../../assets/img/ham_menu.svg";
import userpic from "../../assets/img/Userpic.png";
import youtube_logo from "../../assets/img/youtube_logo.svg";

import Camera from "../Lib/Svgs/camera";
import App from "../Lib/Svgs/app";
import Notification from "../Lib/Svgs/Notification";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header__left">
            <button className="header__left-btn">
              <img src={ham_menu} alt="" width="20px" height="17px" />
            </button>
            <Link to="/">
              <img src={youtube_logo} alt="" width="116px" height="25px" />
            </Link>
            <div className="search">
              <input
                className="search__input"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="header__right">
            <Camera />
            <App />
            <Notification />
            <img src={userpic} alt="" width="40px" height="40px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
