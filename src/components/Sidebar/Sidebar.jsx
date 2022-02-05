import "./Sidebar.scss";
import { NavLink, Link } from "react-router-dom";

//Components
import Trending from "../Lib/Svgs/Trending";
import Home from "../Lib/Svgs/home";
import Subscribing from "../Lib/Svgs/Subscribing";
import Library from "../Lib/Svgs/library";
import History from "../Lib/Svgs/history";
import Watch from "../Lib/Svgs/watch";
import Favoruties from "../Lib/Svgs/star";
import Liked from "../Lib/Svgs/liked";
import Music from "../Lib/Svgs/music";
import Games from "../Lib/Svgs/games";
import Path from "../Lib/Svgs/path";

// images
import FirstSubscriber from "../../assets/img/user-one.png";
import SecondSubscriber from "../../assets/img/user-two.png";
import ThirdSubscriber from "../../assets/img/user-three.png";
import FourthSubscriber from "../../assets/img/user-four.png";
import FifthSubscriber from "../../assets/img/user-five.png";
import SixthSubscriber from "../../assets/img/user-six.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/"
          exact
        >
          <Home />
          <p className="sidebar__menu-text">Home</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/trending"
        >
          <Trending />
          <p className="sidebar__menu-text ">Trending</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/subscribing"
        >
          <Subscribing />
          <p className="sidebar__menu-text">Subscribing</p>
        </NavLink>
      </div>
      <div className="sidebar-center center">
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/library"
          exact
        >
          <Library />
          <p className="sidebar__menu-text">Library</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/history"
        >
          <History />
          <p className="sidebar__menu-text ">History</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/watch-later"
        >
          <Watch />
          <p className="sidebar__menu-text">Watch later</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/favourites"
        >
          <Favoruties />
          <p className="sidebar__menu-text">Favourites</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/liked-videos"
        >
          <Liked />
          <p className="sidebar__menu-text">Liked videos</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/music"
        >
          <Music />
          <p className="sidebar__menu-text">Music</p>
        </NavLink>
        <NavLink
          className="sidebar__menu"
          activeClassName="sidebar__menu-active"
          to="/games"
        >
          <Games />
          <p className="sidebar__menu-text">Games</p>
        </NavLink>
        <button className="more__btn">
          <Path />
          <p className="more__text">Show more</p>
        </button>
      </div>
      
      <div className="sidebar-bottom">
        <h2 className="sidebar-bottom__title">Subscriptions</h2>
        <Link to="/channel" className="sidebar-bottom__link">
          <img
            className="sidebar-bottom__img"
            src={FirstSubscriber}
            alt=""
            width="26px"
            height="26px"
          />
          <p className="sidebar-bottom__name">Gussie Singleton</p>
        </Link>
        <Link to="/channel" className="sidebar-bottom__link">
          <img
            className="sidebar-bottom__img"
            src={SecondSubscriber}
            alt=""
            width="26px"
            height="26px"
          />
          <p className="sidebar-bottom__name">Nora Francis</p>
        </Link>
        <Link to="/channel" className="sidebar-bottom__link">
          <img
            className="sidebar-bottom__img"
            src={ThirdSubscriber}
            alt=""
            width="26px"
            height="26px"
          />
          <p className="sidebar-bottom__name">Belle Briggs</p>
        </Link>
        <Link to="/channel" className="sidebar-bottom__link">
          <img
            className="sidebar-bottom__img"
            src={FourthSubscriber}
            alt=""
            width="26px"
            height="26px"
          />
          <p className="sidebar-bottom__name">Eunice Cortez</p>
        </Link>
        <Link to="/channel" className="sidebar-bottom__link">
          <img
            className="sidebar-bottom__img"
            src={FifthSubscriber}
            alt=""
            width="26px"
            height="26px"
          />
          <p className="sidebar-bottom__name">Emma Hanson</p>
        </Link>
        <Link to="/channel" className="sidebar-bottom__link">
          <img
            className="sidebar-bottom__img"
            src={SixthSubscriber}
            alt=""
            width="26px"
            height="26px"
          />
          <p className="sidebar-bottom__name">Leah Berry</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
